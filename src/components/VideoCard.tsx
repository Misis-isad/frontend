import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// const imgLink = "/src/assets/logo.jpeg";

interface Props {
    imgLink: string;
    title: string;
    description: string;
}

export default function VideoCard(props: Props) {

    const { imgLink, title, description } = props;
    return (
        <Card sx={{ maxWidth: 700, boxShadow: '0px 0px 10px 5px rgba(0,0,0,0.3)', borderRadius: '15px', mt: 2, mb: 10, ml: 'auto', mr: 'auto' }} >
            <CardMedia
                sx={{ height: 400 }}
                image={imgLink}
                title="green iguana"
            />
            <CardContent style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Typography
                    variant="h1"
                    component="a"
                    sx={{
                        flexGrow: 1,
                        fontFamily: 'PT Sans Caption',
                        fontWeight: 700,
                        fontSize: 32,
                        letterSpacing: '.3rem',
                        color: '#550C64',
                        textDecoration: 'none',
                    }}
                >
                    {title}
                </Typography>
                <Typography variant="body1"
                    sx={{
                        flexGrow: 1,
                        fontFamily: 'Noto Sans',
                        fontWeight: 300,
                        fontSize: 16,
                        color: '#333',
                        textDecoration: 'none',
                        mt: 2,
                        ml: 2
                    }}
                >
                    {description}
                </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Button className="gradientButton" style={{ borderRadius: '20px', color: 'white' }} sx={{ mt: 'auto', mb: 2, ml: 1, mr: 1 }}>Подробнее</Button>
            </CardActions>
        </Card>
    );
}
