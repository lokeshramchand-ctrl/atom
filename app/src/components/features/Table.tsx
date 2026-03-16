export default function Tables({ data }: { data: any[] }) {
    return (
        <div className="table-wrapper w-full overflow-x-auto">
            <table className="w-full text-left border-collapse whitespace-nowrap">
                <caption className="sr-only">Cluster cost breakdown by infrastructure category and efficiency.</caption>
                <thead>
                    <tr className="anim-th">
                        {['Cluster', 'CPU', 'RAM', 'Storage', 'Network', 'GPU', 'Efficiency', 'Total'].map((header, i) => (
                            <th 
                                key={header} 
                                scope="col"
                                className={`pb-4 px-4 border-b border-[var(--border-subtle)] text-[10px] font-normal uppercase tracking-widest text-[color:var(--text-muted)] ${i > 0 ? 'text-right' : ''}`}
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
                            className="anim-tr group border-b border-[var(--border-subtle)] hover:bg-[var(--hover-bg)] transition-colors"
                        >
                            <td className="py-4 px-4 font-medium text-[color:var(--text-main)] transition-colors">
                                {d.name}
                            </td>
                            <td className="py-4 px-4 text-right font-mono tabular-nums text-[color:var(--text-muted)] group-hover:text-[color:var(--text-main)] transition-colors">
                                ${Math.round(d.cost * 0.35).toLocaleString()}
                            </td>
                            <td className="py-4 px-4 text-right font-mono tabular-nums text-[color:var(--text-muted)] group-hover:text-[color:var(--text-main)] transition-colors">
                                ${Math.round(d.cost * 0.22).toLocaleString()}
                            </td>
                            <td className="py-4 px-4 text-right font-mono tabular-nums text-[color:var(--text-muted)] group-hover:text-[color:var(--text-main)] transition-colors">
                                ${Math.round(d.cost * 0.08).toLocaleString()}
                            </td>
                            <td className="py-4 px-4 text-right font-mono tabular-nums text-[color:var(--text-muted)] group-hover:text-[color:var(--text-main)] transition-colors">
                                ${Math.round(d.cost * 0.12).toLocaleString()}
                            </td>
                            <td className="py-4 px-4 text-right font-mono tabular-nums text-[color:var(--text-muted)] group-hover:text-[color:var(--text-main)] transition-colors">
                                ${Math.round(d.cost * 0.15).toLocaleString()}
                            </td>
                            <td className="py-4 px-4 text-right font-mono tabular-nums text-[color:var(--text-muted)] group-hover:text-[color:var(--text-main)] transition-colors">
                                <div className="flex items-center justify-end gap-2">
                                    <span className={`h-1.5 w-1.5 rounded-full ${d.efficiency > 90 ? 'bg-[var(--text-main)]' : 'bg-[var(--text-muted)] opacity-60'}`} />
                                    {d.efficiency}%
                                </div>
                            </td>
                            <td className="py-4 px-4 text-right font-mono tabular-nums font-semibold tracking-tight text-[color:var(--text-main)]">
                                ${d.cost.toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}