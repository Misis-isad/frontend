import { AppBar, Box, IconButton, Toolbar, Typography, Backdrop } from "@mui/material";
import SignUpForm from "./SignUp";
import LoginForm from "./Login";
// import '@fontsource/poppins/700.css';
// import '@fontsource/poppins/400.css';

import logo from "../assets/logo_owl.svg";




import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Главная', 'Статьи'];
const pages_auth = ['Главная', 'Статьи', 'Мои Видео'];


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [buttonType, setButtonType] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = (type: string) => {
        setButtonType(type);
        setOpen(true);
    };

    return (
        <div className="appBarDiv">
            <AppBar position="relative" style={{
                background: 'transparent',
                boxShadow: 'none',

            }} >
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            href="/"
                            sx={{ mr: 2 }}
                        >
                            {/* insert logo.jpeg from assets folder as img */}
                            <img width="40px" height="40px" src={logo} alt="logo" style={{ width: '120px', height: '77px' }} />
                        </IconButton>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'PT Sans Caption',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2, color: 'white', display: 'block', fontFamily: 'PT Sans Caption',
                                        fontWeight: 700,
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                            <Backdrop
                                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={open}
                                onClick={handleClose}
                            >
                                {buttonType === 'Login' && <LoginForm />}
                                {buttonType === 'Signup' && <SignUpForm />}
                            </Backdrop>
                            <Button className="gradientButton" onClick={() => handleOpen('Signup')} style={{ borderRadius: '20px', color: 'white' }} sx={{ mt: 'auto', mb: 'auto', ml: 1, mr: 1 }}>Регистрация</Button>
                            <Button className="gradientButton" onClick={() => handleOpen('Login')} style={{ borderRadius: '20px', color: 'white' }} sx={{ mt: 'auto', mb: 'auto', ml: 1, mr: 1 }}>Вход</Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
export default ResponsiveAppBar;