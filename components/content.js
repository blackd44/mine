import Link from 'next/link'
import { useRouter } from 'next/router';

const Content = ({ children }) => {
    const router = useRouter()
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
                                    <Link href={router.pathname == '/skills' ? '/' : '/skills'} className={(router.pathname == '/skills' ? 'active' : '') + ' ' + (router.pathname.includes('/skills') ? 'inside' : '')}><span>Skills</span></Link>
                                </div>
                                <div>
                                    <Link href=''><span>Projects</span></Link>
                                </div>
                                <div>
                                    <Link href=''><span>contact me</span></Link>
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