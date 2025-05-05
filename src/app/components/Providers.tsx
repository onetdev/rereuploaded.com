'use client'

import { HeroUIProvider, ToastProvider } from '@heroui/react'
import { PropsWithChildren } from 'react'

export function Providers({children}: PropsWithChildren) {
  return (
    <HeroUIProvider>
      <ToastProvider />
      {children}
    </HeroUIProvider>
  )
}
