import HomeHeader from "./pages/HomeHeader";
import HomeContent from "./pages/HomeContent";
import Article from "./components/Article";
import ArticleHeader from "./components/ArticleHeader";
import VideosHeader from "./pages/VideosHeader";
import AllArticlesHeader from "./pages/AllArticlesHeader";
import VideosContent from "./pages/VideosContent";
import Wave from 'react-wavify'
import { useState }from 'react'
import "./App.css";
import CustomAppBar from "./components/AppBar";
import { Container } from "@mui/material";
import { Routes, Route } from 'react-router-dom'

function App() {
    const [childParameter, setChildParameter] = useState('linear-gradient(184deg, #1F1B4C 9.74%, #0785CE 50.52%, #2091D3 77.08%, #2091D3 96.34%);');
    //'url(/src/assets/articleBg1.png)'
    function handleChildParameterChange(childParameter: string) {
      setChildParameter(childParameter);
    }

    return (
        <>
            <Container className="gradientSection" fixed={true} style={{ maxWidth: "100%", height: "735px", padding: 0, position: 'relative' }}
                sx={{
                    backgroundImage: childParameter
                }}>
                <CustomAppBar />
                <Routes>
                    <Route path="/" element={<HomeHeader/>}/>
                    <Route path="/article/:id" element={<ArticleHeader onChildParameterChange={handleChildParameterChange}/>}/>
                    <Route path="/myVideos" element={<VideosHeader/>}/>
                    <Route path="/allArticles" element={<AllArticlesHeader/>}/>
                </Routes>
                <div style={{ margin: 0, padding: 0, position: 'absolute', bottom: 0, width: '100%', borderBottom: 'none', marginBottom: '-5px' }}>
                    <Wave
                        fill="#ffffff"
                        paused={false}
                        style={{ borderBottom: 'none' }}
                        options={{
                            height: 70,
                            amplitude: 50,
                            speed: 0.15,
                            points: 2,
                        }}
                    />
                </div>
            </Container>
            <Container className="whiteSection" style={{ maxWidth: "100%", backgroundColor: "white"}}>
                <Routes>
                    <Route path="/" element={<HomeContent/>}/>
                    <Route path="/article/:id" element={<Article/>}/>
                    <Route path="/myVideos" element={<VideosContent/>}/>
                </Routes>
            </Container>
            <Container sx={{ backgroundColor: 'black' }} style={{ maxWidth: "100%", height: "251px", padding: 0, margin: 0, position: 'relative' }}>
                <div style={{ margin: 0, padding: 0, position: 'absolute', top: 0, width: '100%', marginTop: '-5px' }}>
                    <Wave
                        style={{ transform: `rotate(180deg)` }}
                        fill="#ffffff"
                        paused={false}
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