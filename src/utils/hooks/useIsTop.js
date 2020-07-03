import{ useCallback, useEffect, useState } from 'react'
import throttle from 'lodash.throttle'
import useWindowSize from './useWindowSize'

const useIsTop = (props={}) => {
  const {
    offsetPx=0,
    throttleMs=200,
    initAt=true,
  } = props
  const [ isTop, setIsTop ] = useState(initAt)
  const [ loaded, setLoaded ] = useState(false)

  const isClient = !(typeof window === 'undefined')

  const {
    //height:currentHeight, //Not Used
    width:currentWidth
  } = useWindowSize()

  const handle = isClient ? useCallback(
    throttle(() => {
      if( loaded ){
        setIsTop(window.scrollY - offsetPx <= 0)
      }
    }, throttleMs),
    [currentWidth, loaded]
  ) : null

  useEffect(() => {
    setLoaded(true)
    if(isClient) {
      window.addEventListener('scroll', handle)
    }

    return () => {
      if(isClient) {
        window.removeEventListener('scroll', handle)

      }
    }
  }, [handle, offsetPx])

  return isTop
}

export default useIsTop
