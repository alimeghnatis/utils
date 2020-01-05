import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import {
  InputLabel,
  InputState
} from '../../common'
import { Subtitle } from 'ui/common'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.form_card_selectors" */ './card_selectors.scss')

const main_class = 'card_radio'

const CardRadio = memo(({
  id,
  className,
  inputClassName,
  labelClassName,
	altValueClassName,
	compact,
  label,
  ComplexLabel,
  valid,
  error,
  prefix='',
  name,
  value,
  /* type='text',
     loading, */
  disabled,
  altValue,
  altValuePrefix,

  onChange,

  style,
  inputStyle,
  /* shadow='sm',
     shadowHover='sm', */
  simple,
  colorLabel,
  variant,

}) =>
  <div
    className={
	  main_class
			+ ' ' + C.input
      + (compact ? ' ' + C.compact :'')
      //+ (? '':'')
    }
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
			type='radio'
			data-alt={ altValue }
    />
    <div
      className={
	    C.content
		//+ (? '':'')
		+ (className ? ' ' + className : '')
	  }
      style={ style }
      tabIndex='0'
    >

      <InputLabel
        htmlFor={ (prefix ? prefix + '_' : '' ) + name + (id ? '_' + id : '')}
        className={ labelClassName }
        valid={ valid }
        error={ error }
        color={ colorLabel }
      >
        { ComplexLabel ?
          <ComplexLabel/>
			  :
          <p className='nm'><strong>{ label }</strong></p>
        }
      </InputLabel>

      { altValue &&
      <Subtitle
        upper
				className={ 
					C.meta
					+ (altValueClassName ? ' ' + altValueClassName : '')
				}
      >
			{ altValuePrefix && 
        <span className='prefix'>
          { altValuePrefix }
				</span>
				}
        { altValue }
      </Subtitle>
      }
    </div>
  </div>
)

CardRadio.propTypes = {
  id:PropTypes.string,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  labelClassName: PropTypes.string,
	altValueClassName: PropTypes.string,

  label:PropTypes.string,
	compact:PropTypes.bool,
  ComplexLabel:PropTypes.node,
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
  altValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  altValuePrefix:PropTypes.string,
  variant:PropTypes.string,

  style:PropTypes.object,
  inputStyle:PropTypes.object,
  onChange: PropTypes.func,
}


export default CardRadio

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

