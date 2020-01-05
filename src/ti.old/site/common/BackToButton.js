import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

import { Button } from 'ui/elements'

import {
  Link as ScrollLink,
  animateScroll as scroll
}
  from 'react-scroll'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.true" */ './back_to_button.scss')

const main_class = 'back_to_button'

const BackToButton = memo(({
  id,
  className,
  style,
  dangerouslySetInnerHTML,
  children,
  label,
  to,
}) => {
  const wp={
    duration:800,
    delay:0
  }
  let Wrapper, wrapper_props
  if (typeof to !== 'string') {
    Wrapper='a',
    wrapper_props={
      onClick:() => scroll.scrollToTop(wp)
    }
  }
  else {
    Wrapper=ScrollLink
    wrapper_props={
      to,
      smooth:true,
      spy:true,
      ...wp
    }
  }
  return (
    <Wrapper
      {...wrapper_props}
      className={
	    main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
	  }
    >
      <Button
        id={ id }
        style={ style }
        dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
        icon='k'
        iconSide='l'
        className='b-light-grey'
      >
        { label || children }
      </Button>
    </Wrapper>

  )

})

BackToButton.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  dangerouslySetInnerHTML: PropTypes.string,
  to:PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}


export default BackToButton

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

