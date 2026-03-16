"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="inline-size-[42px] block-size-[24px]" />
    }

    return (
        <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-xs font-mono uppercase tracking-widest text-textMuted hover:text-textMain transition-colors border border-borderSubtle px-3 py-1.5 rounded-full"
        >
            {theme === "dark" ? "Light" : "Dark"}
        </button>
    )
}