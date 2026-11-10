import { ArrowLeft, Download, ExternalLink } from 'lucide-react'
import { ABOUT, EMAIL, GITHUB, LINKEDIN, LOCATION, NAME, RESUME_URL, ROLE, TRYHACKME } from '../config'
import { CERTS, EDUCATION, EVIDENCE, PROJECTS } from '../content'

const pill =
  'inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm text-slate-200 transition hover:border-white/40 hover:text-white'

const heading = 'mt-14 font-title text-3xl tracking-wide text-white'

export default function QuickView({ onBack }) {
  return (
    <div className='min-h-screen bg-ink-950 px-6 py-12 text-slate-300'>
      <div className='mx-auto max-w-3xl'>
        <button
          type='button'
          onClick={onBack}
          className='mb-10 inline-flex items-center gap-2 font-mono text-xs tracking-widest text-slate-400 transition hover:text-white'
        >
          <ArrowLeft size={14} /> BACK TO THE CASE
        </button>

        <h1 className='font-title text-6xl tracking-wide text-white'>{NAME}</h1>
        <p className='mt-1 text-lg text-blood-400'>{ROLE}</p>
        <p className='mt-1 text-sm text-slate-500'>{LOCATION}</p>
        <p className='mt-5 leading-relaxed'>{ABOUT}</p>

        <div className='mt-6 flex flex-wrap gap-3'>
          <a href={'mailto:' + EMAIL} className={pill}>{EMAIL}</a>
          <a href={GITHUB} target='_blank' rel='noreferrer' className={pill}><ExternalLink size={14} /> GitHub</a>
          {LINKEDIN && (
            <a href={LINKEDIN} target='_blank' rel='noreferrer' className={pill}><ExternalLink size={14} /> LinkedIn</a>
          )}
          <a href={TRYHACKME} target='_blank' rel='noreferrer' className={pill}><ExternalLink size={14} /> TryHackMe</a>
          <a href={RESUME_URL} download className={pill}><Download size={14} /> Resume</a>
        </div>

        <h2 className={heading}>Skills</h2>
        <div className='mt-4 grid gap-4 sm:grid-cols-2'>
          {EVIDENCE.map((group) => (
            <div key={group.id} className='rounded-xl border border-white/10 p-4'>
              <h3 className='font-mono text-xs tracking-widest text-blood-400'>{group.title}</h3>
              <p className='mt-2 text-sm'>{group.items.join(', ')}</p>
            </div>
          ))}
        </div>

        <h2 className={heading}>Projects</h2>
        <div className='mt-4 space-y-4'>
          {PROJECTS.map((p) => (
            <article key={p.id} className='rounded-xl border border-white/10 p-5'>
              <h3 className='text-lg font-semibold text-white'>{p.title}</h3>
              <p className='mt-2 text-sm'>{p.summary}</p>
              <p className='mt-3 font-mono text-xs text-slate-500'>{p.stack.join(' / ')}</p>
              <div className='mt-3 flex flex-wrap gap-3'>
                {p.links.map((link) => (
                  <a key={link.href} href={link.href} target='_blank' rel='noreferrer' className='text-sm text-blood-400 hover:underline'>
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>

        <h2 className={heading}>Education</h2>
        <div className='mt-4 space-y-3'>
          {EDUCATION.map((e) => (
            <div key={e.school} className='rounded-xl border border-white/10 p-4'>
              <h3 className='font-semibold text-white'>{e.degree}</h3>
              <p className='mt-1 text-sm'>{e.school}</p>
              <p className='mt-1 font-mono text-xs text-slate-500'>{e.score} {e.scoreLabel}. {e.detail}</p>
            </div>
          ))}
        </div>

        <h2 className={heading}>Certifications</h2>
        <ul className='mt-4 list-disc space-y-1 pl-5 text-sm'>
          {CERTS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}