import Head from "next/head";
import Footer from "./footer";
import Header from "./header";
import Mouse from "./mouse";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>BlackD44</title>
            </Head>
            <Mouse />
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