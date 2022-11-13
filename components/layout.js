import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>BlackD44</title>
            </Head>
            <div className="main-container">
                <div className="main-container-outer">
                    <div className="main-container-inner">
                        <Header />
                        <main>
                            {children}
                        </main>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Layout;