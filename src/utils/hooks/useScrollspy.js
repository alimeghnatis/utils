import React, { useMemo, useCallback, useEffect, useState } from 'react'
import throttle from 'lodash.throttle'
import useWindowSize from './useWindowSize'

export default (
  {
    activeIdDefault=null,
    offsetPx=0,
    idList=[],
    throttleMs=200,
  }
) => {
  const [activeId, setActiveId] = useState(activeIdDefault)
  const [pastIds, setPastIds] = useState(
    idList.slice(0, Math.max(idList.indexOf(activeIdDefault),0))
  )
  const {
    //height:currentHeight, //Not Used
    width:currentWidth
  } = useWindowSize()

  const scrollValues = useMemo(() => {
    if (idList.length) {
      const offsetsY = {}
      const currentOffsetY = window.scrollY
      const selectors = idList.reduce((a,e,i) => {
        if (i!= idList.length - 1) return a + '#' + e + ', '
        else return a + '#' + e
      },''
      )
      const qs = document.querySelectorAll(selectors)
      const elementArray = Array.from(qs)
      elementArray.forEach((e) =>
        offsetsY[e.id] = Math.floor(e.getBoundingClientRect().y + currentOffsetY)
      )
      return offsetsY
    }

    else return {}
  },[idList, currentWidth])

  useEffect(
    () => setActiveId(idList[0]),
    [idList]
  )

  useEffect(
    () => setPastIds(
      idList.slice(0,idList.indexOf(activeId))
    )
    , [activeId, idList])

  const handle = useCallback(
    throttle(() => {
      const currentPosition = window.scrollY + offsetPx
      var i = 0
      while(
        (currentPosition + offsetPx >= scrollValues[idList[i]])
				&& ( i < idList.length - 1)
      )  {
        i +=1
      }

      /* console.log('HEYYO', window.scrollY, window.scrollY + offsetPx, scrollValues)
         console.log(898989, 'MART', firstInViewport) */
      setActiveId(idList[i])
    }, throttleMs),
    [idList, scrollValues]
  )

  useEffect(() => {
    window.addEventListener('scroll', handle)

    return () => {
      window.removeEventListener('scroll', handle)
    }
  }, [handle, offsetPx])
  return {
    activeId,
    pastIds,
  }

}
