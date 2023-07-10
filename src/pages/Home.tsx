import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";

const Home = () => {
    const scroll = (): void => {
        console.log(window.scrollY);
        console.log(window.scrollX);
    }
    useEffect(() => {
        ScrollReveal().reveal(".box", {
            duration: 800,
            viewFactor: 0.05,
            reset: true
        });
        document.addEventListener("scroll", scroll);
    }, [])
    return (
        <>
            <section className="home">
                <div className="box">
                    <About />
                </div>
                <div className="box">
                    <Works />
                </div>
                <div className="box">
                    <Contact />
                </div>
            </section>
        </>
    )
}

export default Home;