import React, { useState } from 'react'
import PropTypes from 'prop-types'

//Config
import C from 'ui/cssClasses'

//Local Imports
import { useInterval } from 'utils'

if(!process.env.BACKEND) {
  import(
    /* webpackChunkName: "css.number_increase" */
    './number_increase.scss'
  )
}

const baseClassName = 'number_increase'

const NumberIncrease = ({
  id,
  className,
  style,
  number,
  duration,
  as:Wrapper,
  suffix,
  suffixClassName,
}) => {

  const interval = duration / number
  let [count, setCount] = useState(0)
  const condition = count < number

  useInterval(() => {
    setCount(count + 1)
  }, interval, condition)

  if (number < 0) {
    return null
  }
  else {
    return (
      <Wrapper
        className={
          [
            baseClassName,
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={ style }
      >
        { count }
        <span className={ suffixClassName }>
          { suffix }
        </span>
      </Wrapper>
    )
  }
}

NumberIncrease.propTypes = {
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

  number:PropTypes.number.isRequired,
  duration:PropTypes.number,
  as: PropTypes.string,
  suffix: PropTypes.string,
  suffixClassName: PropTypes.string,
}

NumberIncrease.defaultProps = {
  duration:1000,
  as:'p',
}

export default NumberIncrease
