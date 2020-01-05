import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import { NumberIncrease } from 'ui/common'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.round_progress" */ './round_progress.scss')

const main_class = 'round_progress'
const stroke_dasharray= 300 //Same value in CSS

const RoundProgress = memo(({
  id,
  className,
  titleClassName,
  style,
  number,
  max=100,
  unit,
  title,
  duration=1500,
  strokeWidth=10,
  strokeLinecap='round',
}) =>
  <div
    className={
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
    }
    id={ id }
    style={ style }
  >

    <svg
      viewBox='0 0 100 100'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      preserveAspectRatio='xMinYMin meet'
    >
      <g>
        <circle
          cx='50'
          cy='50'
          r={40 + strokeWidth / 2}
          className={ C.contour }
          strokeWidth={ strokeWidth }
        />
        <circle
          cx='50'
          cy='50'
          r='40'
          className={ C.center }
        />
        <circle
          cx='50'
          cy='50'
          r={40 + strokeWidth / 2}
          className={ C.stroke }
          style={{'--do':
						300 - (number * 300 ) / max
						+ (['round', 'square'].includes(strokeLinecap) ? 10 : 0)
          }}
          //Magic happens here using animation @draw-stroke from fwr scss
          strokeLinecap={ strokeLinecap }
          strokeWidth={ strokeWidth }
          //strokeDasharray={ number * 300 / max }

          strokeDashoffset={ number * 300 / max } // A bit redundant with style
        />
      </g>
    </svg>
    <NumberIncrease
      className='number uc r-xl'
      number={ number }
      duration={ duration }
      suffix={ unit }
      Wrapper='span'
    />
    <p className={
	  C.title
		+ ' uc'
		+	(titleClassName ? ' ' + titleClassName : '')
    }
    >
      { title }
    </p>
  </div>
)

RoundProgress.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  style:PropTypes.object,
  number:PropTypes.number,
  max:PropTypes.number,
  unit:PropTypes.string,
  duration:PropTypes.number,
  title:PropTypes.string,
}


export default RoundProgress

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

