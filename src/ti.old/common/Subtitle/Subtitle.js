import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

//if(!process.env.BACKEND) import(/* webpackChunkName: "css.subtitle" */ './subtitle.scss')

const main_class = 'subtitle'

const Subtitle = memo(({
  id,
  className,
  style,
  children,
  upper,
  as:Element='p'
}) =>
  <Element
    className={
      main_class
      //+ (? '':'')
    +' c-grey nm tos'
		+ (upper ? ' tls tu' : '')
		+ (className ? ' ' + className : ' ')
    }
    id={ id }
    style={ style }
  >
    { children }
  </Element>
)

Subtitle.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  as: PropTypes.string.isRequired,
  upper: PropTypes.bool,
  style:PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}


export default Subtitle

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

