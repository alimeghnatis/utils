import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

import {
  useWindowSize,
  useScrollProgressSpy
} from 'utils'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.page_progress_tracker" */ './page_progress_tracker.scss')

const main_class = 'page_progress_tracker'

const PageProgressTracker = memo(({
  id,
  className,
  rectClassName,
  style,
  offsetPx,
  initializeAt,
  spyOn,
  strokeWidth=8,
  gradientMap,
  throttleMs=100
}) => {

  const {
    progress
  } = useScrollProgressSpy({
    activeDefaultId:initializeAt,
    offsetPx,
    contentId:spyOn,
    throttleMs
  })

  const pathVerticalPosition = strokeWidth / 2

  return(
    <div
      className={
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
      }
      id={ id }
      style={{ ...style, height:strokeWidth }}
    >
      <svg
        viewBox={`0 0 100 ${strokeWidth}`}
        xmlSpace='preserve'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        preserveAspectRatio='none'
        height={ strokeWidth }
        className={
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
        }
      >
        { gradientMap &&
        <defs>
          <linearGradient
            id='pbg'
            x2='100%'
            y2='0'
          >
            {
					  gradientMap.map((e,i) =>
  <stop { ...e } />
					  )
            }
          </linearGradient>
        </defs>
        }
        <mask id='pb_mask'>
          <rect
            width='100'
            height={ strokeWidth }
            fill='black'
          />
          <path
            d={`M0 ${pathVerticalPosition} H 100`}
            strokeLinecap='butt'
            strokeWidth={ strokeWidth }
            strokeDasharray='100'
            id='active'
            style={{
              '--do':100 - progress,
            }}
            stroke='white'
          />
        </mask>

        <g>
          <rect
            width='100'
            height={ strokeWidth }
            id='pb_back'
            className={
              rectClassName ? rectClassName : ''
            }
            mask='url(#pb_mask)'
            style={{
				    '--fill':gradientMap && `url(#pbg)`
				  }}
          />
        </g>
      </svg>

    </div>
  )
})

PageProgressTracker.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  rectClassName: PropTypes.string,
  style:PropTypes.object,
  offsetPx:PropTypes.number,
  initializeAt:PropTypes.string,
  spyOn:PropTypes.string,
  strokeLinecap:PropTypes.string,
  strokeWidth:PropTypes.number,
  gradientMap: PropTypes.arrayOf(PropTypes.shape({
    offset: PropTypes.string.isRequired,
    stopColor: PropTypes.string.isRequired,
  })),
}


export default PageProgressTracker

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

