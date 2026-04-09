import { useState, useEffect, useCallback } from 'react'
import { theme } from './theme'

export function useSlideScale() {
  const calc = useCallback(() => {
    const sx = window.innerWidth / theme.slide.width
    const sy = window.innerHeight / theme.slide.height
    // Scale to fit viewport — preserve 16:9 aspect ratio, allow upscaling on large screens
    return Math.min(sx, sy)
  }, [])

  const [scale, setScale] = useState(calc)

  useEffect(() => {
    const onResize = () => setScale(calc())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [calc])

  return scale
}
