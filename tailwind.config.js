/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "var(--color-bg-primary)",
        bgCard: "var(--color-bg-card)",
        borderCard: "var(--color-border-card)",
        accentStart: "var(--color-accent-start)",
        accentEnd: "var(--color-accent-end)",
        textMain: "var(--color-text-main)",
        textMuted: "var(--color-text-muted)"
      }
    }
  },
  plugins: [],
}