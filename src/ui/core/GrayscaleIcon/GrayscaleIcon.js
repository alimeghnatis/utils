import React from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) {
  import(
    /* webpackChunkName: "css.grayscale_icon" */ 
    './grayscale_icon.scss'
  )
}

const baseClassName = 'grayscale_icon'

const GrayscaleIcon = ({
  id,
  className,
  style
}) => (
  <div 
    className={
      [
        baseClassName,
        className
      ].filter(e => e).join(' ')
  }
    id={ id }
    style={ style }
  >
    <h2>Welcome to the GrayscaleIcon component</h2>
  </div>
)

GrayscaleIcon.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id: PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className: PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style: PropTypes.object,

  /**
   *  The children JSX
   */
  children: PropTypes.node,

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['primary', 'stroke', 'flat'])
  */
}

/*
GrayscaleIcon.defaultProps = {
  status: 'neutral',
}
*/

export default GrayscaleIcon
