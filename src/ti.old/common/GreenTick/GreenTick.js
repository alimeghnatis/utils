import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.green_tick" */ './green_tick.scss')

const main_class = 'green_tick'

const GreenTick = memo(({
  id,
  className,
  style
}) =>
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className={
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
    }
    id={ id }
    style={ style }
    xmlSpace='preserve'
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    preserveAspectRatio='xMinYMin meet'
    viewBox={`0 0 154 154`}
  >
    <g>
      <circle
        id='outline'
        cx='77'
        cy='77'
        r='72'
      >
      </circle>
      <circle
        id='colored'
        cx='77'
        cy='77'
        r='72'
      >
      </circle>
      <polyline
        id='line'
        className='st0'
        points='43.5,77.8 63.7,97.9 112.2,49.4'
      />
    </g>
  </svg>

)
/*
GreenTick.propTypes = {
	id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
	children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};
*/


export default GreenTick

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

