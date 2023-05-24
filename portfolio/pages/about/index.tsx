import React, { useEffect } from "react";
import SR from "../../utils/ScrollReveal";
import Born from "../../imgs/Born.png";

const About = () => {
    // const born = "../../imgs/Born.png";
    // const es = "../../imgs/Es.png";
    // const hs = "../../imgs/Hs.png";
    // const us = "../../imgs/Us.png";
    // const sa = "../../imgs/Sa.png";
    useEffect(() => {
        if (typeof document !== 'undefined') {
            import("../../utils/ScrollReveal").then(
                (module) => {
                    module.default();
                },
                (err) => {
                    console.log(err);
                }
            )
            SR();
          }
    }, [])
    return (
        <>
            <section className="about">
                <section className="aboutSectionFirst box">
                    <article>
                        <h1>skills</h1>
                        <aside>
                            <h3>front end</h3>
                            <ul>
                                <li>JavaScript / TypeScript</li>
                                <li>React.js / React.ts</li>
                                <li>Vue.js</li>
                                <li>jQuery</li>
                                <li>UX/UI design</li>
                            </ul>
                        </aside>
                    </article>
                    <article>
                        <aside>
                            <h3>back end</h3>
                            <ul>
                                <li>Node.js</li>
                                <li>PHP</li>
                                <li>MySQL</li>
                            </ul>
                        </aside>
                    </article>
                    <article>
                        <aside>
                            <h3>dev ops</h3>
                            <ul>
                                <li>Git / GitHub</li>
                                <li>Figma</li>
                            </ul>
                        </aside>
                    </article>
                </section>
                <section className="aboutSectionSecond box">
                    <article>
                        <h1>about me</h1>
                        <h3>self introduction</h3>
                        <p>
                            Hi! I'm Riku Hatano, from Japan! I have learned web development in Tamwood Careers for six months and before joinning Tamwood, I have studied this field for five months.
                        </p>
                    </article>
                    <section>
                        <h3>short history</h3>
                        <p>Let's look back on my life a little bit!</p>
                        <section className="eventContainer">
                            <article className="eventCell">
                                <p>
                                    <span>1999.08</span>
                                </p>
                                <div><span></span></div>
                                <aside>
                                    <img src={born} alt="born" />
                                    <figcaption>
                                        <p>
                                            Born in Niigata prefecture, located on north of Tokyo. I was too mischievous and oftern do stupid things to stranger though, I don't remember anything.
                                        </p>
                                    </figcaption>
                                </aside>
                            </article>
                            <article className="eventCell">
                                <p>
                                    <span>2003~'15</span>
                                </p>
                                <div><span></span></div>
                                <aside>
                                    <img src={es} alt="elementalyjuniorhigh" />
                                    <figcaption>
                                        <p>
                                            Moved to Chiba prefecture close to Tokyo. And I have played soccer for full of 13 years.
                                        </p>
                                    </figcaption>
                                </aside>
                            </article>
                            <article className="eventCell">
                                <p>
                                    <span>2015~'18</span>
                                </p>
                                <div><span></span></div>
                                <aside>
                                    <img src={hs} alt="highschool" />
                                    <figcaption>
                                        <p>
                                            Instead of soccer, I started to play badminton as club activity. But one year later, because of asthma, I quit to play.
                                        </p>
                                    </figcaption>
                                </aside>
                            </article>
                            <article className="eventCell">
                                <p>
                                    <span>2018~'21</span>
                                </p>
                                <div><span></span></div>
                                <aside>
                                    <img src={us} alt="university" />
                                    <figcaption>
                                        <p>
                                            In university, I have learned Economics. Actually I enjoyed leaning though, I was interested in programming.
                                        </p>
                                        <p>
                                            When COVID happened and forced to be inside of house, I touched JavaScript for the first time. 
                                        </p>
                                    </figcaption>
                                </aside>
                            </article>
                            <article className="eventCell">
                                <p>
                                    <span>2022~now</span>
                                </p>
                                <div><span></span></div>
                                <aside>
                                    <img src={sa} alt="studyabroad" />
                                    <figcaption>
                                        <p>
                                            I have been to Dubai to study English and Vancouver to learn WebDevelopment. 
                                        </p>
                                    </figcaption>
                                </aside>
                            </article>
                        </section>
                    </section>
                </section>
            </section>
        </>
    )
}

export default About;