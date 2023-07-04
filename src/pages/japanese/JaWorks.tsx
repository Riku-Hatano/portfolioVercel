import React from "react";
import pic1 from "../../assets/imgs/pic1.jpeg";
import Othello from "../../assets/imgs/Othello.png";
import Chess from "../../assets/imgs/Chess.png";
import Tetris from "../../assets/imgs/tetris.png";

const Works = () => {
    return (
        <>
            <section className="works">
                <h1>works</h1>
                <section>
                    <figure>
                        <a href="https://othello-wheat.vercel.app/" className="worksContainer">
                            <img src={Othello} alt="Othello" />
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
                            <p>
                                また、ロジックを０から自分自身で組んだので、新しい機能を追加したいときやメンテナンスを容易に行えることもこのアプリの強みだと考えています。
                            </p>
                        </figcaption>
                    </figure>
                    <figure>
                        <a href="https://chessgame-one.vercel.app/game" className="worksContainer">
                            <img src={Chess} alt="Chess" />
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
                            <p>
                                また、オセロアプリと同様にロジックを０から考えたので、そういった点からも新機能の実装が容易に行えます。
                            </p>
                        </figcaption>
                    </figure>
                    <figure>
                        <a href="https://chessgame-one.vercel.app/game" className="worksContainer">
                            <img src={Chess} alt="Chess" />
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
                            <p>
                                また、オセロアプリと同様にロジックを０から考えたので、そういった点からも新機能の実装が容易に行えます。
                            </p>
                        </figcaption>
                    </figure>
                    <figure>
                        <a href="https://tetris-riku-hatano.vercel.app" className="worksContainer">
                            <img src={Tetris} alt="Tetris" />
                        </a>
                        <figcaption>
                            <h3>テトリスアプリ</h3>
                            <p>
                                テトリスのソースコードは世の中にたくさん出回っておりますが、今一番プレイされている”テトリス９９”のルールのソースコードは日本語でも英語でも見たことがありません。
                            </p>
                            <p>
                                主にこのアプリには二つ強みがあります。
                            </p>
                            <p> 
                                一つ目はコードの改変がしやすいという点です。こちらもゼロからロジックを考え、どのように動くか把握しているので、ゲームにありがちな頻繁なマイナーアップデートにも対応しやすくなっております。
                            </p>
                            <p>
                                二つ目はユーザーのスコアが保存できるという点です。このアプリはオセロやチェスなどと違い、外部のヘッドレスCMSと連携しております。したがって、ユーザーは新しくアカウントを作成してログインしたり、過去のスコアを確認したりできます。
                            </p>
                            <p>
                                ユーザー名、パスワードを"test"にしておりますので、ぜひログインしてプレイしてみてください！
                            </p>
                        </figcaption>
                    </figure>
                </section>
            </section>
        </>
    )
}

export default Works;