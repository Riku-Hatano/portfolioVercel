import React from "react";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";

const Home = () => {
    return (
        <>
            <section className="home">
                <About />
                <Works />
                <Contact />
            </section>
        </>
    )
}

export default Home;