import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import dbRequests from "../server/dbRequests";
import Header from "../components/Header";
import Footer from "../components/Footer";


const Contact = () => {
    const submit = (e: any) => {
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

    return (
        <>
            <Header />
            <main className="contact">
                <section>
                    <h1>contact</h1>
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
                <form onSubmit={submit}>
                    <input type="text" name="username" required/>
                    <textarea name="comment" placeholder="please write some comment here" required></textarea>
                    <button type="submit">submit</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Contact;