import{ useCallback, useEffect, useState } from 'react'
import throttle from 'lodash.throttle'
import useWindowSize from './useWindowSize'

const useIsTop = (props={}) => {
  const {
    offsetPx=0,
    throttleMs=200,
    initAt=true,
  } = props
  console.log('in the func')
  const [ isTop, setIsTop ] = useState(initAt)
  const [ loaded, setLoaded ] = useState(false)

  const {
    //height:currentHeight, //Not Used
    width:currentWidth
  } = useWindowSize()

  const handle = useCallback(
    throttle(() => {
      if( loaded ){
        setIsTop(window.scrollY - offsetPx <= 0)
      }
    }, throttleMs),
    [currentWidth, loaded]
  )

  useEffect(() => {
    setLoaded(true)
    window.addEventListener('scroll', handle)

    return () => {
      window.removeEventListener('scroll', handle)
    }
  }, [handle, offsetPx])

  return isTop
}

export default useIsTop
