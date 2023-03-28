import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import pic1 from "../assets/imgs/pic1.jpeg";

const About = () => {
    return (
        <>
            <Header />
            <main className="about">
                <section>
                    <h3>skills</h3>
                    <article>
                        <h4>front end</h4>
                        <ul>
                            <li>JavaScript / TypeScript</li>
                            <li>React.js / React.ts</li>
                            <li>Vue.js</li>
                            <li>jQuery</li>
                            <li>UX/UI design</li>
                        </ul>
                    </article>
                    <article>
                        <h4>back end</h4>
                        <ul>
                            <li>Node.js</li>
                            <li>PHP</li>
                            <li>MySQL</li>
                        </ul>
                    </article>
                    <article>
                        <h4>dev ops</h4>
                        <ul>
                            <li>Git / GitHub</li>
                            <li>Figma</li>
                        </ul>
                    </article>
                </section>
                <section>
                    <h3>about me</h3>
                    <article>
                        <h4>self introduction</h4>
                        <p>
                            Hi! I'm Riku Hatano, from Japan! I have learned web development in Tamwood Careers for six months and before joinning Tamwood, I have studied this field for five months.
                        </p>
                        <p>
                            I also have the background of economics as an university student. And I am undergraduated.
                        </p>
                    </article>
                    <article>
                        <h4>short history</h4>
                        <div>
                            <article>
                                <p>1999.08</p>
                            </article>
                            <article>
                                <p>2006.04 ~ 2012.03</p>
                            </article>
                            <article>
                                <p>2012.04 ~ 2015.03</p>
                            </article>
                            <article>
                                <p>2015.04 ~ 2018.03</p>
                            </article>
                            <article>
                                <p>2018.04 ~ 2020.12</p>
                            </article>
                            <article>
                                <p>2021.01 ~ 2021.08</p>
                            </article>
                            <article>
                                <p>2021.09 ~ 2022.03</p>
                            </article>
                            <article>
                                <p>2021.04 ~ 2022.09</p>
                            </article>
                            <article>
                                <p>2022.10 ~ </p>
                            </article>
                        </div>
                        <div>
                            <figure>
                                <img src={pic1} alt="born" />
                                <figcaption>
                                    Born in Niigata prefecture.
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={pic1} alt="elementary school" />
                                <figcaption>
                                    Without studying, I just played soccer and game a lot especially Pokemon.
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={pic1} alt="junior high school" />
                                <figcaption>
                                    Enter the soccer team as a club activity in junior high school.
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={pic1} alt="high school" />
                                <figcaption>
                                    Quit to play soccer and enter badminton club. I noticed that I didn't like to play soccer too much and got to know I can change what I do.
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={pic1} alt="university" />
                                <figcaption>
                                    Learned about Economics. My theme was direct investment and international trade. While I learned economics, I was interested in programming a little bit and want to see overseas by myself.
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={pic1} alt="quit job hunting" />
                                <figcaption>
                                    I decided to go abroad and prepared for that.
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={pic1} alt="Dubai" />
                                <figcaption>
                                    I went to Dubai to study English. In there, I met a guy who gave me an opportuninty to study programming more. 
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={pic1} alt="after Dubai" />
                                <figcaption>
                                    I got a job related to software development, but because of the lack of my skill, I worked without payment. I noticed that I like to make some programs. Even though I cannot be paid, I didn't lose motivation to learn.  
                                </figcaption>
                            </figure>
                            <figure>
                                <img src={pic1} alt="Vancouver" />
                                <figcaption>
                                    I learned programming fot the first time with teacher. Not only hard skill, I also learned soft skill like how to manage the team and communicate each other as the team member. I strongly decided to work as a developer and keep on learning.  
                                </figcaption>
                            </figure>
                        </div>
                    </article>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default About;