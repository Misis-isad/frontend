import * as React from 'react';
import { Button, Typography, Box } from "@mui/material";
import main from "../assets/main-img.svg";

const article = {
    title: 'Статья',
    video_link: 'https://www.youtube.com/watch?v=Ta6pNPK3wig&t=2s',
    date: '22.06.2025',
    html_data: ''
}

interface Props {
    onChildParameterChange: (childParameter: string) => void;
  }

function ArticleHeader(props: Props) {
    let imgLink = 'url(/src/assets/articleBg1.png)';
    props.onChildParameterChange(imgLink);

    return (
        <>
            <div className="articleTitleWrapper" style={{ marginTop: '165px' }}>
                <h1 className="articleTitle">{article.title}</h1>
                <hr style={{
                    color: 'white',
                    backgroundColor: 'white',
                    height: 1,
                    width: '50%'
                }} />
                <h2 className="articleDate">{article.date}</h2>
            </div>
        </>
    );
}

export default ArticleHeader;