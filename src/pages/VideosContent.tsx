import { Container } from "@mui/material";
import { useState } from "react";
import VideoCard from "../components/VideoCard";
import { Pagination, Box } from "@mui/material";


let obj = {
    link: 'https://www.youtube.com/watch?v=Ta6pNPK3wig&t=2s',
    title: "Бухгалтерия за 5 минут",
    status: "в обработке"
}
let allVideos = Array(10).fill(obj);
allVideos[7] = {
    imgLink: "/src/assets/logo.jpeg",
    title: "РАБОТАЕТ!!!",
    description: "Супер интересная статья"
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

    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value);
    };

    const startIndex = (page - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;
    const currentVideos = allVideos.slice(startIndex, endIndex);

    return (
        <>
            <Container>
                {currentVideos.map((video) => (
                    <VideoCard link={video.link} title={video.title} status={video.status} />
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