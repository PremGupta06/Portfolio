import { motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { CERTS, EDUCATION } from '../content'
import Reveal, { SectionHead } from './ui'

export default function Credentials() {
  return (
    <section id='records' className='mx-auto max-w-6xl scroll-mt-24 px-6 py-28'>
      <SectionHead scene='SCENE 05 // THE RECORDS' title='SERVICE RECORD' text='Education and certifications on file.' />

      <div className='grid gap-12 lg:grid-cols-2'>
        <div className='space-y-6'>
          <Reveal>
            <p className='font-mono text-xs tracking-[0.3em] text-noir'>EDUCATION</p>
          </Reveal>
          {EDUCATION.map((e, i) => (
            <Reveal key={e.school} delay={i * 0.1}>
              <div className='relative bg-paper p-6 text-ink-950 shadow-2xl'>
                <span className='absolute -top-2 left-6 h-4 w-4 rounded-full bg-blood-500 shadow-[0_2px_6px_rgba(0,0,0,0.6)]' />
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <h3 className='font-title text-3xl leading-none'>{e.degree}</h3>
                    <p className='mt-2 font-type text-sm'>{e.school}</p>
                    <p className='mt-1 font-type text-sm text-ink-950/70'>{e.detail}</p>
                  </div>
                  <div className='shrink-0 text-right'>
                    <p className='font-title text-5xl leading-none text-blood-600'>{e.score}</p>
                    <p className='mt-1 font-mono text-[10px] tracking-widest'>{e.scoreLabel}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div>
          <Reveal>
            <p className='font-mono text-xs tracking-[0.3em] text-noir'>CERTIFICATIONS</p>
          </Reveal>
          <ul className='mt-6 space-y-3'>
            {CERTS.map((cert, i) => (
              <li key={cert}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ x: 6 }}
                  className='flex items-center gap-4 border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-blood-500/50'
                >
                  <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blood-500/50 bg-blood-500/10 text-blood-400'>
                    <Award size={18} />
                  </span>
                  <span className='font-type text-sm text-paper'>{cert}</span>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}