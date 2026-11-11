import { useEffect, useRef, useState } from 'react'
import { TOTAL, useClues } from '../ClueContext'
import { ABOUT, EMAIL, GITHUB, LINKEDIN, LOCATION, ROLE, THM_DONE, THM_STATS, TRYHACKME } from '../config'
import { CERTS, EDUCATION, EVIDENCE, PROJECTS } from '../content'
import { SectionHead } from './ui'

const QUICK = ['help', 'whoami', 'skills', 'projects', 'education', 'certs', 'tryhackme', 'contact']

function answer(cmd, found) {
  switch (cmd) {
    case 'help':
      return ['Commands: whoami, skills, projects, education, certs, contact, hint, clues, clear', 'Some commands are not listed. Investigators try things.']
    case 'whoami':
      return [ROLE, ABOUT]
    case 'skills':
      return EVIDENCE.map((e) => e.title + ': ' + e.items.join(', '))
    case 'projects':
      return PROJECTS.map((p) => 'Case ' + p.number + '  ' + p.title)
    case 'education':
      return EDUCATION.map((e) => e.degree + ', ' + e.school + '. ' + e.score + ' ' + e.scoreLabel.toLowerCase() + '.')
    case 'certs':
      return CERTS.map((c) => '- ' + c)
    case 'contact': {
      const lines = ['Email: ' + EMAIL, 'Location: ' + LOCATION, 'GitHub: ' + GITHUB]
      if (LINKEDIN) lines.push('LinkedIn: ' + LINKEDIN)
      lines.push('TryHackMe: ' + TRYHACKME)
      return lines
    }
     case 'tryhackme': {
     const lines = ['TryHackMe: ' + TRYHACKME]
         for (const key of Object.keys(THM_STATS)) {
           if (THM_STATS[key] !== null && THM_STATS[key] !== '') lines.push(key + ': ' + THM_STATS[key])
         }
         if (THM_DONE.length) lines.push('Completed: ' + THM_DONE.join(', '))
         return lines
       }
    case 'hint':
      return ['1. Evidence leaves fingerprints.', '2. Some orders need more power than a visitor has.', '3. Old gamers remember a famous code. Use your keyboard.']
    case 'clues':
      return ['Clues found: ' + found.length + ' of ' + TOTAL]
    case 'sudo':
      return ['Nice try. Access denied.']
    default:
      return ['command not found: ' + cmd + '. Type help.']
  }
}

export default function Terminal() {
  const { found, find } = useClues()
  const [lines, setLines] = useState([{ kind: 'out', text: 'Interrogation room online. Type help.' }])
  const [value, setValue] = useState('')
  const [history, setHistory] = useState([])
  const [pos, setPos] = useState(-1)
  const body = useRef(null)
  const input = useRef(null)

  useEffect(() => {
    if (body.current) body.current.scrollTop = body.current.scrollHeight
  }, [lines])

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase()
    if (cmd === 'clear') {
      setLines([])
      return
    }
    if (!cmd) {
      setLines((l) => [...l, { kind: 'in', text: '' }])
      return
    }
    let reply
    if (cmd === 'sudo hire-me') {
      find('sudo', 'Root access granted')
      reply = ['Permission granted.', 'The subject is available for hire. Type contact.']
    } else {
      reply = answer(cmd, found)
    }
    setLines((l) => [...l, { kind: 'in', text: raw }, ...reply.map((text) => ({ kind: 'out', text }))])
    setHistory((h) => [raw, ...h])
    setPos(-1)
  }

  const onKey = (e) => {
    if (e.key === 'Enter') {
      run(value)
      setValue('')
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const next = Math.min(pos + 1, history.length - 1)
      if (history[next] !== undefined) {
        setPos(next)
        setValue(history[next])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const next = pos - 1
      setPos(next)
      setValue(next >= 0 ? history[next] : '')
    }
  }

  return (
    <section id='terminal' className='mx-auto max-w-4xl scroll-mt-24 px-6 py-28'>
      <SectionHead scene='SCENE 07 // THE INTERROGATION' title='ASK THE SUBJECT' text='A real terminal. Type a command, or tap one below.' />

      <div
        className='overflow-hidden rounded-2xl border border-neon/30 bg-black/80 shadow-[0_0_40px_rgba(34,211,238,0.08)]'
        onClick={() => input.current && input.current.focus()}
      >
        <div className='flex items-center gap-2 border-b border-white/10 px-4 py-2.5'>
          <span className='h-3 w-3 rounded-full bg-blood-500' />
          <span className='h-3 w-3 rounded-full bg-noir' />
          <span className='h-3 w-3 rounded-full bg-emerald-500' />
          <span className='ml-2 font-mono text-xs text-slate-500'>visitor@case-file:~</span>
        </div>
        <div ref={body} className='h-80 overflow-y-auto px-5 py-4 font-mono text-sm'>
          {lines.map((l, i) =>
            l.kind === 'in' ? (
              <p key={i} className='text-neon'>
                <span className='text-blood-400'>$</span> {l.text}
              </p>
            ) : (
              <p key={i} className='whitespace-pre-wrap text-slate-300'>{l.text}</p>
            )
          )}
          <div className='flex items-center gap-2 text-neon'>
            <span className='text-blood-400'>$</span>
            <input
              ref={input}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKey}
              aria-label='Terminal input'
              autoComplete='off'
              spellCheck={false}
              className='flex-1 bg-transparent outline-none'
            />
          </div>
        </div>
      </div>

      <div className='mt-4 flex flex-wrap gap-2'>
        {QUICK.map((c) => (
          <button
            key={c}
            type='button'
            onClick={() => run(c)}
            className='rounded-full border border-white/15 px-4 py-1.5 font-mono text-xs text-slate-300 transition hover:border-neon hover:text-neon'
          >
            {c}
          </button>
        ))}
      </div>
    </section>
  )
}