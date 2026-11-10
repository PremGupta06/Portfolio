import { useState } from 'react'
import { Check, Copy, Download, ExternalLink, Mail, MapPin, Send } from 'lucide-react'
import { TOTAL, useClues } from '../ClueContext'
import { BONUS, EMAIL, GITHUB, LINKEDIN, LOCATION, RESUME_URL, TRYHACKME } from '../config'
import Reveal, { SectionHead } from './ui'

const fieldClass =
  'w-full border border-white/15 bg-black/60 px-4 py-3 font-mono text-sm text-paper placeholder:text-slate-600 outline-none transition focus:border-blood-500'

const linkClass = 'flex items-center gap-3 text-slate-300 transition hover:text-blood-400'

export default function Contact() {
  const { found } = useClues()
  const solved = found.length >= TOTAL
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [copied, setCopied] = useState(false)
  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value })

  const send = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Portfolio message from ' + form.name)
    const body = encodeURIComponent(form.message) + '%0A%0A' + encodeURIComponent(form.name + ' (' + form.email + ')')
    window.location.href = 'mailto:' + EMAIL + '?subject=' + subject + '&body=' + body
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked */
    }
  }

  return (
    <section id='contact' className='relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28'>
      <SectionHead scene='SCENE 07 // THE VERDICT' title='CASE CLOSED?' text='Not quite. The subject is looking for the next case. Send a message or pick a link.' />

      <Reveal>
        <div className='grid gap-8 lg:grid-cols-[1fr_1.3fr]'>
          <div className='space-y-4 font-mono text-sm'>
            <button type='button' onClick={copy} className={linkClass}>
              {copied ? <Check size={16} className='text-emerald-400' /> : <Copy size={16} />}
              {copied ? 'COPIED' : EMAIL}
            </button>
            <p className='flex items-center gap-3 text-slate-400'>
              <MapPin size={16} /> {LOCATION}
            </p>
            <a href={GITHUB} target='_blank' rel='noreferrer' className={linkClass}>
              <ExternalLink size={16} /> GITHUB
            </a>
            {LINKEDIN && (
              <a href={LINKEDIN} target='_blank' rel='noreferrer' className={linkClass}>
                <ExternalLink size={16} /> LINKEDIN
              </a>
            )}
            <a href={TRYHACKME} target='_blank' rel='noreferrer' className={linkClass}>
              <ExternalLink size={16} /> TRYHACKME
            </a>
            <a href={RESUME_URL} download className={linkClass}>
              <Download size={16} /> RESUME (PDF)
            </a>
            {solved && (
              <p className='mt-6 border border-noir/40 bg-noir/10 p-4 font-type text-sm text-noir'>{BONUS}</p>
            )}
          </div>

          <form onSubmit={send} className='space-y-4 border border-white/10 bg-white/[0.03] p-6'>
            <p className='flex items-center gap-2 font-mono text-xs tracking-widest text-blood-400'>
              <Mail size={14} /> ENCRYPTED MESSAGE
            </p>
            <div className='grid gap-4 sm:grid-cols-2'>
              <input className={fieldClass} placeholder='Your name' aria-label='Your name' required value={form.name} onChange={set('name')} />
              <input className={fieldClass} type='email' placeholder='Your email' aria-label='Your email' required value={form.email} onChange={set('email')} />
            </div>
            <textarea className={fieldClass + ' min-h-32'} placeholder='Your message' aria-label='Your message' required value={form.message} onChange={set('message')} />
            <button
              type='submit'
              className='inline-flex items-center gap-2 bg-blood-500 px-7 py-3 font-mono text-sm tracking-widest text-white shadow-lg shadow-blood-500/30 transition hover:bg-blood-400'
            >
              <Send size={15} /> SEND
            </button>
          </form>
        </div>
      </Reveal>
    </section>
  )
}