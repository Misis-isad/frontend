import { Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import VideoCard from "../components/VideoCard";
import { Pagination } from "@mui/material";
import ApiService from "../services/api";


let obj = {
    link: 'https://www.youtube.com/watch?v=Ta6pNPK3wig&t=2s',
    title: "Бухгалтерия",
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



const videosPerPage = 3;

function AllArticlesContent() {
    const [page, setPage] = useState(1);
    const [dataRecords, setDataRecords] = useState([])

    const handlePageChange = (
        event: React.ChangeEvent<unknown>,
        value: number
    ) => {
        setPage(value);
        console.log(event)
    };

    useEffect(() => {
        const fetchData = async () => {
            const data: any = await ApiService.getPublishedRecords({ limit: 10, offset: 0 });
            setDataRecords(data);
            //986

            // All you have to do is define your result as a string array, like the following:

            // const result : string[] = [];
            // Without defining the array type, it by default will be never. So when you tried to add a string to it, it was a type mismatch, and so it threw the error you saw.
        };
        fetchData();
        console.log('all records!!!', dataRecords);
    }, []);

    const startIndex = (page - 1) * videosPerPage;
    const endIndex = startIndex + videosPerPage;
    const currentVideos = allVideos.slice(startIndex, endIndex);

    return (
        <>
            <Container>
                {dataRecords.length > 0 ? (
                    dataRecords.map((video: any) => (
                        <VideoCard link={video.video_link} title={video.title} status={"Готово"} id={video.id} />
                    ))
                ) : (
                    <Typography variant="h2"
                        sx={{
                            textAlign: 'center',
                            mr: 2,
                            mt: 1,
                            pt: 4,
                            mb: 5,
                            flexGrow: 1,
                            fontFamily: 'PT Sans Caption',
                            fontWeight: 700,
                            fontSize: '28px',
                            color: '#1F1B4C',
                            textDecoration: 'none',
                        }}
                    >
                        Пока публикаций нет
                    </Typography>
                )}
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

export default AllArticlesContent;