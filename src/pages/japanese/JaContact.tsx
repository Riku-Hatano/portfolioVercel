import React from "react";
import { FormEvent } from "react";
import dbRequests from "../../server/dbRequests";
import axiosObj from "../../server/sendMailConfig";


const JaContact = () => {
    const submit = (e: any): void => {
        e.preventDefault();
        // const formData = new FormData(e.target);
        // const axiosObj = axios.create({
        //     baseURL: "http://localhost:8089/server"
        // })
        // axiosObj.post("/addcomment", formData).then(
        //     (resolve) => {
        //         console.log(resolve);
        //     },
        //     (reject) => {
        //         console.log(reject);
        //     }
        // )
        const formData = new FormData(e.target);
        dbRequests.get("getcomment").then(
            (resolve) => {
                console.log(resolve);
            },
            (reject) => {
                console.log(reject);
            }
        )
    }

    const submitMail = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.message.value = "";
        axiosObj.post("/test", formData).then(
            (res) => {
                console.log(res);
            },
            (rej) => {
                console.log(rej);
            }
        )
    }

    return (
        <>
            <section className="contact">
                <h1>Contact me</h1>
                <p>
                    最後まで読んでいただきありがとうございます！必要でしたら下記のフォームかSNSからメッセージお待ちしております！
                </p>
                {/* <section>
                    <ul>
                        <a href="mailto:lutianle89@gmail.com?subject=SweetWords&body=Please send me a copy of your new program!">
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                : lutianye89@gmail.com
                            </li>
                        </a>
                        <a href="https://www.instagram.com/riku.kuri1234" target="_blank">
                            <li>
                                <FontAwesomeIcon icon={faInstagram} />
                                : riku.kuri1234
                            </li>
                        </a>
                        <a href="https://github.com/Riku-Hatano" target="_blank">
                            <li>
                                <FontAwesomeIcon icon={faLinkedin} />
                                : riku.kurilinkedin
                            </li>
                        </a>
                        <a href="https://github.com/Riku-Hatano" target="_blank">
                            <li>
                                <FontAwesomeIcon icon={faGithub} />
                                : https://github.com/Riku-Hatano
                            </li>
                        </a>
                    </ul>
                </section> */}
                {/* <form onSubmit={submit}>
                    <input type="text" name="username" required/>
                    <textarea name="comment" placeholder="please write some comment here" required></textarea>
                    <button type="submit">submit</button>
                </form> */}
                <form onSubmit={submitMail}>
                    <article>
                        <input type="text" name="name" placeholder="名前"/>
                        <input type="email" name="email" placeholder="メールアドレス"/>
                    </article>
                    <textarea name="message" placeholder="メッセージ"></textarea>
                    <button type="submit">送信</button>
                </form>
            </section>
        </>
    )
}

export default JaContact;