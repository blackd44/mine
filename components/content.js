import Link from 'next/link'
import { useRouter } from 'next/router';

const Content = ({ children, type }) => {
    const router = useRouter()
    return (
        <>
            <section className='view'>
                <div className={`main-content $`}>
                    {children}
                </div>
                <div className='mine'>
                    <div className='mine-inner'>
                        <h2>
                            <span data-cursor-filter="invert(1)" data-cursor-size="30px">Check</span>
                        </h2>
                        <div className='mine-content'>
                            <div className='mine-content-inner'>
                                <div>
                                    <Link href={router.pathname == '/brain' ? '/' : '/brain'} className={(router.pathname == '/brain' ? 'active' : '') + ' ' + (router.pathname.includes('/brain') ? 'inside' : '')}><span>my brain</span></Link>
                                </div>
                                <div>
                                    <Link href=''><span>my Achievements</span></Link>
                                </div>
                                <div>
                                    <Link href={router.pathname == '/contact' ? '/' : '/contact'} className={(router.pathname == '/contact' ? 'active' : '') + ' ' + (router.pathname.includes('/contact') ? 'inside' : '')}><span>contact me</span></Link>
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