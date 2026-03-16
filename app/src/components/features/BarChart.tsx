export default function BarChart({ data }: { data: any[] }) {
    const max = Math.max(...data.map(d => d.cost))

    return (
        <section aria-labelledby="cluster-cost-heading" className="mb-20">
            <div className="mb-5 flex items-end justify-between gap-4">
                <div>
                    <h2 id="cluster-cost-heading" className="text-sm font-medium text-[color:var(--text-main)]">Cluster Cost Distribution</h2>
                    <p className="text-xs tracking-wide text-[color:var(--text-muted)]">Tab through bars to inspect exact values.</p>
                </div>
            </div>

            <figure aria-describedby="cluster-cost-caption" className="h-[220px] relative">
                <figcaption id="cluster-cost-caption" className="sr-only">
                    Bar chart showing cluster costs. Each bar can be focused to reveal its exact dollar value.
                </figcaption>

                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 pb-[50px]">
                    <div className="w-full h-px border-t border-dashed border-[var(--border-subtle)]"></div>
                    <div className="w-full h-px border-t border-dashed border-[var(--border-subtle)]"></div>
                    <div className="w-full h-px border-t border-dashed border-[var(--border-subtle)]"></div>
                    <div className="w-full h-px border-t border-solid border-[var(--text-muted)]"></div>
                </div>

                <div className="chart-container flex justify-between items-end h-full px-2 sm:px-8 relative z-10 pb-[2px]" role="list">
                    {data.map((item) => {
                        const height = Math.max((item.cost / max) * 100, 5)
                        const tooltipId = `cluster-cost-${item.name.toLowerCase().replace(/\s+/g, "-")}`

                        return (
                            <div 
                                key={item.name}
                                role="listitem"
                                tabIndex={0}
                                aria-describedby={tooltipId}
                                aria-label={`${item.name} cost ${item.cost.toLocaleString()} dollars`}
                                className="chart-node group relative flex h-full w-16 cursor-crosshair flex-col items-center justify-end rounded-md outline-none focus-visible:ring-2 focus-visible:ring-[var(--text-main)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--bg-card)] sm:w-20"
                            >
                                <div className="pointer-events-none absolute -top-12 z-20 flex flex-col items-center opacity-0 transition-all duration-500 group-hover:-translate-y-1 group-hover:opacity-100 group-focus-within:-translate-y-1 group-focus-within:opacity-100">
                                    <span id={tooltipId} className="font-mono text-xs text-[color:var(--text-main)] bg-[var(--bg-card)] px-2.5 py-1.5 backdrop-blur-md border border-[var(--border-subtle)] shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                                        ${item.cost.toLocaleString()}
                                    </span>
                                    <div className="mt-1 h-3 w-px bg-gradient-to-b from-[var(--text-muted)] to-transparent opacity-50"></div>
                                </div>

                                <div
                                    style={{ height: `${height}%` }}
                                    className="relative w-8 border-x border-[var(--border-subtle)] bg-gradient-to-t from-transparent via-[var(--chart-bar-via)] to-[var(--chart-bar-to)] backdrop-blur-[2px] transition-colors duration-500 group-hover:border-[var(--text-muted)] group-hover:to-[var(--chart-bar-hover)] group-focus-within:border-[var(--text-main)] group-focus-within:to-[var(--chart-bar-hover)] sm:w-12"
                                >
                                    <div className="absolute top-0 left-0 h-[2px] w-full bg-[var(--chart-top)] transition-all duration-500 group-hover:bg-[var(--text-main)] group-hover:shadow-[0_0_15px_rgba(0,0,0,0.25)] group-focus-within:bg-[var(--text-main)] group-focus-within:shadow-[0_0_15px_rgba(0,0,0,0.25)] dark:group-hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] dark:group-focus-within:shadow-[0_0_15px_rgba(255,255,255,0.7)]" />
                                </div>

                                <div className="mt-6 whitespace-nowrap text-[10px] uppercase tracking-widest text-[color:var(--text-muted)] transition-colors duration-300 group-hover:text-[color:var(--text-main)] group-focus-within:text-[color:var(--text-main)]">
                                    {item.name}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </figure>
        </section>
    )
}