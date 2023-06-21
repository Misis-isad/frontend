import { Button, Typography, Box } from "@mui/material";
import { useEffect } from "react";
import main from "../assets/main-img.svg";

import VideoForm from "../components/VideoForm";

function Home() {
    useEffect(() => {
        // const fetchData = async () => {
        //     const result = await ApiService.getAllItems();
        //     setItems(result);
        //     console.log(result);
        // };
        // fetchData();
    }, []);

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'space-evenly' }} mt={10} ml={5}>
                <Box sx={{ width: '760px' }} mt={5}>
                    <Typography
                        variant="h1"
                        component="a"
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'PT Sans Caption',
                            fontWeight: 700,
                            fontSize: 50,
                            letterSpacing: '.3rem',
                            color: 'white',
                            textDecoration: 'none',
                        }}
                    >
                        Создай статью <br></br>по видео в один клик
                    </Typography>
                    <Box>
                        <Typography variant="body1"
                            sx={{
                                flexGrow: 1,
                                fontFamily: 'Noto Sans',
                                fontWeight: 300,
                                fontSize: 16,
                                color: 'white',
                                textDecoration: 'none',
                                mt: 2
                            }}
                        >
                            Платформа позволяет по ссылке с YouTube преобразовывать
                            видео в уникальную статью c кратким содержанием и ключевыми моментами
                        </Typography>
                    </Box>

                    <Button className="gradientButton gradientYellow" style={{ borderRadius: '20px', color: 'white' }} sx={{ mt: 5 }}>Начать</Button>
                </Box>
                <Box>
                    <img src={main} alt="AI generating summary from video" width="500px" height="400px"></img>
                </Box>
            </Box>
        </>
    );
}

export default Home;
