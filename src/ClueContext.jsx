import { createContext, useCallback, useContext, useState } from 'react'

const ClueContext = createContext({ found: [], find: () => {} })

export const TOTAL = 3
const KEY = 'case-file-clues'

export function ClueProvider({ children, notify }) {
  const [found, setFound] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(KEY)) || []
    } catch {
      return []
    }
  })

  const find = useCallback(
    (id, label) => {
      if (found.includes(id)) return
      const next = [...found, id]
      setFound(next)
      try {
        localStorage.setItem(KEY, JSON.stringify(next))
      } catch {
        /* storage blocked */
      }
      notify('CLUE FOUND: ' + label + ' (' + next.length + '/' + TOTAL + ')')
    },
    [found, notify]
  )

  return <ClueContext.Provider value={{ found, find }}>{children}</ClueContext.Provider>
}

export const useClues = () => useContext(ClueContext)