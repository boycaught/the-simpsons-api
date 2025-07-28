'use client'

import { useEffect, useRef } from 'react'
import { useWindowScroll, useDebounce } from '@uidotdev/usehooks'

interface ScrollTrackingOptions {
  thresholds?: number[]
  debounceMs?: number
}

declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: Record<string, any>) => void
    }
  }
}

export const useScrollTracking = (options: ScrollTrackingOptions = {}) => {
  const { thresholds = [25, 50, 75, 100], debounceMs = 500 } = options
  const [{ x, y }] = useWindowScroll()
  const debouncedY = useDebounce(y, debounceMs)
  const trackedThresholds = useRef<Set<number>>(new Set())

  const trackScrollEvent = (percentage: number) => {
    if (window?.umami) {
      window.umami.track(`Scroll ${percentage}%`, {
        scrollPercentage: percentage,
        scrollY: debouncedY,
        timestamp: new Date().toISOString()
      })
    }
  }

  useEffect(() => {
    if (debouncedY === null) return

    const documentHeight = document.documentElement.scrollHeight - window.innerHeight
    const scrollPercentage = documentHeight > 0 ? Math.round((debouncedY / documentHeight) * 100) : 0

    thresholds.forEach((threshold) => {
      if (scrollPercentage >= threshold && !trackedThresholds.current.has(threshold)) {
        trackedThresholds.current.add(threshold)
        trackScrollEvent(threshold)
      }
    })
  }, [debouncedY, thresholds])

  const resetTracking = () => {
    trackedThresholds.current.clear()
  }

  return {
    scrollY: y || 0,
    scrollX: x || 0,
    resetTracking
  }
}
