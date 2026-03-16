"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { useDashData } from "../hooks/useData"
import { ThemeToggle } from "./ui/ThemeToggle"
import BarChart from "./features/BarChart"
import Tables from "./features/Table"

export default function IndexMain() {
    const { data, loading, error } = useDashData()
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (!sectionRef.current || loading) return

        let mm = gsap.matchMedia();

        mm.add("(prefers-reduced-motion: no-preference)", () => {
            // User prefers animation: Run the timeline
            gsap.set(sectionRef.current, { opacity: 1 })
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

            tl.from(".premium-card", { y: 30, opacity: 0, duration: 1 })
                .from(".anim-header", { y: 15, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.6")
                .from(".theme-toggle-anim", { opacity: 0, duration: 0.5 }, "-=0.6")
                .fromTo(".chart-node", 
                    { y: 30, opacity: 0 }, 
                    { y: 0, opacity: 1, stagger: 0.08, duration: 1 }, 
                    "-=0.4"
                )
                .from(".anim-th th", { opacity: 0, y: 10, stagger: 0.05, duration: 0.4 }, "-=0.6")
                .from(".anim-tr", { x: -10, opacity: 0, stagger: 0.05, duration: 0.6 }, "-=0.4")
        });

        mm.add("(prefers-reduced-motion: reduce)", () => {
            // User prefers reduced motion: Instant render, no movement
            gsap.set(sectionRef.current, { opacity: 1 });
            gsap.set([".premium-card", ".anim-header", ".theme-toggle-anim", ".chart-node", ".anim-th th", ".anim-tr"], { 
                opacity: 1, y: 0, x: 0 
            });
        });

        return () => mm.revert()
    }, [loading])

    if (loading) return <section className="w-full flex items-center justify-center min-h-screen bg-bgPrimary"><div className="text-textMuted text-sm tracking-widest font-mono uppercase" role="status">Loading...</div></section>
    if (error) return <section className="w-full flex items-center justify-center min-h-screen bg-bgPrimary"><div className="text-textMain text-sm tracking-widest font-mono uppercase" role="alert">Error</div></section>

    return (
        <section ref={sectionRef} className="w-full flex items-center justify-center px-4 md:px-6 py-12 opacity-0">
            <div className="premium-card-wrapper w-full max-w-[1050px]">
                <main className="premium-card w-full">
                    <header className="flex justify-between items-start">
                        <div>
                            <h1 className="anim-header font-medium">Atomity Infrastructure</h1>
                            <p className="anim-header text-sm tracking-wide">Live cluster expenditure</p>
                        </div>
                        <div className="theme-toggle-anim">
                            <ThemeToggle />
                        </div>
                    </header>
                    <BarChart data={data} />
                    <Tables data={data} />
                </main>
            </div>
        </section>
    )
}