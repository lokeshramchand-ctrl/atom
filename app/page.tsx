import IndexMain from "./index"

export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] selection:bg-white/20 selection:text-white">
            <IndexMain />
        </main>
    )
}