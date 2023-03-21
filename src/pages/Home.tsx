import React from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = () => {
    // useEffect(() => {
    //     console.log("mounted")
    // }, [])
    
    return (
        <>
            <Header />
            <main>
                <p>home</p>
            </main>
            <Footer />
        </>
    )
}

export default Home;