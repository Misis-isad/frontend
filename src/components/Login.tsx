import { Paper, TextField, Typography, Box , Button} from "@mui/material";

const LoginForm = () => {
    return (
        <Paper onClick={(e) => e.stopPropagation()} elevation={6}
            style={{
                width: '500px', height: '400px', borderRadius: '30px'
            }}>
            <Typography variant="h2"
                sx={{
                    textAlign: 'center',
                    mr: 2,
                    mt: 4,
                    flexGrow: 1,
                    fontFamily: 'PT Sans Caption',
                    fontWeight: 700,
                    fontSize: '24px',
                    color: '#550C64',
                    textDecoration: 'none',
                }}
            >
                Добро Пожаловать!
            </Typography>
            <Typography variant="body1"
                sx={{
                    textAlign: 'center',
                    mr: 2,
                    mt: 2,
                    flexGrow: 1,
                    fontFamily: 'PT Sans Caption',
                    fontWeight: 400,
                    fontSize: '16px',
                    textDecoration: 'none',
                }}
            >
                Введите логин и пароль для авторизации на сайте
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection={'column'} sx={{mt:4}}>
            <TextField id="outlined-basic" label="Email" variant="outlined" color="secondary" sx={{width: '300px'}}/>
            <TextField id="outlined-basic" label="Пароль" variant="outlined" sx={{mt:3, width: '300px'}} color="secondary"/>
            <Button className="gradientButton" style={{ borderRadius: '20px', color: 'white' }} sx={{ mt: 6, mb: 'auto', ml: 1, mr: 1 }}>Вход</Button>
            </Box>
        </Paper>
    )
}

export default LoginForm
