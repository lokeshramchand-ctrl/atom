"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import BarChart from "../components/features/BarChart"
import Tables from "../components/features/Table"
import { useDashData } from "../hooks/useData"
export default function IndexMain() {

    const { data, loading, error } = useDashData()
    const sectionRef = useRef<HTMLElement>(null)
    useEffect(() => {
        if (!sectionRef.current || loading) return
        const ctx = gsap.context(() => {
            gsap.set(sectionRef.current, { opacity: 1 })
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
            tl.from("#main-card", { y: 40, opacity: 0, duration: 1 })
                .from(".anim-header", { y: 20, opacity: 0, stagger: 0.1, duration: 0.8 }, "-=0.6")
                .fromTo(".bar", { scaleY: 0.001, opacity: 0.7 }, { scaleY: 1, opacity: 1, stagger: 0.1, duration: 1.2, ease: "back.out(1.2)" }, "-=0.4")
                .from(".bar-label", { opacity: 0, y: 10, stagger: 0.1, duration: 0.5 }, "-=0.8")
                .from(".anim-th th", { opacity: 0, y: 10, stagger: 0.05, duration: 0.4 }, "-=0.8")
                .from(".anim-tr", { x: -20, opacity: 0, stagger: 0.08, duration: 0.8 }, "-=0.6")
        }, sectionRef)
        return () => ctx.revert()
    }, [loading])
    if (loading) {
        return (
            <section className="min-h-screen flex items-center justify-center">
                <div className="text-textMuted">Loading telemetry...</div>
            </section>
        )
    }
    if (error) {
        return (
            <section className="min-h-screen flex items-center justify-center">
                <div className="text-red-400">Failed to load cluster data</div>
            </section>
        )
    }
    return (
        <section ref={sectionRef} className="min-h-screen flex items-center justify-center px-6 opacity-0">            <div className="max-w-5xl w-full bg-bgCard border border-borderCard rounded-xl p-10">
            <header className="flex justify-between items-start mb-10">
                <div>
                    <h1 className="text-xl font-bold">Atomity Component</h1>
                </div>
            </header>
            <BarChart data={data} />
            <Tables data={data} />
        </div>
        </section>

    )

}