'use client'

import { useScrollTracking } from '@/app/hooks/use-scroll-tracking'
import { ReactNode } from 'react'

interface ScrollTrackerProps {
  children: ReactNode
  thresholds?: number[]
  debounceMs?: number
}

export const ScrollTracker = ({ children, thresholds = [25, 50, 75, 100], debounceMs = 500 }: ScrollTrackerProps) => {
  useScrollTracking({
    thresholds,
    debounceMs
  })

  return <>{children}</>
}
