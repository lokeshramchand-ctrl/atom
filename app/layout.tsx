import './globals.css'
import type { Metadata } from 'next'
import { ThemeProvider } from './src/components/providers/ThemeProvider'
import { QueryProvider } from './src/components/providers/QueryProvider'
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
                <QueryProvider>
                    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                        {children}
                    </ThemeProvider>
                </QueryProvider>
            </body>
        </html>
    )
}