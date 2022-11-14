import Head from "next/head";
import Link from "next/link";
import Content from "../components/content";

const NotFound = () => {
    return (
        <>
            <Head>
                <title>404 Page - BlackD44</title>
            </Head>
            <Content>
                <h1>Ooooops - 404</h1>
                <div>
                    <p>this page wasn't found</p>
                    <p>go home, click <Link href='/' style={{ borderBottom: '2px solid currentcolor' }}>here</Link></p>
                </div>
            </Content>
        </>
    );
}

export default NotFound;