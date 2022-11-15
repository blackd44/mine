import Head from "next/head";
import Content from "../../components/content";

const Skills = () => {
    return (
        <>
            <Head>
                <title>Skills | BlackD44</title>
            </Head>
            <Content type="links">
                <h2><span data-cursor-filter="invert(1)" data-cursor-size="50px">In My Brain</span></h2>
                <div>
                    <p>Technical skills</p>
                    <p>Software</p>
                    <p>Things I love</p>
                </div>
            </Content>
        </>
    );
}

export default Skills;