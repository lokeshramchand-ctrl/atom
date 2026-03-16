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
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            className="text-xs font-mono uppercase tracking-widest text-textMuted hover:text-textMain transition-colors border border-borderSubtle px-3 py-1.5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-textMain focus-visible:ring-offset-2 focus-visible:ring-offset-bgPrimary"
        >
            {theme === "dark" ? "Light" : "Dark"}
        </button>
    )
}