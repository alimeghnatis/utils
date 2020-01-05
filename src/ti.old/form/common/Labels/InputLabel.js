import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.form_labels" */ './labels.scss')

const main_class = 'input_label'

const InputLabel = memo(({
  id,
  htmlFor,
  className,
  color,
  valid,
  error,
  colorValid='green',
  colorError='red',
  style,
  label,
  children
}) =>
  <label
    htmlFor={ htmlFor }
    id={id}
    style={ style }
    className={
      main_class
		+ ' t'
    + ( className ? ' ' + className : '')
    + ( (color && valid) ? ' ' + 'c-' + colorValid : '')
    + ( (color && error) ? ' ' + 'c-' + colorError: '')
    }
  >
    { children || label }
  </label>
)

InputLabel.propTypes = {
  id: PropTypes.string,
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.bool,
  colorValid: PropTypes.string,
  colorError: PropTypes.string,
  valid: PropTypes.string,
  error: PropTypes.string,
  style:PropTypes.object,
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default InputLabel

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

