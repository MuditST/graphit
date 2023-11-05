import { Inter } from 'next/font/google'
import './globals.css'
import { ClerkProvider, SignedIn, auth } from '@clerk/nextjs'
import { ModalProvider } from '../components/ModalProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Graph It',
  description: 'Bring Your Graphs To Life',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <SignedIn>{console.log(auth().userId)}</SignedIn>
    <html lang="en">
      
      <body className={inter.className}>
        <ModalProvider />
        {children}</body>
    </html></ClerkProvider>
  )
}
