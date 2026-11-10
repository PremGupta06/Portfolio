import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import Rain from './Rain'
import { useTyper } from '../hooks'
import { NAME, RESUME_URL, ROLE, TAGLINES } from '../config'

const blinds = 'linear-gradient(115deg, black 0%, transparent 55%)'

export default function Hero() {
  const ref = useRef(null)
  const typed = useTyper(TAGLINES)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 180])
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0])
  const drift = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <section id='top' ref={ref} className='relative flex min-h-screen items-center overflow-hidden'>
      <div
        className='absolute inset-0'
        style={{ background: 'radial-gradient(ellipse at 75% 15%, rgba(225,29,46,0.25), transparent 55%), radial-gradient(ellipse at 10% 95%, rgba(34,211,238,0.12), transparent 50%)' }}
      />
      <motion.div
        aria-hidden='true'
        className='absolute -inset-x-10 -top-20 h-[130%]'
        style={{
          y: drift,
          backgroundImage: 'repeating-linear-gradient(172deg, rgba(255,190,110,0.12) 0, rgba(255,190,110,0.12) 28px, transparent 28px, transparent 64px)',
          maskImage: blinds,
          WebkitMaskImage: blinds,
        }}
      />
      <Rain />

      <motion.div style={{ y, opacity: fade }} className='relative mx-auto w-full max-w-6xl px-6 pt-24'>
        <p className='animate-flicker font-mono text-xs tracking-[0.35em] text-blood-400 sm:text-sm'>
          CASE FILE 001 // SUBJECT PROFILE
        </p>
        <h1
          data-text={NAME.toUpperCase()}
          className='glitch mt-4 font-title text-[19vw] leading-[0.85] tracking-wide text-white sm:text-[14vw] lg:text-[9.5rem]'
        >
          {NAME.toUpperCase()}
        </h1>
        <p className='mt-5 font-type text-lg text-noir sm:text-2xl'>{ROLE}</p>
        <p className='mt-4 h-7 font-mono text-sm text-neon sm:text-base'>
          &gt; {typed}
          <span className='animate-blink'>_</span>
        </p>
        <div className='mt-10 flex flex-wrap gap-4'>
          <a
            href='#evidence'
            className='rounded-full bg-blood-500 px-7 py-3 font-mono text-sm tracking-widest text-white shadow-lg shadow-blood-500/30 transition hover:bg-blood-400'
          >
            START INVESTIGATION
          </a>
          <a
            href={RESUME_URL}
            download
            className='inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 font-mono text-sm tracking-widest text-slate-200 transition hover:border-white/50 hover:text-white'
          >
            <Download size={15} /> RESUME
          </a>
        </div>
      </motion.div>

      <div className='absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[10px] tracking-[0.4em] text-slate-500'>
        SCROLL TO INVESTIGATE
        <ArrowDown size={14} className='animate-bounce' />
      </div>
    </section>
  )
}