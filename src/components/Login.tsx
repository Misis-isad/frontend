import { useState } from "react";
import { Paper, TextField, Typography, Box, Button, InputAdornment } from "@mui/material";
import ApiService from "../services/api";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error1, setError1] = useState(false);
    const [helperText1, setHelperText1] = useState('');
    const [error2, setError2] = useState(false);
    const [helperText2, setHelperText2] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    // function getAuthorization() {
    //     return localStorage.getItem("isAuthorized");
    // }

    //handle email field changes
    const handleEmailChange = (event: any) => {
        // check if email is valid
        if (
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                event.target.value
            )
        ) {
            setError1(false);
            setHelperText1('');
        } else {
            setError1(true);
            setHelperText1('Неверный формат ввода email');
        }
        setEmail(event.target.value);
    };

    // handle password field changes
    const handlePasswordChange = (event: any) => {
        if (event.target.value.length < 8) {
            setError2(true);
            setHelperText2('Пароль содержит минимум 8 символов');
        }
        else {
            setError2(false);
            setHelperText2('');
        }
        setPassword(event.target.value);
    };

        // handle submit
        const handleSubmit = (event: any) => {
            let errorEmpty = false;
            event.preventDefault();
    
            //check if password valid
            if (!password) {
                setError2(true);
                errorEmpty = true;
                setHelperText2('Введите пароль');
            }
            else {
                setError2(false);
                errorEmpty = false;
                setHelperText2('');
            }
    
            // check if email is valid and not empty string
            if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
                setError1(false);
                errorEmpty = false;
                setHelperText1('');
            } else {
                setError1(true);
                errorEmpty = true;
                setHelperText1('Введите email');
            }
    
            if(!error1 && !error2 && !errorEmpty){
                //send data to server
                let result = ApiService.loginUser({
                    email: email,
                    password: password,
                });
                console.log(result);
                
                console.log('hereeeeeeeeeeeLogin');
            }
        };

    return (
        <Paper onClick={(e) => e.stopPropagation()} elevation={6}
            style={{
                width: '500px', minHeight: '400px', borderRadius: '30px'
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
                    color: '#1F1B4C',
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
                    color: '#1F1B4C'
                }}
            >
                Введите логин и пароль для авторизации на сайте
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center" flexDirection={'column'} sx={{ mt: 4 }}>
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    error={error1}
                    helperText={helperText1}
                    value={email}
                    onChange={handleEmailChange}
                    sx={{ width: '300px' }}
                />
                <TextField type={showPassword ? 'text' : 'password'}
                    id="outlined-basic" 
                    label="Пароль"
                    variant="outlined"
                    sx={{ mt: 3, width: '300px' }}
                    error={error2}
                    helperText={helperText2}
                    value={password}
                    onChange={handlePasswordChange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {!showPassword ? <VisibilityOffIcon onClick={handleTogglePasswordVisibility} sx={{ color: '#1F1B4C' }} /> : <VisibilityIcon onClick={handleTogglePasswordVisibility} sx={{ color: '#1F1B4C' }} />}
                            </InputAdornment>
                        ),
                    }}
                />
                <Button  className="gradientButton" onClick={handleSubmit} style={{ borderRadius: '20px', color: 'white' }} sx={{ mt: 6, mb: 2, ml: 1, mr: 1 }}>Вход</Button>
            </Box>
        </Paper>
    )
}

export default LoginForm
