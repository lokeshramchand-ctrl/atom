"use client"

import BarChart from "../components/features/BarChart"
import Tables from "../components/features/Table"
import { useDashData } from "../hooks/useData"
export default function IndexMain() {

    const { data, loading } = useDashData()
    if (loading) {
        return (
            <section className="min-h-screen flex items-center justify-center">
                <div className="text-textMuted">Loading telemetry...</div>
            </section>
        )
    }

    return (
        <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-5xl w-full bg-bgCard border border-borderCard rounded-xl p-10">
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