import React from "react";
import pic1 from "../assets/imgs/pic1.jpeg";

const About = () => {
    return (
        <>
            <main className="about">
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
                        <h4>self introduction</h4>
                        <p>
                            Hi! I'm Riku Hatano, from Japan! I have learned web development in Tamwood Careers for six months and before joinning Tamwood, I have studied this field for five months.
                        </p>
                        <p>
                            I also have the background of economics as an university student. And I am undergraduated.
                        </p>
                    </article>
                    <section>
                        <h4>short history</h4>
                        <section>
                            <div className="chTable">
                                <article className="chEvent">
                                    <p>1999.08</p>
                                </article>
                                <article className="chEvent">
                                    <p>2006.04 ~</p>
                                </article>
                                <article className="chEvent">
                                    <p>2012.04 ~</p>
                                </article>
                                <article className="chEvent">
                                    <p>2015.04 ~</p>
                                </article>
                                <article className="chEvent">
                                    <p>2018.04 ~</p>
                                </article>
                                <article className="chEvent">
                                    <p>2021.01 ~</p>
                                </article>
                                <article className="chEvent">
                                    <p>2021.09 ~</p>
                                </article>
                                <article className="chEvent">
                                    <p>2021.04 ~</p>
                                </article>
                                <article className="chEvent">
                                    <p>2022.10 ~</p>
                                </article>
                            </div>
                            <div className="chPictures">
                                <figure className="chEvent">
                                    <div><span></span></div>
                                    <aside>
                                        <img src={pic1} alt="born" />
                                        <figcaption>
                                            <p>
                                                Born in Niigata prefecture.
                                            </p>
                                        </figcaption>
                                    </aside>
                                </figure>
                                <figure className="chEvent">
                                    <div><span></span></div>
                                    <aside>
                                        <img src={pic1} alt="elementary school" />
                                        <figcaption>
                                            <p>
                                                Without studying, I just played soccer and game a lot especially Pokemon.
                                            </p>
                                        </figcaption>
                                    </aside>
                                </figure>
                                <figure className="chEvent">
                                    <div><span></span></div>
                                    <aside>
                                        <img src={pic1} alt="junior high school" />
                                        <figcaption>
                                            <p>
                                                Enter the soccer team as a club activity in junior high school.
                                            </p>
                                        </figcaption>
                                    </aside>
                                </figure>
                                <figure className="chEvent">
                                    <div><span></span></div>
                                    <aside>
                                        <img src={pic1} alt="high school" />
                                        <figcaption>
                                            <p>
                                                Quit to play soccer and enter badminton club. I noticed that I didn't like to play soccer too much and got to know I can change what I do.
                                            </p>
                                        </figcaption>
                                    </aside>
                                </figure>
                                <figure className="chEvent">
                                    <div><span></span></div>
                                    <aside>
                                        <img src={pic1} alt="university" />
                                        <figcaption>
                                            <p>
                                                Learned about Economics. My theme was direct investment and international trade. While I learned economics, I was interested in programming a little bit and want to see overseas by myself.
                                            </p>
                                        </figcaption>
                                    </aside>
                                </figure>
                                <figure className="chEvent">
                                    <div><span></span></div>
                                    <aside>
                                        <img src={pic1} alt="quit job hunting" />
                                        <figcaption>
                                            <p>
                                                I decided to go abroad and prepared for that.
                                            </p>
                                        </figcaption>
                                    </aside>
                                </figure>
                                <figure className="chEvent">
                                    <div><span></span></div>
                                    <aside>
                                        <img src={pic1} alt="Dubai" />
                                        <figcaption>
                                            <p>
                                                I went to Dubai to study English. In there, I met a guy who gave me an opportuninty to study programming more. 
                                            </p>
                                        </figcaption>
                                    </aside>
                                </figure>
                                <figure className="chEvent">
                                    <div><span></span></div>
                                    <aside>
                                        <img src={pic1} alt="after Dubai" />
                                        <figcaption>
                                            <p>
                                                I got a job related to software development, but because of the lack of my skill, I worked without payment. I noticed that I like to make some programs. Even though I cannot be paid, I didn't lose motivation to learn.  
                                            </p>
                                        </figcaption>
                                    </aside>
                                </figure>
                                <figure className="chEvent">
                                    <div><span></span></div>
                                    <aside>
                                        <img src={pic1} alt="Vancouver" />
                                        <figcaption>
                                            <p>
                                                I learned programming fot the first time with teacher. Not only hard skill, I also learned soft skill like how to manage the team and communicate each other as the team member. I strongly decided to work as a developer and keep on learning.  
                                            </p>
                                        </figcaption>
                                    </aside>
                                </figure>
                            </div>
                        </section>
                    </section>
                </section>
            </main>
        </>
    )
}

export default About;