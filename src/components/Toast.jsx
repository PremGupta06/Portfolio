import { AnimatePresence, motion } from 'framer-motion'
import { Search } from 'lucide-react'

export default function Toast({ toast }) {
  return (
    <div className='pointer-events-none fixed inset-x-0 bottom-14 z-[91] flex justify-center px-4' aria-live='polite'>
      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className='flex items-center gap-2.5 rounded-full border border-blood-500/40 bg-black/85 px-5 py-2.5 font-mono text-xs tracking-wide text-paper shadow-xl shadow-blood-500/20 backdrop-blur'
          >
            <Search size={14} className='text-blood-400' />
            {toast.text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}