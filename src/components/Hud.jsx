import { FileText, Lightbulb, LightbulbOff, Search } from 'lucide-react'
import { TOTAL, useClues } from '../ClueContext'
import { NAV } from '../config'

const chip =
  'flex items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 font-mono text-xs text-slate-300 backdrop-blur transition hover:border-white/30 hover:text-white'

export default function Hud({ lights, onLights, onQuick }) {
  const { found } = useClues()

  return (
    <header className='fixed inset-x-0 top-3 z-[87] bg-gradient-to-b from-black/70 to-transparent md:top-5'>
      <nav className='mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3' aria-label='Main'>
        <a href='#top' className='font-title text-xl tracking-[0.2em] text-white'>
          CASE <span className='text-blood-500'>001</span>
        </a>
        <ul className='hidden items-center gap-6 font-mono text-xs tracking-widest text-slate-300 xl:flex'>
          {NAV.map((item) => (
            <li key={item.href}>
              <a href={item.href} className='transition hover:text-blood-400'>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className='flex items-center gap-2'>
          <span className={chip} title='Hidden clues found'>
            <Search size={13} className='text-blood-400' /> {found.length}/{TOTAL}
          </span>
          <button type='button' onClick={onLights} aria-pressed={lights} className={chip}>
            {lights ? <Lightbulb size={14} /> : <LightbulbOff size={14} />}
            <span className='hidden sm:inline'>LIGHTS {lights ? 'ON' : 'OFF'}</span>
          </button>
          <button type='button' onClick={onQuick} className={chip}>
            <FileText size={14} />
            <span className='hidden sm:inline'>QUICK VIEW</span>
          </button>
        </div>
      </nav>
    </header>
  )
}