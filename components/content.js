import Link from 'next/link'

const Content = ({ children }) => {
    return (
        <>
            <section className='view'>
                <div className='main-content'>
                    {children}
                </div>
                <div className='mine'>
                    <h2>Check My</h2>
                    <div className='mine-content'>
                        <div>
                            <Link href='/skills'>Skills</Link>
                        </div>
                        <div>
                            <span>Projects</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Content;