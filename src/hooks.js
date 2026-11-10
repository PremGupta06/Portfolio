import { useEffect, useState } from 'react'

export function useTyper(words, speed = 55, pause = 1500) {
  const [text, setText] = useState('')

  useEffect(() => {
    let word = 0
    let chars = 0
    let deleting = false
    let timer
    const tick = () => {
      const current = words[word]
      if (!deleting) {
        chars += 1
        setText(current.slice(0, chars))
        if (chars === current.length) {
          deleting = true
          timer = setTimeout(tick, pause)
          return
        }
      } else {
        chars -= 1
        setText(current.slice(0, chars))
        if (chars === 0) {
          deleting = false
          word = (word + 1) % words.length
        }
      }
      timer = setTimeout(tick, deleting ? speed / 2 : speed)
    }
    timer = setTimeout(tick, 700)
    return () => clearTimeout(timer)
  }, [words, speed, pause])

  return text
}

const KONAMI = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

export function useKonami(onSuccess) {
  useEffect(() => {
    let index = 0
    const onKey = (e) => {
      if (e.target && e.target.tagName === 'INPUT') return
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      if (key === KONAMI[index]) index += 1
      else index = key === KONAMI[0] ? 1 : 0
      if (index === KONAMI.length) {
        index = 0
        onSuccess()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onSuccess])
}