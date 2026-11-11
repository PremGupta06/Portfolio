import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { ClueProvider, useClues } from './ClueContext'
import { useKonami } from './hooks'
import Cases from './components/Cases'
import Contact from './components/Contact'
import Credentials from './components/Credentials'
import Credits from './components/Credits'
import Evidence from './components/Evidence'
import Hero from './components/Hero'
import Hud from './components/Hud'
import Intro from './components/Intro'
import Log from './components/Log'
import Overlay from './components/Overlay'
import QuickView from './components/QuickView'
import Terminal from './components/Terminal'
import Timecode from './components/Timecode'
import Toast from './components/Toast'
import TryHackMe from './components/TryHackMe'

function Site() {
  const { find } = useClues()
  const [intro, setIntro] = useState(() => !sessionStorage.getItem('case-intro'))
  const [lights, setLights] = useState(false)
  const [quick, setQuick] = useState(false)

  const finishIntro = useCallback(() => {
    try {
      sessionStorage.setItem('case-intro', '1')
    } catch {
      /* storage blocked */
    }
    setIntro(false)
  }, [])

  const konami = useCallback(() => find('konami', 'The Konami code'), [find])
  useKonami(konami)

  if (quick) return <QuickView onBack={() => setQuick(false)} />

  return (
    <>
      <Overlay lights={lights} />
      <Timecode />
      <AnimatePresence>{intro && <Intro onDone={finishIntro} />}</AnimatePresence>
      {!intro && (
        <>
          <Hud lights={lights} onLights={() => setLights(!lights)} onQuick={() => setQuick(true)} />
          <main>
            <Hero />
            <Evidence />
            <Cases />
            <Log />
            <Credentials />
            <TryHackMe />
            <Terminal />
            <Contact />
            <Credits />
          </main>
        </>
      )}
    </>
  )
}

export default function App() {
  const [toast, setToast] = useState(null)
  const timer = useRef(null)

  const notify = useCallback((text) => {
    clearTimeout(timer.current)
    setToast({ text, id: Date.now() })
    timer.current = setTimeout(() => setToast(null), 3500)
  }, [])

  return (
    <MotionConfig reducedMotion='user'>
      <ClueProvider notify={notify}>
        <Site />
      </ClueProvider>
      <Toast toast={toast} />
    </MotionConfig>
  )
}