import Head from "next/head";
import { useMemo, useState } from "react";
import Content from "../../components/content";

const Contacts = () => {
    const [message, setMessage] = useState({
        fullName: '',
        email: '',
        body: '',
    })

    const changed = (e) => {
        setMessage(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const addMessage = (e) => {
        e.preventDefault()

        console.log(message)

        /*
        const inputs = e.target.querySelectorAll('input, textarea')
        inputs.forEach(el => {
            el.value = ''
        })
        */
    }
    return (
        <>
            <Head>
                <title>Contact | BlackD44</title>
            </Head>
            <Content type="links">
                <h3><span data-cursor-filter="invert(1)" data-cursor-size="50px">Message me </span></h3>
                <div>
                    <form onSubmit={addMessage}>
                        <div>
                            <label>
                                <span>Full Name</span>
                                <input type='text' name="fullName" onChange={changed} defaultValue={message.fullName} required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Email</span>
                                <input type='email' name="email" onChange={changed} defaultValue={message.email} required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Message</span>
                                <textarea name="body" onChange={(e) => {
                                    e.target.style.height = e.target.scrollHeight + "px"
                                    changed(e)
                                }} defaultValue={message.body} required />
                            </label>
                        </div>
                        <button data-cursor-filter="invert(1)" data-cursor-size="40px">Send Message</button>
                    </form>
                </div>
            </Content>
        </>
    );
}

export default Contacts;