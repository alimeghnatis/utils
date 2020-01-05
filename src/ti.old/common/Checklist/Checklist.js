import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.checklist" */ './checklist.scss')

const main_class = 'checklist'
const cross_class = 'cross'

const Checklist = memo(({
  id,
  className,
  style,
  dangerouslySetInnerHTML,
  children,
}) =>
  <ul
    className={
	  main_class
		//+ (? '':'')
		+ ' ' + C.list
		+ (className ? ' ' + className : '')
    }
    id={ id }
    style={ style }
    dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
  >
    { children }
  </ul>
)

Checklist.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}


const Item = memo(({
  id,
  className,
  style,
  dangerouslySetInnerHTML,
  children,
  cross,
}) =>
  <li
    className={
	  main_class
		//+ (? '':'')
		+ (cross ? ' ' + cross_class : '')
		+ (className ? ' ' + className : '')
    }
    id={ id }
    style={ style }
    dangerouslySetInnerHTML={ dangerouslySetInnerHTML }
  >
    { children }
  </li>
)

Item.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  cross:PropTypes.bool,
  dangerouslySetInnerHTML:PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

Checklist.Item = Item

export default Checklist

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

