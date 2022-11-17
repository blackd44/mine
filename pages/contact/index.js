import Head from "next/head";
import Content from "../../components/content";

const Contacts = () => {
    return (
        <>
            <Head>
                <title>Contact | BlackD44</title>
            </Head>
            <Content type="links">
                <h3><span data-cursor-filter="invert(1)" data-cursor-size="50px">Message me </span></h3>
                <div>
                    <form>
                        <div>
                            <label>
                                <span>Full Name</span>
                                <input type='text' required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Email</span>
                                <input type='email' required />
                            </label>
                        </div>
                        <div>
                            <label>
                                <span>Message</span>
                                <textarea onChange={(e) => {
                                    e.target.style.height = e.target.scrollHeight + "px"
                                }
                                } required />
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