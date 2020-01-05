import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.form_labels" */ './labels.scss')

const main_class = 'input_error'

const InputState = memo(({
  id ,
  className,
  error,
  valid,
  state,
  color,
  colorError='red',
  style,
  size='sm',
  margin='mv05',
  //colorValid='green',
}) =>
  error && <p
    id={ id }
    style={style}
    className={
      C.error
		+ ( size ? ' ' + C.relativeSize + size : '' )
		+ ( margin ? ' ' + margin : '' )
    + ( className ? ' ' + className : '')
      //+ ( (color && valid) ? ' ' + 'c-' + colorValid: '')
    + ( (color && error) ? ' ' + 'c-' + colorError: '')
    }
  >
    { error }
  </p>
)

InputState.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.bool,
  colorError: PropTypes.string,
  error:PropTypes.string,
  style:PropTypes.object,
  size:PropTypes.string,
}

export default InputState
