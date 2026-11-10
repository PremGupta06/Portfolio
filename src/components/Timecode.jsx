import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'

const pad = (n) => String(n).padStart(2, '0')

export default function Timecode() {
  const { scrollYProgress } = useScroll()
  const [tc, setTc] = useState('00:00:00')

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const total = Math.round(v * 5400)
    setTc(pad(Math.floor(total / 3600)) + ':' + pad(Math.floor((total % 3600) / 60)) + ':' + pad(total % 60))
  })

  return (
    <>
      <motion.div
        aria-hidden='true'
        style={{ scaleX: scrollYProgress }}
        className='fixed inset-x-0 top-3 z-[89] h-0.5 origin-left bg-blood-500 md:top-5'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none fixed bottom-6 left-5 z-[89] hidden items-center gap-2 font-mono text-[11px] tracking-widest text-slate-400 md:flex'
      >
        <span className='h-2 w-2 animate-rec rounded-full bg-blood-500' /> REC {tc}
      </div>
    </>
  )
}