import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Dossier from './Dossier'
import Reveal, { SectionHead } from './ui'
import { PROJECTS } from '../content'

export default function Cases() {
  const [open, setOpen] = useState(null)

  return (
    <section id='cases' className='mx-auto max-w-6xl scroll-mt-24 px-6 py-28'>
      <SectionHead
        scene='SCENE 03 // THE CASE FILES'
        title='CLASSIFIED PROJECTS'
        text='Open a folder to read the dossier. Some details are redacted: hover or tap them to declassify.'
      />
      <div className='grid gap-8 md:grid-cols-2'>
        {PROJECTS.map((p, i) => (
          <Reveal key={p.id} delay={(i % 2) * 0.1}>
            <button type='button' onClick={() => setOpen(p)} className='group relative block w-full text-left'>
              <span className='absolute -top-3 left-5 h-4 w-24 rounded-t-md bg-paper-dark' />
              <span className='relative block min-h-64 rounded-xl rounded-tl-none bg-paper p-5 text-ink-950 shadow-2xl transition duration-300 group-hover:-translate-y-2 group-hover:-rotate-1 group-hover:shadow-blood-500/30'>
                <span className='flex items-start justify-between'>
                  <span className='font-mono text-xs tracking-widest'>CASE {p.number}</span>
                  <span className='stamp text-sm text-blood-600'>{p.status}</span>
                </span>
                <span className='mt-4 block font-title text-4xl leading-none'>{p.codename}</span>
                <span className='mt-1 block font-mono text-xs text-ink-950/70'>{p.title}</span>
                <span className='mt-3 block font-type text-sm'>{p.summary}</span>
                <span className='mt-5 flex items-center gap-1 font-mono text-xs text-blood-600'>
                  OPEN FILE <ArrowRight size={13} />
                </span>
              </span>
            </button>
          </Reveal>
        ))}
      </div>
      <Dossier project={open} onClose={() => setOpen(null)} />
    </section>
  )
}