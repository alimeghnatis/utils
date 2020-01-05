import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.true" */ './loader_circle.scss')

const main_class = 'loader_circle'

const LoaderCircle = memo(({
  id,
  className,
  height,
  width,
  strokeLinecap='round',
  strokeWidth='5',
}) =>  {
  const totalHeight = 40
  return(
    <svg
      viewBox='25 25 50 50'
      version='1.1'
      className={
		    main_class
    //+ (? '':'')
    + (className ? ' ' + className : '')
		  }
      id={ id }
      xmlns='http://www.w3.org/2000/svg'
      x='0px'
      y='0px'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      preserveAspectRatio='xMinYMin meet'
      width={width || (!height ? '120' : undefined)}
      height={height || ( !width ? totalHeight : undefined)}
    >
      <circle
        className='path'
        cx='50'
        cy='50'
        r='20'
        fill='none'
        strokeWidth={ strokeWidth }
        strokeLinecap={ strokeLinecap }
        strokeMiterlimit='10'
      />
    </svg>
  )
}
)

LoaderCircle.propTypes = {
  id: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  strokeLinecap: PropTypes.string,
  strokeWidth: PropTypes.string,
  className: PropTypes.string,
}


export default LoaderCircle

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

