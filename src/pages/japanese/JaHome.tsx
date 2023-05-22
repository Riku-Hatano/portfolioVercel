import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import JaAbout from "./JaAbout";
import JaContact from "./JaContact";
import JaWorks from "./JaWorks";
import JaWelcome from "./jaComponents/JaWelcome";

const JaHome = () => {
    useEffect(() => {
        ScrollReveal().reveal(".box", {
            duration: 800,
            viewFactor: 0.05,
            reset: true
        });
    }, [])
    return (
        <>
            <JaWelcome />
            <section className="home">
                <div className="box">
                    <JaAbout />
                </div>
                <div className="box">
                    <JaWorks />
                </div>
                <div className="box">
                    <JaContact />
                </div>
            </section>
        </>
    )
}

export default JaHome;