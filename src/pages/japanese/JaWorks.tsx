import React from "react";
import pic1 from "../../assets/imgs/pic1.jpeg";

const Works = () => {
    return (
        <>
            <section className="works">
                <h1>works</h1>
                <section>
                    <figure>
                        <a href="https://othello-wheat.vercel.app/" className="worksContainer">
                            <img src={pic1} alt="pic1" />
                        </a>
                        <figcaption>
                            <h3>Othello Application</h3>
                            <h3>オセロアプリ</h3>
                            <p>
                                SNSで詰めオセロの問題を見たことはないでしょうか？
                            </p>
                            <p>
                                もし見たことがあり、真剣に問題を解きたいのなら、このアプリはうってつけと言えます。
                            </p>
                            <p>
                                このアプリには盤面を編集する機能があり、特定の状況からゲームを始めることができます。
                            </p>
                            <p>
                                私の知る限りでは、AppStoreで無料で配布されていてこの機能があるものに出会ったことがありません。詰めオセロを解きたい時や、リアルで対局したときの感想戦などで使えるアプリだと思います。
                            </p>
                        </figcaption>
                    </figure>
                    <figure>
                        <a href="https://chessgame-one.vercel.app/game" className="worksContainer">
                            <img src={pic1} alt="pic1" />
                        </a>
                        <figcaption>
                            <h3>チェスアプリ</h3>
                            <p>
                                このアプリにはまだ編集機能はありませんが、実装予定です。
                            </p>
                            <p>
                                こちらもオセロアプリと同様に、私の知る限りでは無料配布されているアプリで編集機能のあるものは有りません。
                            </p>
                            <p> 
                                オセロアプリとは違い、カプセル化を意識して作りました。個々の機能が独立しているため、新しい機能の実装が容易です。
                            </p>
                        </figcaption>
                    </figure>
                </section>
            </section>
        </>
    )
}

export default Works;