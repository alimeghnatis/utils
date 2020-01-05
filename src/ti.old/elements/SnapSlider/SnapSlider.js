import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.snap_slider" */ './snap_slider.scss')

const main_class = 'snap_slider'

const SnapSlider = memo(({
  id,
  className,
  style,
  children,
  compact,
  pin='center',
  scrollbar=false,
}) =>
  <div
    className={
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
		+ (scrollbar ? '' : ' nsb-xs')
		+ (compact ? ' ' + C.compact : '')
		+ ((pin == 'left') ? ' ' + C.left : '')
		+ ((pin == 'right') ? ' ' + C.right : '')
		+ ((pin == 'center' || !['left', 'right'].includes(pin)) ? ' ' + C.center : '')
    }
    id={ id }
    style={ style }
  >
    { children }
  </div>
)

SnapSlider.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  pin: PropTypes.string,
  scrollbar: PropTypes.bool,
  compact: PropTypes.bool,
  style:PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}


export default SnapSlider

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

