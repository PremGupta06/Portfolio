import { NAME } from '../config'

const GROUPS = [
  { role: 'STARRING', names: [NAME] },
  { role: 'WRITTEN, DIRECTED AND CODED BY', names: [NAME] },
  { role: 'FEATURING', names: ['SOC Alert Simulator', 'SOC Home Lab', 'Multi-Stage Attack Lab', 'Argus API Scanner'] },
  { role: 'BUILT WITH', names: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'] },
  { role: 'SPECIAL THANKS', names: ['Coffee', 'Every alert that taught me something'] },
]

const fade = 'linear-gradient(transparent, black 20%, black 80%, transparent)'

export default function Credits() {
  return (
    <section className='relative border-t border-white/10 py-24'>
      <p className='mb-8 text-center font-mono text-xs tracking-[0.4em] text-blood-400'>END CREDITS</p>
      <div className='relative mx-auto h-96 max-w-2xl overflow-hidden' style={{ maskImage: fade, WebkitMaskImage: fade }}>
        <div className='absolute inset-x-0 top-full animate-credits text-center hover:[animation-play-state:paused]'>
          {GROUPS.map((group) => (
            <div key={group.role} className='mb-14'>
              <p className='font-mono text-xs tracking-[0.3em] text-noir'>{group.role}</p>
              {group.names.map((name) => (
                <p key={name} className='mt-2 font-title text-3xl tracking-widest text-white'>{name}</p>
              ))}
            </div>
          ))}
          <p className='font-title text-5xl tracking-widest text-blood-500'>THE END</p>
        </div>
      </div>
      <p className='mt-10 text-center font-mono text-[11px] text-slate-600'>
        &copy; {new Date().getFullYear()} {NAME}. All rights reserved.
      </p>
    </section>
  )
}