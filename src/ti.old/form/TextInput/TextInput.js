import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

import {
  withLabelAndState,
  withInputTracking,
} from '../common/'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.form_main" */ '../form.scss')

const main_class = 'text'

//Please not that focus active classes must go directly to the input

const TextInput = ({
  id,
  className,
  inputClassName,
  valid,
  error,
  prefix='',
  name,
  value,
  placeholder='Enter text here',
  type='text',
  loading,
  disabled,

  onChange,

  style,
  inputStyle,
  shadow='xs',
  shadowHover='xs',
  icon,
  iconSide='r',
  simple,
}) =>
  <div
    className={
      C.input
	    + ' ' + main_class
			+ ' t' //transition time
			+ ( icon ? ' left icon':'')
			+ ( className ? ' ' + className : '')
			+ ( valid ? ' ' + C.valid: '')
			+ ( error ? ' ' + C.error: '')
			+ (disabled ? ' ' + C.disabled : ' ')
			+ (icon ? ' ' + C.iconInside + ((iconSide && !loading) ? iconSide : 'c') : ' ')
			+ ((shadow && !simple) ? ' ' + C.shadow + shadow : ' ')
			+ ((shadowHover && !disabled && !simple) ?
		  ' ' + C.shadowHover + shadowHover + ' ' + C.shadowActive : ' ')
	  }
    style={ style }
    id={ id }
  >
    <input
      disabled={ disabled }
      id={ (prefix ? prefix + '_' : '' )+ name }
      className={
        'row'
				+ ( inputClassName ? ' ' + inputClassName : '')
      }
      value={ value }
      onChange={ onChange }
      name={ name }
      placeholder={ placeholder }
      style={ inputStyle }
      type={ type }
    />
    { icon && <i className={'icon'}>{ icon }</i>}
  </div>

const isEqual = (prevProps, nextProps) => {
  const c0 = prevProps.icon == nextProps.icon
  const c1 = prevProps.inputValue == nextProps.inputValue
  if (!(c1 && c0)) {
    return false
  }
  else {
    return true
  }
}

TextInput.propTypes = {
  id:PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  error: PropTypes.string, // TODO
  valid: PropTypes.boolean, // TODO
  loading:PropTypes.boolean,
  disabled:PropTypes.boolean,
  simple:PropTypes.boolean,
  prefix: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  rows:PropTypes.number,
  placeholder: PropTypes.string,
  style:PropTypes.object,
  inputStyle:PropTypes.object,
  onChange: PropTypes.func,
  type:PropTypes.string,
  icon:PropTypes.string,
  iconSide:PropTypes.string,
  shadow:PropTypes.string,
  shadowHover:PropTypes.string,
}

export default process.env.GA_INPUTS_TRACKING === 'true' ?
  memo(withLabelAndState(withInputTracking(TextInput)), isEqual) :
  memo(withLabelAndState(TextInput), isEqual)

