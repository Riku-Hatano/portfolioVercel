import React from "react";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";

const Home = () => {
    return (
        <>
            <main className="home">
                {/* <section className="testContainer">
                    <article className="circle">
                        <article className="mouse"></article>
                    </article>
                </section> */}
                <About />
                <Works />
                <Contact />
            </main>
        </>
    )
}

export default Home;