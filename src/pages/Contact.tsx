import React from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
    const submit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const axiosObj = axios.create({
            baseURL: "http://localhost:8089"
        })
        axiosObj.post("/server", formData).then(
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
            <main>
                <p>this is contact</p>
                <form onSubmit={submit}>
                    <input type="number" name="id" required/>
                    <input type="text" name="fname" required/>
                    <input type="text" name="lname" required/>
                    <button type="submit">submit</button>
                </form>
            </main>
            <Footer />
        </>
    )
}

export default Contact;