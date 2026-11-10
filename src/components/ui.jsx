import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SectionHead({ scene, title, text }) {
  return (
    <div className='mb-12'>
      <Reveal>
        <p className='font-mono text-xs tracking-[0.3em] text-blood-400'>{scene}</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className='mt-2 font-title text-5xl tracking-wide text-white sm:text-6xl'>{title}</h2>
      </Reveal>
      {text && (
        <Reveal delay={0.1}>
          <p className='mt-3 max-w-xl text-slate-400'>{text}</p>
        </Reveal>
      )}
    </div>
  )
}