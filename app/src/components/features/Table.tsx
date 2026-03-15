export default function Tables({ data }: { data: any[] }) {

    return (

        <table className="w-full text-left">

            <thead>

                <tr className="text-xs uppercase text-textMuted">

                    <th>Cluster</th>
                    <th>CPU</th>
                    <th>RAM</th>
                    <th>Storage</th>
                    <th>Network</th>
                    <th>GPU</th>
                    <th>Efficiency</th>
                    <th>Total</th>

                </tr>

            </thead>

            <tbody>

                {data.map((d) => (
                    <tr key={d.name} className="border-b border-white/5">

                        <td className="py-4 font-semibold">{d.name}</td>

                        <td>${Math.round(d.cost * 0.35)}</td>
                        <td>${Math.round(d.cost * 0.22)}</td>
                        <td>${Math.round(d.cost * 0.08)}</td>
                        <td>${Math.round(d.cost * 0.12)}</td>
                        <td>${Math.round(d.cost * 0.15)}</td>

                        <td>
                            <span className="px-3 py-1 rounded-full text-xs bg-teal-400/20 text-teal-300">
                                {d.efficiency}%
                            </span>
                        </td>

                        <td className="font-bold bg-gradient-to-r from-accentStart to-accentEnd bg-clip-text text-transparent">
                            ${d.cost}
                        </td>

                    </tr>
                ))}

            </tbody>

        </table>

    )

}