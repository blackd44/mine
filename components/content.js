import Link from 'next/link'

const Content = ({ children }) => {
    return (
        <>
            <section className='view'>
                <div className='main-content'>
                    {children}
                </div>
                <div className='mine'>
                    <div className='mine-inner'>
                        <h2>Check My</h2>
                        <div className='mine-content'>
                            <div className='mine-content-inner'>
                                <div>
                                    <Link href='/skills'><span>Skills</span></Link>
                                </div>
                                <div>
                                    <Link href=''><span>Projects</span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Content;