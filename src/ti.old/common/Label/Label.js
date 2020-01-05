import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.label" */ './label.scss')

const main_class = 'label'

const Label = memo(({
  id,
  className,
  style,
  children,
  icon,
  basic,
  as:Wrapper='p',
}) =>
  <span
    className={
	  main_class
		+ ' t'
		//+ (? '':'')
		+ (basic ? ' ' + C.basic : ' ')
		+ (className ? ' ' + className : '')
		+ (icon ? ' fi ' + C.iconInside : '')
    }
    id={ id }
    style={ style }
  >
    { children }
  </span>
)

Label.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  as: PropTypes.string,
  icon: PropTypes.bool,
  basic: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}


export default Label

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

