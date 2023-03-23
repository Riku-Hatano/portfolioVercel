import React from "react";
// import axios from "axios";
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
                <p>this is contact</p>
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