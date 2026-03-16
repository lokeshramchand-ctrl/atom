"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import BarChart from "../components/features/BarChart"
import Tables from "../components/features/Table"
import { useDashData } from "../hooks/useData"
import "./globals.css"

export default function IndexMain() {
    const { data, loading, error } = useDashData()
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (!sectionRef.current || loading) return

        const ctx = gsap.context(() => {
            gsap.set(sectionRef.current, { opacity: 1 })
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

            tl.from(".premium-card", { y: 30, opacity: 0, duration: 1 })
                .from(".anim-header", { y: 15, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.6")
                .fromTo(".chart-node", 
                    { blockSiize: 0, opacity: 0 }, 
                    { blockSiize: "auto", opacity: 1, stagger: 0.08, duration: 1 }, 
                    "-=0.4"
                )
                .from(".anim-th th", { opacity: 0, y: 10, stagger: 0.05, duration: 0.4 }, "-=0.6")
                .from(".anim-tr", { x: -10, opacity: 0, stagger: 0.05, duration: 0.6 }, "-=0.4")
        }, sectionRef)

        return () => ctx.revert()
    }, [loading])

    if (loading) return <section className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]"><div className="text-[color:var(--text-muted)] text-sm tracking-widest font-mono uppercase">Loading...</div></section>
    if (error) return <section className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)]"><div className="text-[color:var(--text-main)] text-sm tracking-widest font-mono uppercase">Error</div></section>

    return (
        <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-4 md:px-6 py-12 bg-[var(--bg-primary)] opacity-0">
            <div className="premium-card-wrapper">
                <div className="premium-card">
                    <header>
                        <h1 className="anim-header font-medium">Atomity Infrastructure</h1>
                        <p className="anim-header text-sm tracking-wide">Live cluster expenditure</p>
                    </header>
                    <BarChart data={data} />
                    <Tables data={data} />
                </div>
            </div>
        </section>
    )
}