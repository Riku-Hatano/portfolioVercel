import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Works from "./pages/Works";
import Nopage from "./pages/Nopage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Main = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Header />
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
                    <Route path="*" element={<Nopage />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Main;