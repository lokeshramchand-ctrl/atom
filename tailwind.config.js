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
        bgPrimary: "var(--bg-primary)",
        bgCard: "var(--bg-card)",
        borderSubtle: "var(--border-subtle)",
        textMain: "var(--text-main)",
        textMuted: "var(--text-muted)",
        borderCard: "var(--border-subtle)",
        accentStart: "var(--chart-bar-to)",
        accentEnd: "var(--chart-top)"
      }
    }
  },
  plugins: [],
}