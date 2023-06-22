import HomeHeader from "./pages/HomeHeader";
import HomeContent from "./pages/HomeContent";
import Wave from "react-wavify";
import "./App.css";
import CustomAppBar from "./components/AppBarBefore";
import { Container } from "@mui/material";

function App() {
    return (
        <>
            <Container
                className="gradientSection"
                fixed={true}
                style={{
                    maxWidth: "100%",
                    height: "735px",
                    padding: 0,
                    position: "relative",
                }}
                sx={{
                    backgroundImage:
                        "linear-gradient(184deg, #2470B5 2.31%, #3B31AE 33.85%, #550C64 63.54%, #5B0A57 96.35%)",
                }}
            >
                <CustomAppBar />
                <HomeHeader />

                {/* <svg width="1500" height="210" viewBox="0 0 1500 210" xmlns="http://www.w3.org/2000/svg">
                    <Wave fill='#ffffff'
                        paused={false}

                        options={{
                            height: 20,
                            amplitude: 500,
                            speed: 0.15,
                            points: 2
                        }}
                    />            
                </svg> */}
                <div
                    style={{
                        margin: 0,
                        padding: 0,
                        position: "absolute",
                        bottom: 0,
                        width: "100%",
                        borderBottom: "none",
                        marginBottom: "-5px",
                    }}
                >
                    <Wave
                        fill="#ffffff"
                        paused={true}
                        style={{ borderBottom: "none" }}
                        options={{
                            height: 60,
                            amplitude: 100,
                            speed: 0.2,
                            points: 2,
                        }}
                    />
                </div>
            </Container>
            <Container
                className="whiteSection"
                style={{ maxWidth: "100%", backgroundColor: "white" }}
            >
                <HomeContent />
            </Container>
            <Container
                sx={{ backgroundColor: "black" }}
                style={{
                    maxWidth: "100%",
                    height: "251px",
                    padding: 0,
                    margin: 0,
                    position: "relative",
                }}
            >
                <div
                    style={{
                        margin: 0,
                        padding: 0,
                        position: "absolute",
                        top: 0,
                        width: "100%",
                        marginTop: "-5px",
                    }}
                >
                    <Wave
                        style={{ transform: `rotate(180deg)` }}
                        fill="#ffffff"
                        paused={true}
                        options={{
                            height: 60,
                            amplitude: 30,
                            speed: 0.2,
                            points: 2,
                        }}
                    />
                </div>
            </Container>
        </>
    );
}

export default App;
