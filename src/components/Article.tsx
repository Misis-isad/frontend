import { Box, Button, InputAdornment, IconButton } from "@mui/material";
import { useEffect, useState, useRef, createElement } from "react";
import ApiService from "../services/api";
import { useParams } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import React from 'react'
import EditableElement from './EditableElement';
// import parse, { ReplaceChildNodeFunction } from 'html-react-parser';

type EditableParagraphProps = {
    text: string;
};

const EditableParagraph = ({ text }: EditableParagraphProps) => {
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const [content, setContent] = useState(text);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLParagraphElement>) => {
        // Prevent line breaks when pressing Enter
        if (event.key === 'Enter') {
            event.preventDefault();
        }
    };

    const handleInput = () => {
        const newContent = paragraphRef.current?.textContent ?? '';
        setContent(newContent);
        console.log(content);
    };

    return (
        <p ref={paragraphRef} contentEditable onKeyDown={handleKeyDown} onInput={handleInput}>
            {content}
        </p>
    );
};


function Article() {
    const paragraphRef = useRef<HTMLParagraphElement>(null);


    const handleInput = () => {
        const newContent = paragraphRef.current?.textContent ?? '';
        setContent(newContent);
        console.log(content);
    };


    //get data article from server
    const [dataArticle, setDataArticle] = useState('<div><p>Paragraph</p><img src="image.png" alt="Image" /><h1>Heading</h1></div>')
    let { id } = useParams();

    useEffect(() => {
        if (id) {
            let responseArticle = ApiService.getArticle(parseInt(id))
            responseArticle.then((data) => { setDataArticle(data.data.body) })

            console.log('article', dataArticle);
        }
    }, []);

    const [isEditable, setIsEditable] = useState(false);

    const handleClick = () => {
        setIsEditable(!isEditable);
    };

    const HtmlComponent = ({ htmlString }: { htmlString: string }) => (
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
    );

    // const HtmlComponent = ({ htmlString }: { htmlString: string }) => (
    //     <div dangerouslySetInnerHTML={{ __html: htmlString.replace(/<p>/g, '<p ref={paragraphRef} contentEditable onKeyDown={handleKeyDown} onInput={handleInput}>') }} />
    // );


    //publish article
    async function handleSubmit() {
        //send data to server
        let response = ApiService.setPublishedStatus(
            {
                record_id: parseInt(id || ''),
                published: true
            }
        );
        let result = await response;
        console.log('published in article', result);

        console.log('hereeeee')
    }


    const articleContainer = document.querySelector('.ArticleContainer');
    let paragraphs: any
    if (articleContainer) paragraphs = Array.from(articleContainer.querySelectorAll('p'));

    let res = <div dangerouslySetInnerHTML={{ __html: dataArticle }} />

    const parser = new DOMParser();
    const parsedHtml = parser.parseFromString(dataArticle, 'text/html');
    const paragraphsNew = Array.from(parsedHtml.querySelectorAll('p'));


    const [content, setContent] = useState('');

    const handleChange = (value: string) => {
        setContent(value);
    };

    return (
        <>
            <Box className="ArticleContainer" mt={10} ml={20} mr={20}>
                <EditableElement onChange={handleChange}>
                    <p>Paraarara</p>
                </EditableElement>
                <EditableElement onChange={handleChange}>
                    <h1>Paraarara</h1>
                </EditableElement>

                {/* <HtmlComponent htmlString={dataArticle} /> */}
                {/* {paragraphs.map((paragraph: any) =>
                    isEditable ? <EditableParagraph text={paragraph.textContent} /> : <p>{paragraph.textContent}</p>
                )} */}
                
                <button onClick={handleClick}>{isEditable ? 'Save' : 'Edit'}</button>

                <Button className="gradientButton" sx={{
                    backgroundColor: 'white',
                    display: "flex", justifyContent: "spaceBetween", alignItems: "center", marginBottom: '40px',
                    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.25)', color: "white"
                }}
                    style={{
                        width: '380px', height: '54px', borderRadius: '15px'
                    }}><IconButton><EditIcon sx={{ color: '#ffffff' }} /></IconButton>
                    Редактировать</Button>
                <Button href="https://www.youtube.com/watch?v=f6rAjdMY8lg" target="_blanc" sx={{
                    backgroundColor: 'white',
                    display: "flex", justifyContent: "spaceBetween", alignItems: "center", marginBottom: '40px',
                    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.25)', color: "#1F1B4C"
                }}
                    style={{
                        width: '380px', height: '54px', borderRadius: '15px'
                    }}>Перейти на видео</Button>
                <Button onClick={handleSubmit} sx={{
                    backgroundColor: 'white',
                    display: "flex", justifyContent: "spaceBetween", alignItems: "center", marginBottom: '40px',
                    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.25)', color: "#1F1B4C"
                }}
                    style={{
                        width: '380px', height: '54px', borderRadius: '15px'
                    }}>Опубликовать</Button>
                <Button sx={{
                    backgroundColor: 'white',
                    display: "flex", justifyContent: "spaceBetween", alignItems: "center", marginBottom: '40px',
                    boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.25)', color: "#1F1B4C"
                }}
                    style={{
                        width: '380px', height: '54px', borderRadius: '15px'
                    }}>Сохранить Статью</Button>
            </Box>

        </>
    );
}

export default Article;

