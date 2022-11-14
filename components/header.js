import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
    let [lineColor1Value, setLineColor1] = useState('#ffaa00')
    let [lineColor2Value, setLineColor2] = useState('#d1d1d1')
    let [textColor1Value, setTextColor1] = useState('#d1d1d1')
    let [textColor2Value, setTextColor2] = useState('#1d1d20')

    const set = (el, val) => {
        document.documentElement.style.setProperty(el, val);
    }
    useEffect(() => {
        lineColor1.value = lineColor1Value
        lineColor2.value = lineColor2Value
        textColor1.value = textColor1Value
        textColor2.value = textColor2Value

        //for phone
        lineColor1.addEventListener("change", (e) => {
            setLineColor1(prev => lineColor1.value);
            set('--color-active', lineColor1Value)
        });

        lineColor2.addEventListener("change", (e) => {
            setLineColor2(prev => lineColor2.value);
            set('--color-active-2', lineColor2Value)
        });

        textColor1.addEventListener("change", (e) => {
            setTextColor1(prev => textColor1.value);
            set('--color-bright', textColor1Value)
        });

        textColor2.addEventListener("change", (e) => {
            setTextColor2(prev => textColor2.value);
            set('--color-dark', textColor2Value)
        });

        //for laptop
        lineColor1.addEventListener("input", (e) => {
            setLineColor1(prev => lineColor1.value);
            set('--color-active', lineColor1Value)
        });

        lineColor2.addEventListener("input", (e) => {
            setLineColor2(prev => lineColor2.value);
            set('--color-active-2', lineColor2Value)
        });

        textColor1.addEventListener("input", (e) => {
            setTextColor1(prev => textColor1.value);
            set('--color-bright', textColor1Value)
        });

        textColor2.addEventListener("input", (e) => {
            setTextColor2(prev => textColor2.value);
            set('--color-dark', textColor2Value)
        });
    })

    return (
        <header>
            <div className="logo">
                <Link href='/'>D</Link>
            </div>
            <nav>
                <div>
                    <Link href='https://codepen.io/blackd44/' target="_blank" rel="noopener noreferrer">
                        CodePen
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
                <div className="settings">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings">
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                        </path>
                    </svg>
                    <div>
                        <div>
                            <article>
                                <p>Page colors</p>
                                <p>
                                    <label style={{ backgroundColor: textColor1Value }}>
                                        <input type="color" id="textColor1" />
                                    </label>
                                    <label for="textColor1">text color</label>
                                </p>
                                <p>
                                    <label style={{ backgroundColor: textColor2Value }}>
                                        <input type="color" id="textColor2" />
                                    </label>
                                    <label for="textColor2">back color</label>
                                </p>
                            </article>
                            <article>
                                <p>Line colors</p>
                                <p>
                                    <label style={{ backgroundColor: lineColor1Value }}>
                                        <input type="color" id="lineColor1" />
                                    </label>
                                    <label for="lineColor1">Color 1</label>
                                </p>
                                <p>
                                    <label style={{ backgroundColor: lineColor2Value }}>
                                        <input type="color" id="lineColor2" />
                                    </label>
                                    <label for="lineColor2">Color 2</label>
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;