import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView } from 'framer-motion'
import { ExternalLink, Flame, Gauge, Medal, Target, Trophy } from 'lucide-react'
import { THM_BADGE, THM_DONE, THM_STATS, TRYHACKME, TRYHACKME_USER } from '../config'
import Reveal, { SectionHead } from './ui'

function Value({ value }) {
  const [n, setN] = useState(0)
  const isNumber = typeof value === 'number'

  useEffect(() => {
    if (!isNumber) return
    const controls = animate(0, value, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (v) => setN(Math.round(v)),
    })
    return () => controls.stop()
  }, [isNumber, value])

  return <>{isNumber ? n : value}</>
}

function Tile({ icon: Icon, label, value, index }) {
  const ref = useRef(null)
  const seen = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -4 }}
      className='border border-white/10 bg-white/[0.03] p-5'
    >
      <Icon size={18} className='text-blood-400' />
      <p className='mt-3 font-title text-5xl leading-none text-white'>{seen ? <Value value={value} /> : 0}</p>
      <p className='mt-2 font-mono text-[11px] tracking-widest text-slate-500'>{label}</p>
    </motion.div>
  )
}

export default function TryHackMe() {
  const [badgeOk, setBadgeOk] = useState(true)
  const tiles = [
    { icon: Trophy, label: 'RANK', value: THM_STATS.rank },
    { icon: Gauge, label: 'LEVEL', value: THM_STATS.level },
    { icon: Target, label: 'ROOMS COMPLETED', value: THM_STATS.rooms },
    { icon: Medal, label: 'BADGES', value: THM_STATS.badges },
    { icon: Flame, label: 'DAY STREAK', value: THM_STATS.streak },
  ].filter((t) => t.value !== null && t.value !== '')

  return (
    <section id='training' className='mx-auto max-w-6xl scroll-mt-24 px-6 py-28'>
      <SectionHead
        scene='SCENE 06 // THE TRAINING GROUNDS'
        title='FIELD TRAINING'
        text='Hands-on practice on TryHackMe: real labs, real attack paths, real habits.'
      />

      <Reveal>
        <div className='relative overflow-hidden border border-blood-500/30 bg-ink-900 p-6 sm:p-10'>
          <div className='pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blood-500/15 blur-3xl' />
          <motion.div
            aria-hidden='true'
            className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-blood-500/10 to-transparent'
            animate={{ x: ['-100%', '400%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
          />

          <div className='relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]'>
            <div>
              <p className='font-mono text-xs tracking-[0.3em] text-neon'>AGENT HANDLE</p>
              <h3 className='mt-2 font-title text-6xl tracking-wide text-white sm:text-7xl'>{TRYHACKME_USER}</h3>
              <p className='mt-1 font-type text-sm text-paper'>TryHackMe operative. Learning offence to defend better.</p>
              <a
                href={TRYHACKME}
                target='_blank'
                rel='noreferrer'
                className='mt-6 inline-flex items-center gap-2 bg-blood-500 px-7 py-3 font-mono text-sm tracking-widest text-white shadow-lg shadow-blood-500/30 transition hover:bg-blood-400'
              >
                OPEN TRYHACKME PROFILE <ExternalLink size={15} />
              </a>
            </div>
            {THM_BADGE && badgeOk && (
              <img
                src={THM_BADGE}
                alt='TryHackMe profile badge'
                onError={() => setBadgeOk(false)}
                className='mx-auto w-full max-w-sm border border-white/10'
              />
            )}
          </div>

          {tiles.length > 0 && (
            <div className='relative mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5'>
              {tiles.map((t, i) => (
                <Tile key={t.label} icon={t.icon} label={t.label} value={t.value} index={i} />
              ))}
            </div>
          )}

          {THM_DONE.length > 0 && (
            <div className='relative mt-8'>
              <p className='font-mono text-xs tracking-[0.3em] text-noir'>COMPLETED</p>
              <div className='mt-3 flex flex-wrap gap-2'>
                {THM_DONE.map((item) => (
                  <span key={item} className='border border-white/15 px-3 py-1 font-mono text-xs text-slate-300'>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  )
}