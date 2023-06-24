import { Paper, TextField, Typography, Box, Button, InputAdornment, Backdrop, Slider } from "@mui/material";
import { useState } from 'react'
import { Link } from 'react-router-dom'
import ApiService from "../services/api";
import LoadingScreen from "./Loading";
import DownloadIcon from '@mui/icons-material/Download';
import QueryBuilder from '@mui/icons-material/QueryBuilder';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Article from "./Article";
import { useNavigate } from "react-router-dom";


const VideoForm = () => {
    const navigate = useNavigate();

    const [link, setLink] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [lengthAnnotation, setLengthAnnotation] = useState("");
    const [lengthArticle, setLengthArticle] = useState("");
    const [timingScreenshot, setTimingScreenshot] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [error1, setError1] = useState(false);
    const [helperText1, setHelperText1] = useState('');
    const [error2, setError2] = useState(false);
    const [helperText2, setHelperText2] = useState('');
    const [error3, setError3] = useState(false);
    const [helperText3, setHelperText3] = useState('');

    function validateTime(time: string) {
        const regex = /^([0-1]\d|2[0-3]):([0-5]\d):([0-5]\d)$/;
        return regex.test(time);
    }

    // handle startTime field changes
    const handleStartTimeChange = (event: any) => {
        // check format 00:00:00
        if (!validateTime(event.target.value)) {
            setError1(true);
            setHelperText1('Неверный формат');
        }
        else {
            setError1(false);
            setHelperText1('');
        }
        setStartTime(event.target.value);
    };

    // handle endTime field changes
    const handleEndTimeChange = (event: any) => {
        // check format 00:00:00
        if (!validateTime(event.target.value)) {
            setError2(true);
            setHelperText2('Неверный формат');
        }
        else {
            setError2(false);
            setHelperText2('');
        }
        setEndTime(event.target.value);
    };

    //handle email field changes
    const handleLinkChange = (event: any) => {
        // check if email is valid
        const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
        if (
            urlRegex.test(
                event.target.value
            )
        ) {
            setError3(false);
            setHelperText3('');
        } else {
            setError3(true);
            setHelperText3('Неверный формат ввода ссылки');
        }
        setLink(event.target.value);
    };

    // handle password field changes
    const handleAnnotationChange = (event: any) => {
        if (event.target.value === "") event.target.value = "0"
        setLengthAnnotation(event.target.value);
    };

    const handleArticleChange = (event: any) => {
        if (event.target.value === "") event.target.value = "0"
        setLengthArticle(event.target.value);
    };
    const handleTimingChange = (event: any) => {
        if (event.target.value === "") event.target.value = "0"
        setTimingScreenshot(event.target.value);
    };


    // handle submit
    async function handleSubmit(event: any) {
        let errorEmpty = false;
        // check if link valid
        if (!link) {
            setError3(true);
            errorEmpty = true;
            setHelperText3('Введите ссылку на видео');
        }
        else {
            setError3(false);
            errorEmpty = false;
            setHelperText3('');
        }

        if ((!error1 && !error2 && !error3 && !errorEmpty)) {
            setIsLoading(true);
            //send data to server
            let response = ApiService.createRecord(
                {
                    "settings": {
                        "annotation_length": parseInt(lengthAnnotation) || 0,
                        "article_length": parseInt(lengthArticle) || 0,
                        "end_timecode": endTime,
                        "screenshot_timing": parseInt(timingScreenshot) || 0,
                        "start_timecode": startTime
                    },
                    "video_link": link
                }
            );
            let result = await response;
            setIsLoading(false);
            console.log('video', result.data.id);
            navigate(`article/${result.data.id}`)

            console.log('hereeeee')
        }
    };

    return (
        <Box flexDirection={'column'} alignItems='center' justifyContent="center" sx={{ display: 'flex' }}>
            {isLoading && <LoadingScreen />}
            <Paper elevation={6}
                sx={{ mt: '-80px' }}
                style={{
                    width: '600px', minHeight: '430px', borderRadius: '30px'
                }}>
                <Typography variant="h2"
                    sx={{
                        textAlign: 'center',
                        mr: 2,
                        mt: 1,
                        pt: 4,
                        flexGrow: 1,
                        fontFamily: 'PT Sans Caption',
                        fontWeight: 700,
                        fontSize: '28px',
                        color: '#1F1B4C',
                        textDecoration: 'none',
                    }}
                >
                    Сгенерируйте статью по ссылке
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="center" flexDirection={'column'} sx={{ mt: 3 }}>
                    <TextField onChange={handleLinkChange} error={error3} helperText={helperText3}
                        id="outlined-basic" label="Ссылка на видео с YouTube" variant="outlined" sx={{ mt: 1, width: '460px' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <DownloadIcon sx={{ color: '#1F1B4C' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" flexDirection={'row'} sx={{ mt: 2, width: '450px', ml: 'auto', mr: 'auto' }}>
                    <Typography variant="body1"
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'PT Sans Caption',
                            fontWeight: 700,
                            fontSize: 20,
                            color: '#1F1B4C',
                            textDecoration: 'none',
                            mt: 2
                        }}
                    >
                        ОТ
                    </Typography>
                    <TextField onChange={handleStartTimeChange} error={error1} helperText={helperText1}
                        id="outlined-basic" label="чч:мм:сс" variant="outlined" sx={{ mt: 1, width: '160px' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <QueryBuilder sx={{ color: '#1F1B4C' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Typography variant="body1"
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'PT Sans Caption',
                            fontWeight: 700,
                            fontSize: 20,
                            color: '#1F1B4C',
                            textDecoration: 'none',
                            mt: 2,
                            ml: 3
                        }}
                    >
                        ДО
                    </Typography>
                    <TextField onChange={handleEndTimeChange} error={error2} helperText={helperText2}
                        id="outlined-basic" label="чч:мм:сс" variant="outlined" sx={{ mt: 1, width: '160px' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <QueryBuilder sx={{ color: '#1F1B4C' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" flexDirection={'row'} sx={{ mt: 1, width: '450px', ml: 'auto', mr: 'auto' }}>
                    <Box display="flex" alignItems="center" justifyContent="center" flexDirection={'column'} sx={{ width: '450px', ml: 'auto', mr: 'auto' }}>
                        <Typography variant="body1"
                            sx={{
                                flexGrow: 1,
                                fontFamily: 'PT Sans Caption',
                                fontWeight: 700,
                                fontSize: 13,
                                color: '#1F1B4C',
                                textDecoration: 'none',
                                mt: 2
                            }}
                        >
                            Количество символов аннотации
                        </Typography>
                        <TextField onChange={handleAnnotationChange}
                            id="outlined-basic" label="Не более N" variant="outlined" type="number" sx={{ mt: 1, width: '160px' }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <AppRegistrationIcon sx={{ color: '#1F1B4C' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />

                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center" flexDirection={'column'} sx={{ width: '450px', ml: 'auto', mr: 'auto' }}>
                        <Typography variant="body1"
                            sx={{
                                flexGrow: 1,
                                fontFamily: 'PT Sans Caption',
                                fontWeight: 700,
                                fontSize: 13,
                                color: '#1F1B4C',
                                textDecoration: 'none',
                                mt: 2
                            }}
                        >
                            Количество символов статьи
                        </Typography>
                        <TextField onChange={handleArticleChange}
                            id="outlined-basic" label="Не более N" variant="outlined" type="number" sx={{ mt: 1, width: '160px' }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <AppRegistrationIcon sx={{ color: '#1F1B4C' }} />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Box>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" flexDirection={'row'} sx={{ mt: 2, width: '450px', ml: 'auto', mr: 'auto' }}>
                    <Typography variant="body1"
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'PT Sans Caption',
                            fontWeight: 700,
                            fontSize: 13,
                            color: '#1F1B4C',
                            textDecoration: 'none',
                        }}
                    >
                        Тайминг скриншотов (сек)
                    </Typography>
                    <Slider onChange={handleTimingChange}
                        aria-label="Seconds"
                        defaultValue={30}
                        valueLabelDisplay="auto"
                        step={5}
                        marks
                        min={0}
                        max={60}
                        sx={{ ml: 3, mr: 1 }}
                    />
                </Box>
            </Paper>
            {/* <Link to="/article"> */}
                <Button onClick={handleSubmit} className="gradientButton" style={{ borderRadius: '20px', color: 'white' }} sx={{ mt: 2, ml: 'auto', mr: 'auto' }}>Сгенерировать</Button>
            {/* </Link> */}
        </Box>
    )
}

export default VideoForm
