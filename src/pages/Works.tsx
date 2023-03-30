import React from "react";
import pic1 from "../assets/imgs/pic1.jpeg";

const Works = () => {
    return (
        <>
            <section className="works">
                <h1>works</h1>
                <figure>
                    <a href="https://othello-wheat.vercel.app/" className="worksContainer">
                        <img src={pic1} alt="pic1" />
                    </a>
                    <figcaption>
                        <p>
                            This is an othello application.
                        </p> 
                        <p>
                            Have you ever seen othello puzzle in SNS or something? If so and want to think seriously, this apps is very useful. This apps has an edit board mode. In this mode, we can place pieces as you want and start the game with specific situation.
                        </p>
                        <p>
                            As far as I know, there are no free othello apps in AppStore for now. So, I hope this will help othello player who want to fix othello puzzle for free. 
                        </p>
                    </figcaption>
                </figure>
                <figure>
                    <a href="https://chessgame-one.vercel.app/game" className="worksContainer">
                        <img src={pic1} alt="pic1" />
                    </a>
                    <figcaption>
                        <p>
                            This is an chess application.
                        </p> 
                        <p>
                            This apps hasn't have edit mode yet, but this mode will be comming soon. 
                        </p>
                        <p>
                            As far as I know, same as othello apps, I have never seen chess apps that can edit the board or make specific situation. This is also good for solving puzzle.
                        </p>
                        <p>
                            What is different from othello apps is, I made this while thinking about the scalability. To make each function independent, I can easily implement new functions easily. 
                        </p>
                    </figcaption>
                </figure>
            </section>
        </>
    )
}

export default Works;