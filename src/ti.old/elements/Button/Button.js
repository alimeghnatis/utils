import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import { InlineLoader } from 'ui/common'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.button" */ './button.scss')

const main_class = 'button'
const main_class_group = 'g-button'

const Button = memo(({
  id,
  className,
  children,
  style,
  shadow='md',
  shadowHover='sm',
  disabled,
  basic,
  simple,
  circle,
  icon,
  iconSide,
  loading,
  loaderType='bars',
  dangerouslySetInnerHTML,
}) =>
  <button
    className={
	  main_class
		//+ (? '':'')
		+ ' t'
		+ ((shadow && !simple) ? ' ' + C.shadow + shadow : ' ')
		+ (disabled ? ' ' + C.disabled : ' ')
		+ (icon ? ' ' + C.iconInside + ((iconSide && !loading) ? iconSide : 'c') : ' ')
		+ (simple ? ' ' + C.simple : ' ')
		+ (circle ? ' ' + C.circle : ' ')
		+ (basic ? ' bxc b-t bxc-' + C.shadowActive : ' ')
		+ (loading ? ' ' + C.loading : ' ')
		+ ((simple && !disabled) ? ' ' + C.simpleHover : ' ')
		+ ((shadow && !simple && !basic) ? ' ' + C.shadow + shadow : ' ')
		+ ((shadowHover && !disabled && !simple && !basic) ?
		  ' ' + C.shadowHover + shadowHover + ' ' + C.shadowActive : ' ')
		+ (className ? ' ' + className : ' ')
    }
    id={ id }
    style={ style }
  >
    { loading ?
      <>
        <InlineLoader
          height='100%'
          type={ loaderType }
        />
      </>
	  :
      <>
        { dangerouslySetInnerHTML ?
          <span
            dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
          >
          </span> : children }
        { icon && <i className={'icon'}>{ icon }</i>}
      </>
    }
  </button>
)

Button.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  disabled:PropTypes.bool,
  circle:PropTypes.bool,
  loading:PropTypes.bool,
  shadow: PropTypes.string,
  basic: PropTypes.string,
  icon: PropTypes.string,
  iconSide: PropTypes.string,
  shadowHover: PropTypes.string,
  simple: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style:PropTypes.object,
  dangerouslySetInnerHTML:PropTypes.string,
}

const Group = memo(({
  id,
  className,
  children,
  vertical,
  stretch
}) =>
  <div
    className={
	    main_class_group
			+ ( vertical ? ' ' + C.vertical : '' )
			+ ( className ? ' ' + className : '' )
			+ ( stretch == 'horizontal' ? ' ' + C.horizontalStretch : '' )
			+ ( stretch == 'vertical' ? ' ' + C.verticalStretch : '' )
	  }
    id={id}
  >
    { children }
  </div>
)

Group.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  vertical:PropTypes.bool,
  /* shadow: PropTypes.string,
     shadowHover: PropTypes.string, */
  stretch: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style:PropTypes.object,
}

Button.Group = Group

export default Button


//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

