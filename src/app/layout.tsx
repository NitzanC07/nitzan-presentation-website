import type { Metadata } from 'next'
import './globals.css';
import { varelaRound, inter, rubik  } from './fonts';

import { Providers } from './providers'
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { useState } from 'react';

export const metadata: Metadata = {
  title: 'Nitzan Cohen',
  description: 'Nitzan Cohen portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="he" dir='rtl' className={varelaRound.className}>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
