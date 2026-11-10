import { useEffect, useRef, useState } from 'react'

function Grain() {
  const [url, setUrl] = useState('')

  useEffect(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 128
    canvas.height = 128
    const ctx = canvas.getContext('2d')
    const image = ctx.createImageData(128, 128)
    for (let i = 0; i < image.data.length; i += 4) {
      const v = Math.random() * 255
      image.data[i] = v
      image.data[i + 1] = v
      image.data[i + 2] = v
      image.data[i + 3] = 255
    }
    ctx.putImageData(image, 0, 0)
    setUrl(canvas.toDataURL())
  }, [])

  return (
    <div
      aria-hidden='true'
      className='pointer-events-none fixed -inset-1/2 z-[90] animate-grain opacity-[0.08] mix-blend-overlay'
      style={{ backgroundImage: url ? 'url(' + url + ')' : 'none' }}
    />
  )
}

export default function Overlay({ lights }) {
  const light = useRef(null)

  useEffect(() => {
    const move = (e) => {
      if (!light.current) return
      light.current.style.setProperty('--x', e.clientX + 'px')
      light.current.style.setProperty('--y', e.clientY + 'px')
    }
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])

  return (
    <>
      <Grain />
      <div
        aria-hidden='true'
        className='pointer-events-none fixed inset-0 z-[85]'
        style={{ background: 'radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.7) 100%)' }}
      />
      <div
        aria-hidden='true'
        className='pointer-events-none fixed inset-0 z-[86] opacity-[0.06]'
        style={{ backgroundImage: 'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 3px)' }}
      />
      {!lights && (
        <div
          ref={light}
          aria-hidden='true'
          className='pointer-events-none fixed inset-0 z-[80] hidden md:block'
          style={{ background: 'radial-gradient(circle 280px at var(--x, 50%) var(--y, 35%), transparent 0%, rgba(0,0,0,0.6) 75%)' }}
        />
      )}
      <div aria-hidden='true' className='pointer-events-none fixed inset-x-0 top-0 z-[88] h-3 bg-black md:h-5' />
      <div aria-hidden='true' className='pointer-events-none fixed inset-x-0 bottom-0 z-[88] h-3 bg-black md:h-5' />
    </>
  )
}