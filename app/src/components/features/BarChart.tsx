export default function BarChart({ data }: { data: any[] }) {
    const max = Math.max(...data.map(d => d.cost))
    return (
        <div className="h-52 mb-10 border-b border-borderCard pb-2">
            <div className="flex justify-around items-end h-full gap-6">
                {data.map((item) => {
                    const height = (item.cost / max) * 100
                    return (
                        <div key={item.name} className="flex flex-col items-center justify-end flex-1">
                            <div
                                style={{ height: `${height}%` }}
                                className="bar w-full max-w-[60px] bg-gradient-to-br from-accentStart to-accentEnd rounded-t-md origin-bottom"
                            />
                            <div className="bar-label text-sm mt-2 text-textMuted">
                                {item.name}
                            </div>
                        </div>
                    )
                })}
            </div>

        </div>

    )

}