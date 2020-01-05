import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import {
  InputLabel,
  InputState
} from '../common'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.form_main" */ '../form.scss')

const main_class = 'checkbox'
const main_class_group = 'checkboxes'
const cross_class = 'cross'
const check_class = 'check'

const Cross = memo(({
  strokeLinecap='round',
  className
}) =>
  <svg
    viewBox='0 0 100 100'
    xmlns='http://www.w3.org/2000/svg'
    className={
      cross_class
			+ ( className ? ' ' + className : '')
    }
  >
    <rect
      x='7'
      y='7'
      width='86'
      height='86'
    />
    <path
      d='M 22 22 L 78 78'
      className='cross-1'
      strokeLinecap={ strokeLinecap }
    >
    </path>
    <path
      d='M 78 22 L 22 78'
      className='cross-2'
      strokeLinecap={ strokeLinecap }
    >
    </path>
  </svg>
)

const Check = memo(({
  strokeLinecap='round',
  className,
}) =>
  <svg
    viewBox='0 0 100 100'
    xmlns='http://www.w3.org/2000/svg'
    className={
      check_class
			+ ( className ? ' ' + className : '')
    }
  >
    <rect
      x='5'
      y='5'
      width='90'
      height='90'
    />
    <path
      d='M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16'
      className='check-1'
      strokeLinecap={ strokeLinecap }
    />
  </svg>
)

const Checkbox = memo(({
  id,
  className,
  inputClassName,
  labelClassName,
  label,
  valid,
  error,
  prefix='',
  name,
  value,
  /* type='text',
     loading, */
  disabled,

  onChange,

  style,
  inputStyle,
  /* shadow='sm',
     shadowHover='sm', */
  simple,
  colorLabel,
  variant,

  Wrapper='div',
}) =>
  <Wrapper
    className={
      C.input
	    + ' ' + main_class
			+ ' t' //transition time
			+ ( className ? ' ' + className : '')
			+ ( valid ? ' ' + C.valid: '')
			+ ( error ? ' ' + C.error: '')
			+ (disabled ? ' ' + C.disabled : ' ')
			/* + ((shadow && !simple) ? ' ' + C.shadow + shadow : ' ')
			   + ((shadowHover && !disabled && !simple) ?
			   ' ' + C.shadowHover + shadowHover + ' ' + C.shadowActive : ' ') */
	  }
    style={ style }
    id={ id }
  >
    <input
      disabled={ disabled }
      id={ (prefix ? prefix + '_' : '' )+ name + (id ? '_' + id : '')}
      className={
        'row'
				+ ( inputClassName ? ' ' + inputClassName : '')
      }
      checked={ value }
      onChange={ onChange }
      name={ name }
      style={ inputStyle }
      type='checkbox'
    />

    { label &&
    <InputLabel
      htmlFor={ prefix + '_' + name + (id ? '_' + id : '')}
      className={ labelClassName }
      valid={ valid }
      error={ error }
      label={ label }
      color={ colorLabel }
    />
    }

    { variant == 'check' ?
      <Check
        className={( inputClassName ? ' ' + inputClassName : '')}
      /> :
      <Cross
        className={( inputClassName ? ' ' + inputClassName : '')}
      />
    }

  </Wrapper>

)

Checkbox.propTypes = {
  id:PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,

  label:PropTypes.string,
  error: PropTypes.string, //TODO
  valid: PropTypes.boolean, //TODO
  prefix: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,

  loading:PropTypes.boolean,
  disabled:PropTypes.boolean,
  simple:PropTypes.boolean,
  /* shadow:PropTypes.string,
     shadowHover:PropTypes.string, */
  variant:PropTypes.string,

  style:PropTypes.object,
  inputStyle:PropTypes.object,
  onChange: PropTypes.func,
}

const Group = memo(({
  className,
  id,
  children,
  Wrapper='ul',
})=>
  <Wrapper
    className={
	    main_class_group
			+ ( className ? ' ' + className : '' )
	  }
    id={id}
  >
    {children}
  </Wrapper>
)

Group.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style:PropTypes.object,
}

Checkbox.Group = Group

export default Checkbox

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

