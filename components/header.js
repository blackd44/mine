import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link href='/'>D</Link>
            </div>
            <nav>
                <div>
                    <Link href='#'>
                        Email
                    </Link>
                </div>
                <div>
                    <Link href='https://github.com/blackd44/' target="_blank" rel="noopener noreferrer">
                        Github
                    </Link>
                </div>
                <div>
                    <Link href='https://www.linkedin.com/in/iradukunda-benn-dalton/' target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;