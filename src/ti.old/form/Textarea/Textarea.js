import React, { memo } from 'react'

import PropTypes from 'prop-types'

import {
  withLabelAndState,
  withInputTracking,
} from '../common/'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.form_main" */ '../form.scss')

const main_class = 'textarea'

//Please not that focus active classes must go directly to the input

const Textarea = ({
  id,
  className,
  inputClassName,
  valid,
  error,
  prefix='',
  name,
  rows=8,
  value,
  placeholder='Enter text here',
  //loading,
  disabled,

  onChange,

  style,
  inputStyle,
  shadow='xs',
  shadowHover='xs',
  simple,
}) =>
  <div
    className={
      C.input
			+ ' ' + main_class
			+ ' t' //transition time
			//+ ( icon ? ' left icon':'')
			+ ( className ? ' ' + className : '')
			+ ( valid ? ' ' + C.valid: '')
			+ ( error ? ' ' + C.error: '')
			+ ((shadow && !simple) ? ' ' + C.shadow + shadow : ' ')
			+ (disabled ? ' ' + C.disabled : ' ')
			+ ((shadowHover && !disabled && !simple) ?
			  ' ' + C.shadowHover + shadowHover + ' ' + C.shadowActive : ' ')
    }
    style={ style }
    id={ id }
  >
    <textarea
      disabled={ disabled }
      id={ (prefix ? prefix + '_' : '' )+ name }
      rows={ rows }
			className={
				'row'
				+ ( inputClassName ? ' ' + inputClassName : '')
			}
      value={ value }
      onChange={ onChange }
      name={ name }
      placeholder={ placeholder }
      style={ inputStyle }
    />
  </div>

const isEqual = (prevProps, nextProps) => {
  const c1 = prevProps.value == nextProps.value
  if (!c1) {
    return false
  }
  else {
    return true
  }
}

Textarea.propTypes = {
  id:PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  error: PropTypes.string, //TODO
  valid: PropTypes.boolean, //TODO
  prefix: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  rows:PropTypes.number,
  placeholder: PropTypes.string,
  style:PropTypes.object,
  inputStyle:PropTypes.object,
  onChange: PropTypes.func,
}

export default process.env.GA_INPUTS_TRACKING === 'true' ?
  memo(withLabelAndState(withInputTracking(Textarea)), isEqual) :
  memo(withLabelAndState(Textarea), isEqual)

