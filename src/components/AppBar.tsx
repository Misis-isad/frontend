import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";

import logo from "../assets/logo.jpeg";

export default function CustomAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* insert logo.jpeg from assets folder as img */}
                        <img width="40px" height="40px" src={logo} alt="logo" />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Ласурики
                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
