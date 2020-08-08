import { useCallback, useState, useEffect } from 'react'
import debounce from 'lodash.debounce'

export default (
  requiredKey='',
  handle= () => null,
  {
    requireCtrlKey=false,
    requireAltKey=false,
    requireShiftKey=false,
  }
) => {
  const isClient = typeof window === 'object'

  const downHandler = ({ key, shiftKey, ctrlKey, altKey }) => {
    const conditions = [
      key.toLowerCase() === requiredKey.toLowerCase(),
    ]
    requireShiftKey && conditions.push(shiftKey)
    requireAltKey && conditions.push(altKey)
    requireCtrlKey && conditions.push(ctrlKey)


    const correct = conditions.reduce((a, e) => {
      if ((!a || !e)) return false
      else return true
    }, true)

    correct && handle()

    /*
    if (key === targetKey) {
      setKeyPressed(true);
    }*/
  }



  useEffect(() => {
    isClient && window.addEventListener('keydown', downHandler)
    /* window.addEventListener('keyup', upHandler)
        Remove event listeners on cleanup */
    return () => {
      isClient && window.removeEventListener('keydown', downHandler)
      //window.removeEventListener('keyup', upHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount


  //return windowSize
  return null

}

//https://usehooks.com/useWindowSize/
