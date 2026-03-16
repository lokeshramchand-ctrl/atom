import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from './src/components/providers/ThemeProvider'
export const metadata: Metadata = {
    title: 'Atomity',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}