export default function Tables() {

    const data = [
        { name: "Cluster A", cost: 9000, efficiency: 94 },
        { name: "Cluster B", cost: 7000, efficiency: 88 },
        { name: "Cluster C", cost: 6000, efficiency: 96 },
        { name: "Cluster D", cost: 8000, efficiency: 90 }
    ]
    return (
        <table className="w-full text-left">
            <thead>
                <tr className="text-textMuted text-xs uppercase">
                    <th>Cluster</th>
                    <th>Total</th>
                    <th>Efficiency</th>
                </tr>
            </thead>
            <tbody>
                {data.map(d => (
                    <tr key={d.name} className="border-b border-white/5">
                        <td className="py-3">{d.name}</td>
                        <td>${d.cost}</td>
                        <td>{d.efficiency}%</td>
                    </tr>
                ))}
            </tbody>
        </table>

    )

}