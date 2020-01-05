import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import LoaderBars from './common/LoaderBars'
import LoaderCircle from './common/LoaderCircle'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.inline_loader" */ './inline_loader.scss')

const main_class = 'inline_loader'
const loader_bars_class = 'loader-bars'


const InlineLoader = memo(({
  id,
  className,
  type,
  loaderId,
  loaderClassName,
  height,
  width,
  animationDuration
}) =>
  <div
    className={
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
    }
    id={ id }
  >
    {
      type == 'circle' ?
        <LoaderCircle
          id={loaderId}
          className={loaderClassName}
          height={height}
          width={width}
          strokeLinecap='round'
        />

        :
        <LoaderBars
          id={loaderId}
          className={loaderClassName}
          height={height}
          width={width}
          strokeLinecap='round'
          //strokeWidth='14'
          animationDuration={animationDuration}
        />

    }
  </div>
)

InlineLoader.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  animationDuration: PropTypes.number,
  loaderId: PropTypes.string,
  loaderClassName: PropTypes.string,
  type:PropTypes.string,
}


export default InlineLoader

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

