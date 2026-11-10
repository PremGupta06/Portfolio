import { useEffect, useRef } from 'react'

export default function Rain() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let w = 0
    let h = 0
    let frame = 0
    const drops = []

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    resize()
    for (let i = 0; i < 140; i++) {
      drops.push({ x: Math.random() * w, y: Math.random() * h, len: 10 + Math.random() * 18, speed: 9 + Math.random() * 9 })
    }

    const draw = () => {
      ctx.clearRect(0, 0, w, h)
      ctx.strokeStyle = 'rgba(160, 190, 230, 0.22)'
      ctx.lineWidth = 1
      ctx.beginPath()
      for (const d of drops) {
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(d.x - 2, d.y + d.len)
        d.y += d.speed
        if (d.y > h) {
          d.y = -d.len
          d.x = Math.random() * w
        }
      }
      ctx.stroke()
      if (!still) frame = requestAnimationFrame(draw)
    }
    draw()

    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} aria-hidden='true' className='absolute inset-0 h-full w-full' />
}