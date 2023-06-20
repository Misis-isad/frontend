import { Grid } from "@mui/material";
import { useEffect } from "react";

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
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{ minHeight: "100vh" }}
            >
                <Grid item xs={3}>
                    <VideoForm></VideoForm>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;
