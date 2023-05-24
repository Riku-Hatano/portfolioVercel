import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import pic1 from "../../assets/imgs/pic1.jpeg";
import Born from "../../assets/imgs/Born.png";
import Es from "../../assets/imgs/Es.png";
import Hs from "../../assets/imgs/Hs.png";
import Us from "../../assets/imgs/Us.png";
import Sa from "../../assets/imgs/Sa.jpeg";

const JaAbout = () => {
    useEffect(() => {
        ScrollReveal().reveal(".box", {
            duration: 800,
            viewFactor: 0.1,
            reset: true
        });
        ScrollReveal().reveal(".eventCell", {
            duration: 800,
            viewFactor: 0.01,
            reset: true
        });
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
                        <h3>自己紹介</h3>
                        <p>
                            初めまして！中央大学経済学部経済学科４年の、畑野陸と申します！
                        </p>
                        <p>
                            2022年の10月から2023年の3月まで、バンクーバーのTamwoodCareersというカレッジでプログラミングを勉強していました。趣味筋トレとボードゲームです。よろしくお願いします！
                        </p>
                    </article>
                    <section>
                        <h3>軽い生い立ち</h3>
                        <section className="eventContainer">
                            <article className="eventCell">
                                <p>
                                    <span>1999.08</span>
                                </p>
                                <div><span></span></div>
                                <aside>
                                    <img src={Born} alt="born" />
                                    <figcaption>
                                        <p>
                                            新潟県で生まれる。小さい頃は知らない人にひたすら話しかけるなど、いたずらっ子だった。記憶はない。
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
                                    <img src={Es} alt="elementalyjuniorhigh" />
                                    <figcaption>
                                        <p>
                                            幼稚園から中学の終わりまでの13年間サッカーに励む。中学の頃には市の代表に選ばれ”かける”などの活躍を見せた。
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
                                    <img src={Hs} alt="highschool" />
                                    <figcaption>
                                        <p>
                                            高校からはバドミントンを新しく始める。しかし喘息により一年ほどで部活を辞めてしまう。
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
                                    <img src={Us} alt="university" />
                                    <figcaption>
                                        <p>
                                            大学では経済学を学ぶ。講義はもちろんサークル活動、ゼミ、バイトなどに精を出す。その一方でプログラミングにも興味を持ち出す。
                                        </p>
                                        <p>
                                            コロナでの自粛期間中、初めてJavaScriptに触れる。
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
                                    <img src={Sa} alt="studyabroad" />
                                    <figcaption>
                                        <p>
                                            ドバイの語学学校に行き、その後、バンクーバーにウェブ開発を勉強しに行く。
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

export default JaAbout;