import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

import { useInterval } from 'utils'

//if(!process.env.BACKEND) import(/* webpackChunkName: "css.number_increase" */ './number_increase.scss')

const main_class = 'number_increase'

const NumberIncrease = memo(({
  id,
  className,
  suffixClassName,
  style,
  number,
  duration,
  as:Wrapper='p',
  suffix,
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
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
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
)

NumberIncrease.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  number:PropTypes.number,
  duration:PropTypes.number,
  Wrapper: PropTypes.string,
  suffix: PropTypes.string,
}

export default NumberIncrease

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

