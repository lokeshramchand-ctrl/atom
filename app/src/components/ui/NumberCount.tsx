"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
export default function NumberCounter({ value }: { value: number }) {
    const ref = useRef<HTMLSpanElement>(null)
    useEffect(() => {
        const obj = { val: 0 }
        gsap.to(obj, {
            val: value,
            duration: 2,
            onUpdate: () => {
                if (ref.current) {
                    ref.current.innerText = Math.round(obj.val).toLocaleString()
                }
            }
        })
    }, [value])
    return <span ref={ref}>0</span>
}