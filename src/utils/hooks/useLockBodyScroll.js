import { useLayoutEffect } from 'react'
// Hook

export default () => {

  useLayoutEffect(() => {

    // Get original body overflow
    const isClient = !(typeof window === 'undefined')
    let originalStyle = isClient ? window.getComputedStyle(document.body).overflow : undefined

    if(isClient){

      // Prevent scrolling on mount
      document.body.style.overflow = 'hidden'
    // Re-enable scrolling when component unmounts
    }

    return isClient ? () => document.body.style.overflow = originalStyle : () => null

  }, []) // Empty array ensures effect is only run on mount and unmount

}
