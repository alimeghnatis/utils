import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import { Subtitle } from 'ui/common'

//if(!process.env.BACKEND) import(/* webpackChunkName: "css.quotation" */ './quotation.scss') //Deprecated

const main_class = 'quotation'

const Quotation = memo(({
  id,
  className,
  style,
  children,
  author,
  cite,
}) =>
  <figure
    className={
	    main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
	  }
    id={ id }
    style={ style }
  >
    <blockquote cite={ cite }>
      { children }
    </blockquote>
    { author &&
    <Subtitle
      as='figcaption'
      className='ur'
    >
      { author }
    </Subtitle>
    }
  </figure>
)

Quotation.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  author: PropTypes.string,
  cite: PropTypes.string,
}

export default Quotation

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

