import { useState } from "react";
import { TextField, Button, Typography, Paper, Grid } from "@mui/material";
import ApiService from "../services/api";

export default function VideoForm() {
    // create input form for video url and add function to submit
    // the form to the api
    // form must include one text field and one submit button
    // form must be wrapped in a Card component
    // form must be build from MUI components
    const [url, seturl] = useState<string>("");

    const onTextChange = (e: any) => seturl(e.target.value);
    const handleSubmit = async () => {
        const result = await ApiService.sendVideoData({ url });
        alert(result);
    };
    const handleReset = () => seturl("");

    return (
        <Paper sx={{ maxHeight: "600", maxWidth: "1200" }}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="left"
                justifyContent="left"
                sx={{ minWidth: 400, padding: "20px" }}
            >
                <Typography variant="h6" component="div">
                    Обработка видео
                </Typography>

                <TextField
                    onChange={onTextChange}
                    value={url}
                    label={"Сылка на видео в youtube "} //optional
                />
                <Grid container spacing={2} alignContent={"center"}>
                    <Grid item>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </Grid>
                    <Grid item>
                        <Button onClick={handleReset}>Reset</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
}
