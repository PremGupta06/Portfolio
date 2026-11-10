import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { NAME } from '../config'

const LINES = [
  '> BOOTING CASE-FILE TERMINAL v1.0',
  '> CONNECTING TO SECURE ARCHIVE ... OK',
  '> DECRYPTING SUBJECT RECORD ... OK',
  '> CLEARANCE: VISITOR (LEVEL 1)',
  '> NEW CASE ASSIGNED.',
]

export default function Intro({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 9000)
    return () => clearTimeout(timer)
  }, [onDone])

  return (
    <motion.div
      className='fixed inset-0 z-[84] flex flex-col items-center justify-center bg-ink-950 px-6'
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.7 }}
    >
      <div className='w-full max-w-xl font-mono text-xs text-neon sm:text-sm'>
        {LINES.map((line, i) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.55 }}
            className='mb-1'
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 3.4, duration: 0.8 }}
        className='mt-10 text-center'
      >
        <p className='font-title text-6xl tracking-[0.25em] text-blood-500 sm:text-8xl'>CASE FILE 001</p>
        <p className='mt-2 font-type text-lg text-paper'>Subject: {NAME}</p>
        <button
          type='button'
          onClick={onDone}
          className='mt-8 rounded-full border border-blood-500/60 bg-blood-500/10 px-8 py-3 font-mono text-sm tracking-widest text-white transition hover:bg-blood-500/30'
        >
          OPEN THE FILE
        </button>
      </motion.div>

      <button
        type='button'
        onClick={onDone}
        className='absolute bottom-10 right-6 font-mono text-xs tracking-widest text-slate-500 transition hover:text-white'
      >
        SKIP INTRO
      </button>
    </motion.div>
  )
}