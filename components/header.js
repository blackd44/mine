import Link from "next/link";
import { useEffect, useState } from "react";
import CodepenSvg from "./svg/codepen";
import GithubSvg from "./svg/github";
import LinkedinSvg from "./svg/linkedin";
import Settings from "./svg/settings";

const Header = () => {
    let [lineColor1Value, setLineColor1] = useState('#00ffff')
    let [lineColor2Value, setLineColor2] = useState('#ff00ff')
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
                        <span>CodePen</span>
                        <span>
                            <CodepenSvg />
                        </span>
                    </Link>
                </div>
                <div>
                    <Link href='https://github.com/blackd44/' target="_blank" rel="noopener noreferrer">
                        <span>Github</span>
                        <span>
                            <GithubSvg />
                        </span>
                    </Link>
                </div>
                <div>
                    <Link href='https://www.linkedin.com/in/iradukunda-benn-dalton/' target="_blank" rel="noopener noreferrer">
                        <span>Linkedin</span>
                        <span>
                            <LinkedinSvg />
                        </span>
                    </Link>
                </div>
                <div className="settings">
                    <Link href=''>
                        <span>Settings</span>
                        <span>
                            <Settings />
                        </span>
                    </Link>
                    <div>
                        <div>
                            <article>
                                <p>Page colors</p>
                                <p>
                                    <label style={{ backgroundColor: textColor1Value }}>
                                        <input type="color" id="textColor1" />
                                    </label>
                                    <label htmlFor="textColor1" data-cursor-filter="invert(1)">text color</label>
                                </p>
                                <p>
                                    <label style={{ backgroundColor: textColor2Value }}>
                                        <input type="color" id="textColor2" />
                                    </label>
                                    <label htmlFor="textColor2" data-cursor-filter="invert(1)">back color</label>
                                </p>
                            </article>
                            <article>
                                <p>Line colors</p>
                                <p>
                                    <label style={{ backgroundColor: lineColor1Value }}>
                                        <input type="color" id="lineColor1" />
                                    </label>
                                    <label htmlFor="lineColor1" data-cursor-filter="invert(1)">Color 1</label>
                                </p>
                                <p>
                                    <label style={{ backgroundColor: lineColor2Value }}>
                                        <input type="color" id="lineColor2" />
                                    </label>
                                    <label htmlFor="lineColor2" data-cursor-filter="invert(1)">Color 2</label>
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