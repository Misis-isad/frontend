import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";
import { Pagination, Box } from "@mui/material";
import ApiService from "../services/api";


let obj = {
    link: 'https://www.youtube.com/watch?v=Ta6pNPK3wig&t=2s',
    title: "Бухгалтерия за 5 минут",
    status: "в обработке",
    id: 5
}
let allVideos = Array(10).fill(obj);
allVideos[7] = {
    link: "/src/assets/logo.jpeg",
    title: "РАБОТАЕТ!!!",
    status: "Супер интересная статья",
    id: 7
}
let videos = [
    {
        imgLink: "/src/assets/logo.jpeg",
        title: "Бухгалтерия за 5 минут",
        description: "Супер интересная статья"
    },
    {
        imgLink: "/src/assets/logo.jpeg",
        title: "Бухгалтерия за 5 минут",
        description: "Супер интересная статья"
    },
    {
        imgLink: "/src/assets/logo.jpeg",
        title: "Бухгалтерия за 5 минут",
        description: "Супер интересная статья"
    }
]


const videosPerPage = 3;

function VideoContent() {
    const [page, setPage] = useState(1);
    const [dataRecords, setDataRecords] = useState([])

    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value);
    };

    useEffect(() => {
        let responseArticle = ApiService.getAllRecords({limit: 10, offset: 0})
        responseArticle.then((data) => { setDataRecords(data.data) })

        console.log('all records!!!', dataRecords);
    }, []);

    const startIndex = (page - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;
    const currentVideos = allVideos.slice(startIndex, endIndex);

    return (
        <>
            <Container>
                {currentVideos.map((video) => (
                    <VideoCard link={video.link} title={video.title} status={video.status} id={video.id} />
                ))}
                <Pagination
                    count={Math.ceil(allVideos.length / videosPerPage)}
                    page={page}
                    onChange={handlePageChange}
                    sx={{ pl: 'auto', pb: 'auto' }}
                />
            </Container>
        </>
    );
}

export default VideoContent;