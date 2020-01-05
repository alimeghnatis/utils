import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.local_index" */ './local_index.scss')

const main_class = 'local_index'

const LocalIndex = memo(({
  id,
  className,
  style,
  children,
  title
}) =>
  <ul
    className={
      main_class
    + ' lsn c-off-black ' + C.list
    //+ (? '':'')
    + (className ? ' ' + className : '')
    }
    id={ id }
    style={ style }
  >
    <p className={
      C.title
    + ' s-sm tls tu c-grey'
    }
    >
      { title }
    </p>
    { children }
  </ul>
)

LocalIndex.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}


const Element = memo(({
  id,
  className,
  style,
  children,
  title,
}) =>
  <li
    className={
      //+ (? '':'')
      (className ? ' ' + className : '')
    }
    id={ id }
    style={ style }
  >
    <span>{ title }</span>
    { children &&
    <ul className='c-dark-grey'>
      { children }
    </ul>
    }
  </li>
)

Element.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  style:PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

LocalIndex.El = Element

export default LocalIndex

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

