import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import {
  InputLabel,
  InputState
} from '../common'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.form_main" */ '../form.scss')


const main_class = 'radio'
const main_class_group = 'radios'
const dot_class = 'dot'
const circle_class = 'circle'
const cross_class = 'cross'

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
    <circle
      cx='50'
      cy='50'
      r='50'
    />
    <path
      d='M 26 26 L 74 74'
      className='cross-1'
      strokeLinecap={ strokeLinecap }
    >
    </path>
    <path
      d='M 74 26 L 26 74'
      className='cross-2'
      strokeLinecap={ strokeLinecap }
    >
    </path>
  </svg>
)


const Dot = memo(({
  strokeLinecap='round',
  className,
}) =>
  <svg
    viewBox='0 0 100 100'
    xmlns='http://www.w3.org/2000/svg'
    className={
      dot_class
			+ ( className ? ' ' + className : '')
    }
  >
    <circle
      cx='50'
      cy='50'
      r='20'
    />
    <path
      d='M34.745,7.183C25.078,12.703,13.516,26.359,8.797,37.13 c-13.652,31.134,9.219,54.785,34.77,55.99c15.826,0.742,31.804-2.607,42.207-17.52c6.641-9.52,12.918-27.789,7.396-39.713 C85.873,20.155,69.828-5.347,41.802,13.379'
      strokeLinecap={ strokeLinecap }
    />
  </svg>
)

const Circle = memo(({
  strokeLinecap='round',
  className,
}) =>
  <svg
    viewBox='0 0 100 100'
    xmlns='http://www.w3.org/2000/svg'
    className={
      circle_class
			+ ( className ? ' ' + className : '')
    }
  >
    <circle
      cx='50'
      cy='50'
      r='35'
      className='outer'
    />
    <circle
      cx='50'
      cy='50'
      r='18'
      className='inner'
    />
  </svg>
)


const Radio = memo(({
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
      id={ (prefix ? prefix + '_' : '' )+ name  + (id ? '_' + id : '')}
      className={
        'row'
				+ ( inputClassName ? ' ' + inputClassName : '')
      }
      checked={ value }
      onChange={ onChange }
      name={ name }
      style={ inputStyle }
      type='radio'
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
    { variant == 'dot' ?
      <Dot
        className={ inputClassName }
      />
		  : variant == 'cross' ?
  <Cross
    className={ inputClassName }
  /> :
  <Circle
    className={ inputClassName }
  />
    }


  </Wrapper>

)

Radio.propTypes = {
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

Radio.Group = Group

export default Radio

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

