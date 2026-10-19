import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maycam Auto Peças | A peça certa para seguir em frente',
  description: 'Catálogo demonstrativo premium de peças e acessórios automotivos da Maycam Auto Peças.',
  generator: 'Nexora',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#111114',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
