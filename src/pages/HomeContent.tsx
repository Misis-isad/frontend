import { Button, Typography, Box } from "@mui/material";
import { useEffect } from "react";
import imgLink from "../assets/whitesection-img.svg";


function HomeContent() {

    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'space-evenly' }} mt={30} ml={5}>
                <Box>
                    <img src={imgLink} alt="AI generating summary from video" width="500px" height="400px"></img>
                </Box>
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
                            color: '#550C64',
                            textDecoration: 'none',
                        }}
                    >
                        ПРОФБУХ
                    </Typography>
                    <Box>
                        <Typography variant="body1"
                            sx={{
                                flexGrow: 1,
                                fontFamily: 'Noto Sans',
                                fontWeight: 300,
                                fontSize: 16,
                                color: '#151515',
                                textDecoration: 'none',
                                mt: 2
                            }}
                        >
                            Компания ПРОФБУХ с 2011 года занимается методологической разработкой обучающих и консультирующих онлайн-систем по ведению учёта в программах 1С. За 12 лет работы, обучение по онлайн-курсам прошло 10 000+ бухгалтеров из 6 000+ компаний.
                        </Typography>
                    </Box>
                    <Button className="gradientButton" style={{ borderRadius: '20px', color: 'white', lineHeight: 'inherit', width: '176px' }} sx={{ mt: 5 }} href="https://profbuh8.ru" target="_blank">На Сайт Компании</Button>
                </Box>
            </Box>
        </>
    );
}

export default HomeContent;