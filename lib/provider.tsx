"use client"

import { ThemeProvider } from 'next-themes'

function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute='class' enableSystem={true}>
      {children}
    </ThemeProvider>
  )
}

export default Providers