import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.inner_content" */ './inner_content.scss')

const main_class = 'inner_content'

const InnerContent = memo(({
  id,
  className,
  style,
  children,
  dangerouslySetInnerHTML,
}) =>
  <div
    className={
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
    }
    id={ id }
    style={ style }
    dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
  >
    { children }
  </div>
)

InnerContent.propTypes = {
	id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  dangerouslySetInnerHTML:PropTypes.string,
	children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};


export default InnerContent

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

