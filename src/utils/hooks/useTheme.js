import { useState, useEffect, useMemo } from 'react'
import Cookies from 'universal-cookie'

export default (
  initialTheme,
  cookieName='theme',
  cookieOptions={
    path:'/' ,
    maxAge:60 * 60 * 24 * 365 * 5,
    sameSite:'Lax'
  }
) => {
  //console.warn('USE THEME HERE', initialTheme, cookieName, cookieOptions)
  const isClient = typeof window === 'object'

  const [preferredTheme, setPreferredTheme] = useState(initialTheme)

  const cookies = useMemo(() => new Cookies())

  const [userTheme, setUserTheme] = useState()

  useEffect(() => {
    if (isClient) {
      const cookieTheme = cookies.get(cookieName)
      //console.log(cookieTheme, cookieTheme != userTheme)
      if (cookieTheme && (cookieTheme != userTheme)) {
        //console.warn('Theme load')
        setPreferredTheme(cookieTheme)
        setUserTheme(cookieTheme)
      }
      else if (preferredTheme && preferredTheme.length && preferredTheme != 'system') {
        setUserTheme(preferredTheme)
        cookies.set(
          cookieName,
          preferredTheme,
          cookieOptions
        )
        //console.warn('theme change', preferredTheme)
      }
      else {
        setUserTheme(window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light')
        cookies.remove(cookieName, { path:cookieOptions.path })
        //console.warn('theme reset')
      }
    }
    else {
      setUserTheme('light')
    }
  }, [preferredTheme, isClient]) // Empty array ensures that effect is only run on mount and unmount

  return {
    userTheme,
    preferredTheme,
    setPreferredTheme,
  }

}

//https://usehooks.com/useWindowSize/
