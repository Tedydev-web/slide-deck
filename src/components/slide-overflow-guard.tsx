import { useLayoutEffect, useRef, useState, type ReactNode } from 'react'

interface AutoFitFrameProps {
  width: number
  height: number
  children: ReactNode
}

/**
 * Measures inner content height and auto-scales down uniformly if it exceeds
 * the slide box. Never scales up.
 *
 * Why scale instead of clip: slides present at fixed 1280×720 and this deck
 * is content-heavy. Manually tuning every slide is fragile. Uniform scaling
 * preserves layout intent while guaranteeing 1:1 framing.
 *
 * Uses `transform-origin: top center` so scaled content stays horizontally
 * centered within the unchanged slide frame.
 *
 * The inner wrapper uses at least the slide height and vertical flex centering
 * so (1) short slides sit visually centered, and (2) `height: 100%` inside
 * slide roots resolves against a real 1280×720 box.
 */
export function AutoFitFrame({ width, height, children }: AutoFitFrameProps) {
  const innerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useLayoutEffect(() => {
    const el = innerRef.current
    if (!el) return

    const measure = () => {
      // scrollHeight captures full natural height even when parent clips
      const h = el.scrollHeight
      setScale(h > height ? height / h : 1)
    }

    measure()

    // Re-measure on any layout shift (images, fonts, charts resizing)
    const ro = new ResizeObserver(measure)
    ro.observe(el)

    // Korean/Vietnamese web fonts can shift layout after initial render
    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(measure).catch(() => {})
    }

    return () => ro.disconnect()
  }, [height])

  const isScaled = scale < 1

  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div
        ref={innerRef}
        style={{
          width,
          minHeight: height,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          boxSizing: 'border-box',
          transformOrigin: 'top center',
          transform: isScaled ? `scale(${scale})` : undefined
        }}
      >
        {children}
      </div>
    </div>
  )
}
