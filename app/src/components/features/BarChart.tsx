export default function BarChart({ data }: { data: any[] }) {
    const max = Math.max(...data.map(d => d.cost))

    return (
        <div className="h-[220px] mb-20 relative">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 pb-[50px]">
                <div className="w-full h-px border-t border-dashed border-[var(--border-subtle)]"></div>
                <div className="w-full h-px border-t border-dashed border-[var(--border-subtle)]"></div>
                <div className="w-full h-px border-t border-dashed border-[var(--border-subtle)]"></div>
                <div className="w-full h-px border-t border-solid border-[var(--text-muted)]"></div>
            </div>

            <div className="flex justify-between items-end h-full px-2 sm:px-8 relative z-10 pb-[2px]">
                {data.map((item) => {
                    const height = Math.max((item.cost / max) * 100, 5)
                    return (
                        <div 
                            key={item.name} 
                            className="chart-node flex flex-col items-center justify-end group relative w-16 sm:w-20 h-full cursor-crosshair"
                        >
                            <div className="absolute -top-12 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 transition-all duration-500 flex flex-col items-center pointer-events-none z-20">
                                <span className="font-mono text-xs text-[color:var(--text-main)] bg-[var(--bg-card)] px-2.5 py-1.5 backdrop-blur-md border border-[var(--border-subtle)] shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                                    ${item.cost.toLocaleString()}
                                </span>
                                <div className="w-px h-3 bg-gradient-to-b from-[var(--text-muted)] to-transparent opacity-50 mt-1"></div>
                            </div>
                            
                            <div
                                style={{ height: `${height}%` }}
                                className="relative w-8 sm:w-12 bg-gradient-to-t from-transparent via-[var(--chart-bar-via)] to-[var(--chart-bar-to)] group-hover:to-[var(--chart-bar-hover)] transition-colors duration-500 border-x border-[var(--border-subtle)] group-hover:border-[var(--chart-top)] backdrop-blur-[2px]"
                            >
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-[var(--chart-top)] group-hover:bg-[var(--chart-top)] group-hover:shadow-[0_0_18px_var(--chart-glow)] transition-all duration-500" />
                            </div>
                            
                            <div className="mt-6 text-[10px] tracking-widest uppercase text-[color:var(--text-muted)] group-hover:text-[color:var(--text-main)] transition-colors duration-300 whitespace-nowrap">
                                {item.name}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}