import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function Dossier({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className='fixed inset-0 z-[86] flex items-center justify-center p-4'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className='absolute inset-0 bg-black/80 backdrop-blur-sm' onClick={onClose} />
          <motion.article
            role='dialog'
            aria-modal='true'
            aria-label={project.title}
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: 30 }}
            className='relative max-h-[88vh] w-full max-w-2xl overflow-y-auto bg-paper p-6 text-ink-950 shadow-2xl sm:p-9'
          >
            <button
              type='button'
              onClick={onClose}
              aria-label='Close dossier'
              className='absolute right-3 top-3 rounded p-1.5 text-ink-950/60 transition hover:bg-black/10 hover:text-ink-950'
            >
              <X size={20} />
            </button>

            <div className='flex items-center justify-between pr-8'>
              <p className='font-mono text-xs tracking-widest'>CASE {project.number} // CLEARANCE: {project.clearance}</p>
              <span className='stamp text-sm text-blood-600'>{project.status}</span>
            </div>
            <h3 className='mt-4 font-title text-5xl leading-none'>{project.title}</h3>
            <p className='mt-3 font-type'>{project.summary}</p>

            <ul className='mt-5 space-y-2 font-type text-sm'>
              {project.brief.map((line) => (
                <li key={line} className='flex gap-2'>
                  <span className='text-blood-600'>&gt;</span>
                  {line}
                </li>
              ))}
            </ul>

            <p className='mt-5 font-type text-sm'>
              KEY DETAIL:{' '}
              <span className='redacted' tabIndex={0}>{project.secret}</span>
              <span className='ml-2 font-mono text-[10px] text-ink-950/50'>(hover to declassify)</span>
            </p>

            <div className='mt-5 flex flex-wrap gap-2'>
              {project.stack.map((tech) => (
                <span key={tech} className='rounded border border-ink-950/30 px-2 py-0.5 font-mono text-xs'>{tech}</span>
              ))}
            </div>

            <div className='mt-7 flex flex-wrap gap-3'>
              {project.links.length === 0 && <p className='font-mono text-xs text-ink-950/60'>No public links yet.</p>}
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                  className='bg-ink-950 px-5 py-2.5 font-mono text-xs tracking-widest text-paper transition hover:bg-blood-600'
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  )
}