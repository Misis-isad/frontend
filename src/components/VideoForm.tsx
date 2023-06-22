import * as React from 'react';
import { Paper, TextField, Typography, Box, Button, InputAdornment, Backdrop } from "@mui/material";
import LoadingScreen from "./Loading";
import DownloadIcon from '@mui/icons-material/Download';
const VideoForm = () => {

    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <Box flexDirection={'column'} alignItems={'center'} style={{ display: 'flex' }}>
            <Paper elevation={6}
                style={{
                    width: '600px', height: '230px', borderRadius: '30px'
                }}>
                <Typography variant="h2"
                    sx={{
                        textAlign: 'center',
                        mr: 2,
                        mt: 2.5,
                        pt: 4,
                        flexGrow: 1,
                        fontFamily: 'PT Sans Caption',
                        fontWeight: 700,
                        fontSize: '24px',
                        color: '#550C64',
                        textDecoration: 'none',
                    }}
                >
                    Сгенерируйте статью по ссылке
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="center" flexDirection={'column'} sx={{ mt: 4 }}>
                    <TextField id="outlined-basic" label="Ссылка на видео с YouTube" variant="outlined" sx={{ mt: 1, width: '400px' }} color="secondary"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <DownloadIcon sx={{ color: '#8932A7' }} />
                                </InputAdornment>
                            ),
                        }}
                    />
                </Box>
            </Paper>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
            >
                <LoadingScreen />
            </Backdrop>
            {/* {open ? (<LoadingScreen/>) : null} */}
            <Button className="gradientButton gradientYellow" onClick={handleOpen}  style={{ borderRadius: '20px', color: 'white' }} sx={{ mt: 5, ml: 'auto', mr: 'auto' }}>Сгенерировать</Button>
        </Box>
    )
}

export default VideoForm
