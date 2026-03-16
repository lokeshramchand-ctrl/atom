export default function Tables({ data }: { data: any[] }) {
    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead>
                    <tr className="anim-th">
                        {['Cluster', 'CPU', 'RAM', 'Storage', 'Network', 'GPU', 'Efficiency', 'Total'].map((header, i) => (
                            <th 
                                key={header} 
                                className={`text-[10px] uppercase tracking-widest text-white/40 pb-4 px-4 border-b border-white/10 font-normal ${i > 0 ? 'text-right' : ''}`}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-sm">
                    {data.map((d) => (
                        <tr 
                            key={d.name} 
                            className="anim-tr group border-b border-white/5 hover:bg-white/[0.02] transition-colors"
                        >
                            <td className="py-4 px-4 font-medium text-white transition-colors">
                                {d.name}
                            </td>
                            <td className="py-4 px-4 text-right font-mono tabular-nums text-white/50 group-hover:text-white transition-colors">
                                ${Math.round(d.cost * 0.35).toLocaleString()}
                            </td>
                            <td className="py-4 px-4 text-right font-mono tabular-nums text-white/50 group-hover:text-white transition-colors">
                                ${Math.round(d.cost * 0.22).toLocaleString()}
                            </td>
                            <td className="py-4 px-4 text-right font-mono tabular-nums text-white/50 group-hover:text-white transition-colors">
                                ${Math.round(d.cost * 0.08).toLocaleString()}
                            </td>
                            <td className="py-4 px-4 text-right font-mono tabular-nums text-white/50 group-hover:text-white transition-colors">
                                ${Math.round(d.cost * 0.12).toLocaleString()}
                            </td>
                            <td className="py-4 px-4 text-right font-mono tabular-nums text-white/50 group-hover:text-white transition-colors">
                                ${Math.round(d.cost * 0.15).toLocaleString()}
                            </td>
                            <td className="py-4 px-4 text-right font-mono tabular-nums text-white/70 group-hover:text-white transition-colors">
                                <div className="flex items-center justify-end gap-2">
                                    <span className={`w-1.5 h-1.5 rounded-full ${d.efficiency > 90 ? 'bg-white' : 'bg-white/20'}`} />
                                    {d.efficiency}%
                                </div>
                            </td>
                            <td className="py-4 px-4 text-right font-mono tabular-nums font-semibold text-white tracking-tight">
                                ${d.cost.toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}