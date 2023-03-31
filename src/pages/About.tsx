import React from "react";
import pic1 from "../assets/imgs/pic1.jpeg";

const About = () => {
    return (
        <>
            <section className="about">
                <section className="aboutSectionFirst">
                    <h2>skills</h2>
                    <article>
                        <h3>front end</h3>
                        <ul>
                            <li>JavaScript / TypeScript</li>
                            <li>React.js / React.ts</li>
                            <li>Vue.js</li>
                            <li>jQuery</li>
                            <li>UX/UI design</li>
                        </ul>
                    </article>
                    <article>
                        <h3>back end</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                        </ul>
                    </article>
                    <article>
                        <h3>dev ops</h3>
                        <ul>
                            <li>Git / GitHub</li>
                            <li>Figma</li>
                        </ul>
                    </article>
                </section>
                <section className="aboutSectionSecond">
                    <h2>about me</h2>
                    <article>
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
                                    <img src={pic1} alt="born" />
                                    <figcaption>
                                        <p>
                                            Born in Niigata prefecture, located on north of Tokyo.
                                        </p>
                                    </figcaption>
                                </aside>
                            </article>
                            <article className="eventCell">
                                <p><span>2006.04 ~</span></p>
                                <div><span></span></div>
                                <aside>
                                        <img src={pic1} alt="born" />
                                        <figcaption>
                                            <p>
                                                Without studying, I just played soccer and game a lot especially Pokemon.
                                            </p>
                                        </figcaption>
                                    </aside>
                            </article>
                            <article className="eventCell">
                                <p><span>2012.04 ~</span></p>
                                <div><span></span></div>
                                <aside>
                                        <img src={pic1} alt="born" />
                                        <figcaption>
                                            <p>
                                                Enter the soccer team as a club activity in junior high school.
                                            </p>
                                        </figcaption>
                                    </aside>
                            </article>
                            <article className="eventCell">
                                <p><span>2015.04 ~</span></p>
                                <div><span></span></div>
                                <aside>
                                        <img src={pic1} alt="born" />
                                        <figcaption>
                                            <p>
                                                Quit to play soccer and enter badminton club. I noticed that I didn't like to play soccer too much and got to know I can change what I do.
                                            </p>
                                        </figcaption>
                                    </aside>
                            </article>
                            <article className="eventCell">
                                <p><span>2018.04 ~</span></p>
                                <div><span></span></div>
                                <aside>
                                        <img src={pic1} alt="born" />
                                        <figcaption>
                                            <p>
                                                Learned about Economics. My theme was direct investment and international trade. While I learned economics, I was interested in programming a little bit and want to see overseas by myself.
                                            </p>
                                        </figcaption>
                                    </aside>
                            </article>
                            <article className="eventCell">
                                <p><span>2018.04 ~</span></p>
                                <div><span></span></div>
                                <aside>
                                        <img src={pic1} alt="born" />
                                        <figcaption>
                                            <p>
                                                I decided to go abroad and prepared for that.
                                            </p>
                                        </figcaption>
                                    </aside>
                            </article>
                            <article className="eventCell">
                                <p><span>2021.09 ~</span></p>
                                <div><span></span></div>
                                <aside>
                                        <img src={pic1} alt="born" />
                                        <figcaption>
                                            <p>
                                                I went to Dubai to study English. In there, I met a guy who gave me an opportuninty to study programming more. 
                                            </p>
                                        </figcaption>
                                    </aside>
                            </article>
                            <article className="eventCell">
                                <p><span>2021.04 ~</span></p>
                                <div><span></span></div>
                                <aside>
                                        <img src={pic1} alt="born" />
                                        <figcaption>
                                            <p>
                                                I got a part time job related to software development. But because of lack of skill, my job turned to unpaid. And study programming a lot.
                                            </p>
                                        </figcaption>
                                    </aside>
                            </article>
                            <article className="eventCell">
                                <p><span>2022.10 ~</span></p>
                                <div><span></span></div>
                                <aside>
                                        <img src={pic1} alt="born" />
                                        <figcaption>
                                            <p>
                                                I studied programming at college and started to find job in Vancouver. 
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