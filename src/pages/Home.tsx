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
            <main className="home">
                <section className="testContainer">
                    <article className="circle">
                        <article className="mouse"></article>
                    </article>
                </section>
                <p>hoge</p>
            </main>
            <Footer />
        </>
    )
}

export default Home;