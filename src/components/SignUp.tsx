import * as React from 'react';
import { Paper, TextField, Typography, Box , Button} from "@mui/material";

const SignUpForm = () => {
    return (
        <Paper onClick={(e) => e.stopPropagation()} elevation={6}
            style={{
                width: '500px', height: '560px', borderRadius: '30px'
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
                Зарегистрироваться
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
                Введите свои данные для регистрации на сайте
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection={'column'} sx={{mt:4}}>
            <TextField id="outlined-basic" label="Фамилия Имя" variant="outlined" color="secondary" sx={{width: '300px'}}/>
            <TextField id="outlined-basic" label="Email" variant="outlined" color="secondary" sx={{mt: 3, width: '300px'}}/>
            <TextField id="outlined-basic" label="Пароль" variant="outlined" sx={{mt:3, width: '300px'}} color="secondary"/>
            <TextField id="outlined-basic" label="Подтверждение Пароля" variant="outlined" sx={{mt:3, width: '300px'}} color="secondary"/>
            <Button className="gradientButton" style={{ borderRadius: '20px', color: 'white' }} sx={{ mt: 6, mb: 'auto', ml: 1, mr: 1 }}>Регистрация</Button>
            </Box>
        </Paper>
    )
}

export default SignUpForm
