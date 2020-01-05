import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import { Link } from 'react-router-dom'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.breadcrumb" */ './breadcrumb.scss')

const main_class = 'breadcrumb'

const Breadcrumb = memo(({
  id,
  className,
  style,
  children
}) =>
  <ol
    className={
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
    }
    id={ id }
    style={ style }
    itemScope
    itemType='http://schema.org/BreadcrumbList'
  >
    { children }
  </ol>
)

Breadcrumb.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const Element = memo(({
  id,
  className,
  children,
  style,
  disabled,
  itemId,
  to='/',
  position,
}) =>{
  var Wrapper
  const wrapper_args = { itemProp:'item' }
  if (disabled) {
    Wrapper = 'span'
  }
  else {
    Wrapper = Link
    wrapper_args['to'] = to
  }
  return (
    <li
      className={
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
      }
      id={ id }
      style={ style }
      itemProp='itemListElement'
      itemScope
      itemType='http://schema.org/ListItem'
    >
      <Wrapper
        { ...wrapper_args }
      >
        <span
          itemProp='name'
        >
          { children }
        </span>
        { position && <meta
          itemProp='position'
          content={ position }
        />}
        { itemId && <meta
          itemProp='item'
          itemID={ itemId }
        /> }
      </Wrapper>
    </li>
  )
}
)

Element.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  position: PropTypes.number.isRequired,
  disabled:PropTypes.bool,
  to: PropTypes.string,
  itemId: PropTypes.string, //Required except for last
  style:PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired

}

Breadcrumb.El = Element

export default Breadcrumb

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

