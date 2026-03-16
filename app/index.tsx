"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import BarChart from "./src/components/features/BarChart"
import Tables from "./src/components/features/Table"
import { useDashData } from "./src/hooks/useData"

export default function IndexMain() {
    const { data, loading, error } = useDashData()
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        if (!sectionRef.current || loading) return

        const ctx = gsap.context(() => {
            gsap.set(sectionRef.current, { opacity: 1 })
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

            tl.from("#main-card", { y: 30, opacity: 0, duration: 1 })
                .from(".anim-header", { y: 15, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.6")
                .fromTo(".chart-node", 
                    { y: 30, opacity: 0 }, 
                    { y: 0, opacity: 1, stagger: 0.08, duration: 1 }, 
                    "-=0.4"
                )
                .from(".anim-th th", { opacity: 0, y: 10, stagger: 0.05, duration: 0.4 }, "-=0.6")
                .from(".anim-tr", { x: -10, opacity: 0, stagger: 0.05, duration: 0.6 }, "-=0.4")
        }, sectionRef)

        return () => ctx.revert()
    }, [loading])

    if (loading) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-black">
                <div className="text-white/50 text-sm tracking-widest uppercase font-mono">Loading data...</div>
            </section>
        )
    }

    if (error) {
        return (
            <section className="min-h-screen flex items-center justify-center bg-black">
                <div className="text-white text-sm tracking-widest uppercase font-mono">System Error</div>
            </section>
        )
    }

    return (
        <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-6 py-12 bg-black opacity-0 text-white">
            <div id="main-card" className="max-w-[1050px] w-full bg-[#0A0A0A] border border-white/10 p-8 md:p-14">
                <header className="flex justify-between items-start mb-16 border-b border-white/10 pb-6">
                    <div>
                        <h1 className="anim-header text-xl tracking-tight font-medium text-white">Atomity Infrastructure</h1>
                        <p className="anim-header text-sm text-white/40 mt-1 tracking-wide">Live cluster expenditure</p>
                    </div>
                </header>
                
                <BarChart data={data} />
                <Tables data={data} />
            </div>
        </section>
    )
}