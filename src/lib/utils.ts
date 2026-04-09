/** Responsive font-size clamp utility */
export function clamp(min: number, max: number) {
  return `clamp(${min}px, ${min + (max - min) * 0.5}px + 1vw, ${max}px)`
}
