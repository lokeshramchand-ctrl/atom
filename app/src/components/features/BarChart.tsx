export default function BarChart() {

    const data = [
        { name: "Cluster A", cost: 9000 },
        { name: "Cluster B", cost: 7000 },
        { name: "Cluster C", cost: 6000 },
        { name: "Cluster D", cost: 8000 }
    ]

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
                                className="w-full max-w-[60px] bg-gradient-to-br from-accentStart to-accentEnd rounded-t-md"
                            />
                            <div className="text-sm mt-2 text-textMuted">
                                {item.name}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
