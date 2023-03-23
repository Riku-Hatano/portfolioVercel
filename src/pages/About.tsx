import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <>
            <Header />
            <main className="about">
                <h1>About</h1>
                <section>
                    <h3>about me</h3>
                    <p>
                        Hi! I'm Riku Hatano, from Japan! I have learned web development in Tamwood Careers for six months and before joinning Tamwood, I have studied this field for five months.
                    </p>
                    <p>
                        I also have the background of economics because I am a undergraduated university student now. 
                    </p>
                </section>
                <section>
                    <h3>skills</h3>
                    <h4>front end</h4>
                    <ul>
                        <li>JavaScript/TypeScript</li>
                        <li>jQuery</li>
                        <li>React.js/React.ts</li>
                        <li>Vue.js</li>
                        <li>UX/UI design</li>
                    </ul>
                    <h4>back end</h4>
                    <ul>
                        <li>PHP</li>
                        <li>Node.js</li>
                        <li>MySQL</li>
                    </ul>
                    <h4>language</h4>
                    <ul>
                        <li>Japanese</li>
                        <li>English</li>
                        <li>Chinese</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default About;