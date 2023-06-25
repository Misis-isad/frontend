import { useParams } from "react-router-dom";
import ApiService from "../services/api";
import { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube';

const article = {
    title: 'Сгенерированная Статья',
    video_link: 'https://www.youtube.com/watch?v=Ta6pNPK3wig&t=2s',
    date: '24.06.2023',
    html_data: ''
}

function ArticleHeader() {
    // let imgLink = 'url(/src/assets/articleBg1.png)';
    const [videoLink, setVideoLink] = useState('');
    const [videoTitle, setVideoTitle] = useState('');
    let { id } = useParams();
    
    useEffect(() => {
        if (id) {
            let responseArticle = ApiService.getRecordByRecordId(parseInt(id))
            responseArticle.then((data) => {
                setVideoLink(data.data.video_link);
                setVideoTitle(data.data.title);
            })
        }
    }, []);

    return (
        <>
            <div className="articleTitleWrapper" style={{ marginTop: '165px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1 className="articleTitle">{videoTitle && videoTitle!='title' ? videoTitle : article.title}</h1>
                <hr style={{
                    color: 'white',
                    backgroundColor: 'white',
                    height: 1,
                    width: '50%'
                }} />
                <Button href={videoLink ? videoLink : article.video_link} target="_blank" sx={{
                    backgroundColor: 'white', mt: 3,
                    display: "flex", justifyContent: "spaceBetween", alignItems: "center", marginBottom: '40px',
                    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.25)', color: "#1F1B4C"
                }}
                    style={{
                        width: '250px', height: '54px', borderRadius: '15px'
                    }}>
                    <IconButton sx={{mr: 3}}>
                        <YouTubeIcon sx={{ color: '#1F1B4C' }} />
                    </IconButton>
                    Перейти на видео
                </Button>
            </div>
        </>
    );
}

export default ArticleHeader;