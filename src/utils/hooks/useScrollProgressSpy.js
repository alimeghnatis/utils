import React, { useMemo, useCallback, useEffect, useState } from 'react'
import throttle from 'lodash.throttle'
import useWindowSize from './useWindowSize'

export default (
  {
    activeDefaultId=null,
    offsetPx=0,
    contentId=null,
    throttleMs=200,
  }
) => {
  const [ progress, setProgress ] = useState(0)
  const [ loaded, setLoaded ] = useState(false)

  const {
    //height:currentHeight, //Not Used
    width:currentWidth
  } = useWindowSize()

  const { start, end } = useMemo(() => {
    if( loaded ){
      const html = document.documentElement
      const clientHeight = html.clientHeight

      if (contentId) {
        const el = document.getElementById(contentId)
        const { top, height:elHeight } = el.getBoundingClientRect()
        return {
          start:top - clientHeight,
          end:top + elHeight - clientHeight
        }
      }

      else {
        const body = document.body
        return {
          start:0,
          end:Math.max(
            body.scrollHeight,
            body.offsetHeight,
            clientHeight,
            html.scrollHeight,
            html.offsetHeight
          ) - clientHeight
        }
      }}

    else return { start:0, end:10000 }
  },[contentId, currentWidth, loaded])

  useEffect(() =>{
    if (activeDefaultId && loaded){
      const el = document.getElementById(activeDefaultId)
      const { top } = el.getBoundingClientRect()
      const currentProgress = Math.max(
        Math.min(
          ( top - start ) / (end - start),
          1
        ),
        0
      )
      setProgress(Math.ceil(currentProgress * 1000) / 10)
    }
  },
  [activeDefaultId, loaded])

  const handle = useCallback(
    throttle(() => {
      const currentPosition = window.scrollY + offsetPx
      const currentProgress = Math.max(
        Math.min(
          ( currentPosition - start ) / (end - start),
          1
        ),
        0
      )
      /* console.log('From ', start, ' to ', end)
         console.log('Current', currentPosition, currentProgress) */
      setProgress(Math.ceil(currentProgress * 1000) / 10)
    }, throttleMs),
    [contentId, start, end]
  )

  useEffect(() => {
    setLoaded(true)
    window.addEventListener('scroll', handle)

    return () => {
      window.removeEventListener('scroll', handle)
    }
  }, [handle, offsetPx])

  return {
    progress,
  }

}
