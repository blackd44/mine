import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const Mouse = () => {
    const router = useRouter()

    const [path, setPath] = useState('')
    if (path !== router.pathname) {
        setPath(router.pathname)
    }

    const mainCursor = useRef(null)
    const cursor = useRef(null)

    const cssVar = val => {
        return getComputedStyle(document.documentElement)
            .getPropertyValue(val);
    }


    useEffect(() => {
        document.addEventListener("mousemove", event => {
            const { clientX, clientY } = event

            const mouseX = clientX
            const mouseY = clientY

            try {
                mainCursor.current.style.translate = `
                    ${mouseX - (mainCursor.current.clientWidth / 2)}px 
                    ${mouseY - (mainCursor.current.clientHeight / 2)}px 0`

            }
            catch (e) {
                console.log("can't find cursor")
                document.querySelector(".cursor").style.display = 'none'
            }
        })

        return () => { }
    }, [])

    useEffect(() => {
        const a = document.querySelectorAll('a')
        a.forEach(el => {
            el.addEventListener("mouseenter", event => {
                cursor.current.style.width = cssVar('--cursor-hover-size')
                cursor.current.style.height = cssVar('--cursor-hover-size')
                cursor.current.style.color = cssVar('--color-active-2')
            })
            el.addEventListener("mouseleave", event => {
                cursor.current.style.width = cssVar('--cursor-size')
                cursor.current.style.height = cssVar('--cursor-size')
                cursor.current.style.color = 'inherit'
            })
        })

        //back filter
        const filters = document.querySelectorAll('[data-cursor-filter]')
        filters.forEach(el => {
            el.style.cursor = "none"
            el.addEventListener("mouseenter", event => {
                cursor.current.style.backdropFilter = el.dataset.cursorFilter
                cursor.current.style.borderWidth = 0
            })
            el.addEventListener("mouseleave", event => {
                cursor.current.style.backdropFilter = ''
                cursor.current.style.borderWidth = `2px`
            })
        })

        //size
        const sizes = document.querySelectorAll('[data-cursor-size]')
        sizes.forEach(el => {
            el.addEventListener("mouseenter", event => {
                cursor.current.style.width = el.dataset.cursorSize
                cursor.current.style.height = el.dataset.cursorSize
            })
            el.addEventListener("mouseleave", event => {
                cursor.current.style.width = cssVar('--cursor-size')
                cursor.current.style.height = cssVar('--cursor-size')
            })
        })

        return () => { }
    }, [path])
    return (
        <>
            <div className="cursor" ref={mainCursor}>
                <div ref={cursor}></div>
            </div>
        </>
    );
}

export default Mouse;