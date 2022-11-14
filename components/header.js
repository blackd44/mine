import Link from "next/link";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link href='/'>D</Link>
            </div>
            <nav>
                <div>Email</div>
                <div>Github</div>
                <div>LinkedIn</div>
            </nav>
        </header>
    );
}

export default Header;