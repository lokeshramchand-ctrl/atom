export default function BarChart({ data }: { data: any[] }) {
    const max = Math.max(...data.map(d => d.cost))

    return (
        <div className="h-[220px] mb-20 relative">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 pb-[50px]">
                <div className="w-full h-px border-t border-dashed border-white/30"></div>
                <div className="w-full h-px border-t border-dashed border-white/30"></div>
                <div className="w-full h-px border-t border-dashed border-white/30"></div>
                <div className="w-full h-px border-t border-solid border-white/50"></div>
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
                                <span className="font-mono text-xs text-white bg-white/5 px-2.5 py-1.5 backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                                    ${item.cost.toLocaleString()}
                                </span>
                                <div className="w-px h-3 bg-gradient-to-b from-white/20 to-transparent mt-1"></div>
                            </div>
                            
                            <div
                                style={{ height: `${height}%` }}
                                className="relative w-8 sm:w-12 bg-gradient-to-t from-transparent via-white/[0.03] to-white/[0.12] group-hover:to-white/[0.2] transition-colors duration-500 border-x border-white/5 group-hover:border-white/20 backdrop-blur-[2px]"
                            >
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-white/40 group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] transition-all duration-500" />
                            </div>
                            
                            <div className="mt-6 text-[10px] tracking-widest uppercase text-white/40 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                                {item.name}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}