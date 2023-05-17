import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";

const Home = () => {
    const scroll = (e: any): void => {
        console.log(window.scrollY);
        console.log(window.scrollX);
    }
    useEffect(() => {
        ScrollReveal().reveal(".box", { 
            duration: 800, // アニメーションの完了にかかる時間
            viewFactor: 0.05, // 0~1,どれくらい見えたら実行するか
            reset: true   // 何回もアニメーション表示するか
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