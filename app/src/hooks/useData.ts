import { useQuery } from "@tanstack/react-query"

type ClusterRow = {
    name: string
    cost: number
    efficiency: number
}

async function fetchClusterData(): Promise<ClusterRow[]> {
    const res = await fetch("https://dummyjson.com/products?limit=4")
    if (!res.ok) throw new Error("Fetch failed")
    const json = await res.json()
    return json.products.map((p: any, i: number) => ({
        name: `Cluster ${String.fromCharCode(65 + i)}`,
        cost: Math.round(p.price * 50),
        efficiency: Math.floor(Math.random() * 15) + 85,
    }))
}

export function useDashData() {
    const { data = [], isLoading: loading, error } = useQuery<ClusterRow[]>({
        queryKey: ["cluster-data"],
        queryFn: fetchClusterData,
    })

    return { data, loading, error }
}