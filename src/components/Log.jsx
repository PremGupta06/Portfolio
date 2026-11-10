import { motion } from 'framer-motion'
import { SectionHead } from './ui'
import { LOG } from '../content'

export default function Log() {
  return (
    <section id='log' className='mx-auto max-w-4xl scroll-mt-24 px-6 py-28'>
      <SectionHead scene='SCENE 04 // SURVEILLANCE LOG' title='THE TIMELINE' text='Recovered footage of the subject, in order.' />
      <div className='overflow-hidden rounded-2xl border border-white/10 bg-ink-900'>
        <div className='flex items-center justify-between border-b border-white/10 px-5 py-3 font-mono text-xs tracking-widest text-slate-400'>
          <span>CAM 04 // ARCHIVE</span>
          <span className='flex items-center gap-2'>
            <span className='h-2 w-2 animate-rec rounded-full bg-blood-500' /> REC
          </span>
        </div>
        <ol className='relative px-5 py-8 sm:px-8'>
          <span className='absolute bottom-8 left-[26px] top-8 w-px bg-gradient-to-b from-blood-500 via-blood-500/40 to-transparent sm:left-[38px]' />
          {LOG.map((entry) => (
            <motion.li
              key={entry.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className='relative mb-9 pl-10 last:mb-0'
            >
              <span className='absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-blood-500 bg-ink-900' />
              <p className='font-mono text-xs tracking-widest text-noir'>{entry.date}</p>
              <h3 className='mt-1 font-title text-2xl tracking-wide text-white'>{entry.title}</h3>
              <p className='mt-1 text-sm text-slate-400'>{entry.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}