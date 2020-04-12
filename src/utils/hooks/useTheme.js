import { useState, useEffect } from 'react'

export default (
  initialTheme,
) => {
  const isClient = typeof window === 'object'

  const [preferredTheme, setPreferredTheme] = useState(initialTheme)
  const [userTheme, setUserTheme] = useState('light')


  useEffect(() => {
    if (isClient) {
      preferredTheme ?
        setUserTheme(preferredTheme) :
        setUserTheme(window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light')
    }
    else {
      setUserTheme('light')
    }
  }, [preferredTheme, isClient]) // Empty array ensures that effect is only run on mount and unmount


  return {
    userTheme,
    setPreferredTheme,
  }

}

//https://usehooks.com/useWindowSize/
