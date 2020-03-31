import React, { useMemo, useCallback, useEffect, useState } from 'react'
import throttle from 'lodash.throttle'
import useWindowSize from './useWindowSize'

export default (
  {
    popupRef,
    preferredOrder=['bottom','top', 'right', 'left'],
    visible=true,
    offsetYPx=0,
    offsetXPx=0,
    throttleMs=200,
  }
) => {
  //TODO further optimization, separate handle for X and Y resize/scroll ?

  const {
    height:currentHeight,
    width:currentWidth
  } = useWindowSize()

  if (!currentHeight) {
    // If there is no client, we are doing SSR and we return the default position
    return preferredOrder[0]
  }


  const [position, setPosition] = useState(preferredOrder[0])

  const handle = useCallback(
    throttle(() => {
      const el = popupRef.current

      const {
        top:parentTop,
        left:parentLeft,
        width:parentWidth,
        height:parentHeight
      } = el.parentNode.getBoundingClientRect()

      const {
        height:elHeight,
        width:elWidth,
      } = el.getBoundingClientRect()

      const fits = {
        top : (parentTop + offsetYPx) >= elHeight,
        bottom : (currentHeight - parentTop - parentHeight - offsetYPx) >= elHeight,
        left : ( (parentLeft + offsetXPx) >= elWidth) &&
          ( ( currentHeight - parentTop - offsetYPx ) >= elHeight ),
        right : ( (currentWidth - parentLeft - parentWidth - offsetXPx) >= elWidth ) &&
          ( ( currentHeight - parentTop - offsetYPx ) >= elHeight ),
      }

      /*
      console.log('the current window size is',
        `H ${currentHeight} W ${currentWidth}`,
        'and the bouding rect is',
        popupRef.current.getBoundingClientRect(),
        popupRef
      )

      console.log('the parent node',
        popupRef.current.parentNode,
        popupRef.current.parentNode.getBoundingClientRect(),
      )

      console.warn(
        'does it fit',
        fits
      )
        */
      for (const triedPosition of preferredOrder) {
        if (fits[triedPosition]) {
          setPosition(triedPosition)
          break
        }
      }

    }, throttleMs),
    [popupRef, currentHeight, currentWidth]
  )

  useEffect(() => {
    if ( visible ) {
      handle() //Runs on mount only

      window.addEventListener('scroll', handle)
      window.addEventListener('resize', handle)

      return () => {
        window.removeEventListener('scroll', handle)
        window.removeEventListener('resize', handle)
      }
    }
  }, [handle, visible])

  //}, [handle, wrapperRef, offsetPx])

  return position
}
