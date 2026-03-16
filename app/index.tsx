"use client"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import BarChart from "./src/components/features/BarChart"
import Tables from "./src/components/features/Table"
import { useDashData } from "./src/hooks/useData"
import { ThemeToggle } from "./src/components/ui/ThemeToggle"
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
                .from(".theme-toggle-anim", { opacity: 0, duration: 0.5 }, "-=0.6")
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

    if (loading) return <section className="w-full flex items-center justify-center min-h-screen bg-bgPrimary"><div className="text-textMuted text-sm tracking-widest font-mono uppercase">Loading...</div></section>
    if (error) return <section className="w-full flex items-center justify-center min-h-screen bg-bgPrimary"><div className="text-textMain text-sm tracking-widest font-mono uppercase">Error</div></section>

    return (
        <section ref={sectionRef} className="w-full flex items-center justify-center px-4 md:px-6 py-12 opacity-0">
            {/* Added w-full and max-w-[1050px] here to enforce width */}
            <div className="premium-card-wrapper w-full max-w-[1050px]">
                {/* Added w-full here to prevent flex shrinking */}
                <div className="premium-card w-full">
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
                </div>
            </div>
        </section>
    )
}