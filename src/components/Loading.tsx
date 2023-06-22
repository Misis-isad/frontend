import { Container } from '@mui/material'

const LoadingScreen = () => {
    return (
        <Container className="gradientSection" fixed={true} style={{ maxWidth: "100%", height: "100%", padding: 0, position: 'relative' }}
            sx={{
                backgroundImage: 'linear-gradient(184deg, #2470B5 2.31%, #3B31AE 33.85%, #550C64 63.54%, #5B0A57 96.35%)'
            }}>
   HElloooooooooooOOOOoooOOOOoooOOOOOooooooOOOooooooOOooooOOOOo
        </Container>
    )
}

export default LoadingScreen
