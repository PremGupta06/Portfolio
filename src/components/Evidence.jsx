import { useState } from 'react'
import { motion } from 'framer-motion'
import { Fingerprint } from 'lucide-react'
import { useClues } from '../ClueContext'
import { INITIALS, PHOTO } from '../config'
import { EVIDENCE } from '../content'
import { SectionHead } from './ui'

function Note({ node }) {
  return (
    <div className='relative w-full bg-paper p-4 text-ink-950 shadow-2xl'>
      <span className='absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-blood-500 shadow-[0_2px_6px_rgba(0,0,0,0.6)]' />
      <h3 className='font-title text-2xl leading-none tracking-wider text-blood-600'>{node.title}</h3>
      <ul className='mt-2 space-y-1 font-type text-sm'>
        {node.items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Evidence() {
  const [active, setActive] = useState(null)
  const { find } = useClues()

  return (
    <section id='evidence' className='relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28'>
      <SectionHead
        scene='SCENE 02 // THE EVIDENCE'
        title='WHAT WE KNOW'
        text='Everything on this board leads back to one subject. Hover a note to trace the string.'
      />

      <div className='board relative hidden h-[760px] overflow-hidden rounded-3xl border border-white/10 md:block'>
        <svg className='absolute inset-0 h-full w-full' viewBox='0 0 100 100' preserveAspectRatio='none' aria-hidden='true'>
          {EVIDENCE.map((n, i) => (
            <motion.path
              key={n.id}
              d={'M 50 50 Q ' + (50 + (n.x - 50) * 0.5) + ' ' + (n.y + 10) + ' ' + n.x + ' ' + n.y}
              fill='none'
              stroke={active === n.id ? '#ff4d5e' : '#b4121f'}
              strokeWidth={active === n.id ? 3 : 1.6}
              vectorEffect='non-scaling-stroke'
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.3 + i * 0.15 }}
              style={{ filter: 'drop-shadow(0 0 4px rgba(225,29,46,0.7))' }}
            />
          ))}
        </svg>

        <div className='absolute left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2 -rotate-2 bg-paper p-2 pb-5 shadow-2xl'>
          <span className='absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-blood-500' />
          {PHOTO ? (
            <img src={PHOTO} alt='The subject' className='h-40 w-full object-cover grayscale' />
          ) : (
            <div className='flex h-40 items-center justify-center bg-ink-800 font-title text-7xl text-blood-500'>{INITIALS}</div>
          )}
          <p className='mt-2 text-center font-type text-xs text-ink-950'>THE SUBJECT</p>
        </div>

        {EVIDENCE.map((n) => (
          <motion.div
            key={n.id}
            onMouseEnter={() => setActive(n.id)}
            onMouseLeave={() => setActive(null)}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.06, rotate: 0 }}
            style={{ left: n.x + '%', top: n.y + '%', rotate: n.rot }}
            className='absolute w-52 -translate-x-1/2 -translate-y-1/2'
          >
            <Note node={n} />
          </motion.div>
        ))}
      </div>

      <div className='grid gap-6 sm:grid-cols-2 md:hidden'>
        <div className='flex h-36 items-center justify-center bg-paper font-title text-7xl text-blood-500 sm:col-span-2'>{INITIALS}</div>
        {EVIDENCE.map((n) => (
          <Note key={n.id} node={n} />
        ))}
      </div>

      <button
        type='button'
        aria-label='Inspect the smudge'
        onClick={() => find('print', 'A fingerprint on the evidence board')}
        className='absolute bottom-12 right-8 text-white/10 transition hover:text-blood-400'
      >
        <Fingerprint size={30} />
      </button>
    </section>
  )
}