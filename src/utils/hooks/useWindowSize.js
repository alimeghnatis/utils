import { useCallback, useState, useEffect } from 'react'
import debounce from 'lodash/debounce'

export default (
  debounceMs=700
) => {
  const isClient = typeof window === 'object'

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    }
  }

  const [windowSize, setWindowSize] = useState(getSize)

  const handle = useCallback(
    debounce(() =>{

      setWindowSize(getSize())

    }, debounceMs
    ))

  useEffect(() => {
    if (!isClient) {
      return false
    }

    window.addEventListener('resize', handle)
    return () => window.removeEventListener('resize', handle)
  }, [getSize, handle, isClient]) // Empty array ensures that effect is only run on mount and unmount


  return windowSize

}

//https://usehooks.com/useWindowSize/
