import { useState } from "react";
import ApiService from "../services/api";
import { Paper, TextField, Typography, Box, Button } from "@mui/material";

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [fio, setFio] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPasswod, setConfirmPassword] = useState("");

    // handle fio field changes
    const handleFioChange = (event: any) => {
        // check if fio contains three words (name, surname, patronymic)
        if (event.target.value.split(" ").length !== 3) {
            //handle error
        }
        setFio(event.target.value);
    };

    //handle email field changes
    const handleEmailChange = (event: any) => {
        // check if email is valid
        if (!event.target.value.includes("@")) {
            //handle error
        }
        setEmail(event.target.value);
    };

    // handle password field changes
    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event: any) => {
        setConfirmPassword(event.target.value);
    };

    // handle submit
    const handleSubmit = (event: any) => {
        event.preventDefault();
        // check if passwords match
        if (password !== confirmPasswod) {
            // handle error
        }
        // check if email is valid and not empty string
        if (!email || (email === "" && !email.includes("@"))) {
            //handle error
        }

        // check if fio contains three words (name, surname, patronymic) and fio != undefined
        if (fio.split(" ").length !== 3 || !fio) {
            //handle error
        }

        // send data to server
        let result = ApiService.createUser({
            email: email,
            password: password,
            fio: fio,
        });
        console.log(result);
    };

    return (
        <Paper
            onClick={(e) => e.stopPropagation()}
            elevation={6}
            style={{
                width: "500px",
                height: "560px",
                borderRadius: "30px",
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    textAlign: "center",
                    mr: 2,
                    mt: 4,
                    flexGrow: 1,
                    fontFamily: "PT Sans Caption",
                    fontWeight: 700,
                    fontSize: "24px",
                    color: "#550C64",
                    textDecoration: "none",
                }}
            >
                Зарегистрироваться
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    textAlign: "center",
                    mr: 2,
                    mt: 2,
                    flexGrow: 1,
                    fontFamily: "PT Sans Caption",
                    fontWeight: 400,
                    fontSize: "16px",
                    textDecoration: "none",
                }}
            >
                Введите свои данные для регистрации на сайте
            </Typography>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection={"column"}
                sx={{ mt: 4 }}
            >
                <TextField
                    id="outlined-basic"
                    label="Фамилия Имя"
                    variant="outlined"
                    color="secondary"
                    sx={{ width: "300px" }}
                    value={fio}
                    onChange={handleFioChange}
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    color="secondary"
                    sx={{ mt: 3, width: "300px" }}
                    value={email}
                    onChange={handleEmailChange}
                />
                <TextField
                    id="outlined-basic"
                    label="Пароль"
                    variant="outlined"
                    sx={{ mt: 3, width: "300px" }}
                    color="secondary"
                    value={password}
                    onChange={handlePasswordChange}
                />
                <TextField
                    id="outlined-basic"
                    label="Подтверждение Пароля"
                    variant="outlined"
                    sx={{ mt: 3, width: "300px" }}
                    color="secondary"
                    value={confirmPasswod}
                    onChange={handleConfirmPasswordChange}
                />
                <Button
                    className="gradientButton"
                    style={{ borderRadius: "20px", color: "white" }}
                    sx={{ mt: 6, mb: "auto", ml: 1, mr: 1 }}
                    onClick={handleSubmit}
                >
                    Регистрация
                </Button>
            </Box>
        </Paper>
    );
};

export default SignUpForm;
