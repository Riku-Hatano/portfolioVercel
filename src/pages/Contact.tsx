import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FormEvent } from "react";
import dbRequests from "../server/dbRequests";
import axiosObj from "../server/sendMailConfig";


const Contact = () => {
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
            <main className="contact">
                <section>
                    <p>Thanks for reading! If you need contact, please send message to me through below social medias!</p>
                </section>
                <section>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faEnvelope} />
                            : lutianye89@gmail.com
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faInstagram} />
                            : riku.kuri1234
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faLinkedin} />
                            : riku.kurilinkedin
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faGithub} />
                            : https://github.com/Riku-Hatano
                        </li>
                    </ul>
                </section>
                {/* <form onSubmit={submit}>
                    <input type="text" name="username" required/>
                    <textarea name="comment" placeholder="please write some comment here" required></textarea>
                    <button type="submit">submit</button>
                </form> */}
                <form onSubmit={submitMail}>
                    <article>
                        <input type="text" name="name" placeholder="Your Name"/>
                        <input type="email" name="email" placeholder="Your Email Address"/>
                    </article>
                    <textarea name="message" placeholder="Message here"></textarea>
                    <button type="submit">submit</button>
                </form>
            </main>
        </>
    )
}

<a href="mailto:lutianle89@gmail.com?subject=SweetWords&body=Please send me a copy of your new program!">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
export default Contact;