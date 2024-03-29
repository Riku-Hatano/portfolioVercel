import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Nopage from "./pages/Nopage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import { faBackspace } from "@fortawesome/free-solid-svg-icons";
import JaMain from "./pages/japanese/JaMain";
import JaAbout from "./pages/japanese/JaAbout";
import JaContact from "./pages/japanese/JaContact";
import JaWorks from "./pages/japanese/JaWorks";
import JaHome from "./pages/japanese/JaHome";

const Main = () => {
    const width = "100vw";
    const height = "100vh";
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Header />
                            <Welcome />
                            <main>
                                <Home /> 
                            </main>
                            <Footer />
                        </>
                    } />
                    <Route path="/about" element={
                        <>
                            <Header />
                            <main>
                                <About />
                            </main>
                            <Footer />
                        
                        </>
                    } />
                    <Route path="/contact" element={
                        <>
                            <Header />
                            <main>
                                <Contact />
                            </main>
                            <Footer />
                        </>
                    } />
                    <Route path="/works" element={
                        <>
                            <Header />
                            <main>
                                <Works />
                            </main>
                            <Footer />
                        </>
                    } />
                    <Route path="/ja" element={<JaMain />}>
                        <Route path="/ja" element={<JaHome />} />
                        <Route path="/ja/about" element={<JaAbout />} />
                        <Route path="/ja/contact" element={<JaContact />} />
                        <Route path="/ja/works" element={<JaWorks />} />
                    </Route>
                    <Route path="*" element={<Nopage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Main;