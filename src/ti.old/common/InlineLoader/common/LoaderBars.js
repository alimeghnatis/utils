import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.true" */ './loader_bars.scss')

const main_class = 'loader_bars'
const LoaderBars = memo((
  {
    id,
    className,
    height,
    width,
    strokeLinecap='round',
    strokeWidth='14',
    animationDuration=1.25
  }
) =>{
  const longLinecap = ['round', 'square'].includes(strokeLinecap)
  const endOfLinecap = longLinecap ? strokeWidth / 2 : 0
  const totalHeight = 40
  const numberOfElements = 6
  const y1 = endOfLinecap
  const ay1 = totalHeight - strokeWidth
  const y2 = totalHeight - endOfLinecap
  const fractTime = animationDuration / numberOfElements

  return (
    <svg
      version='1.1'
      className={
        main_class
    //+ (? '':'')
    + (className ? ' ' + className : '')
      }
      id={ id }
      x='0px'
      y='0px'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      preserveAspectRatio='xMinYMin meet'
      width={width || (!height ? '120' : undefined)}
      height={height || ( !width ? totalHeight : undefined)}
      viewBox={`0 0 120 ${totalHeight}`}
    >
      { [...Array(numberOfElements)].map((e,i) =>{
        // const currentPosition=`M${10 + i*20},${endOfLinecap} v${totalHeight - 2*endOfLinecap}`

        const begin = i*fractTime

        return (
          <line
            strokeLinecap={ strokeLinecap }
            strokeWidth={ strokeWidth }
            x1={ 10 + i*20 }
            y1={ ay1 }
            x2={ 10 + i*20 }
            y2={ y2 }
          >

            <animate
              attributeType='XML'
              attributeName='y1'
              values={`${ay1};${y1};${ay1};${ay1}`}
              keyTimes={'0;.2;.4;1'}
              dur={ animationDuration + 's' }
              repeatCount='indefinite'
              begin={`${begin}s`}
            />

          </line>

        )
      }
      ) }

    </svg>
  )
}
)

LoaderBars.propTypes = {
  id: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  strokeLinecap: PropTypes.string,
  strokeWidth: PropTypes.string,
  className: PropTypes.string,
  animationDuration: PropTypes.number,
}

/*<path
    className={'bar-' + (i + 1)}
    fill='#01a09e'
    stroke='#01a09e'
    d={currentPosition}
    strokeLinecap={ strokeLinecap }
    strokeWidth={ strokeWidth }
  />*/

export default LoaderBars


