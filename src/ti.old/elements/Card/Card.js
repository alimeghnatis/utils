import React, { memo, useState } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.card" */ './card.scss')

const main_class = 'card'

const Card = memo(
  ({
    id,
    className,
    children,
    selectable,
    active,
    style,
    onClick,
  }) =>
    <div
      className={
        main_class
    + ' sh-sm b'
    //+ (? '':'')
    + (selectable ? ' ' + C.selectable: '')
    + (active ? ' ' + C.active: '')
    + (className ? ' ' + className : '')
      }
      id={id}
      onClick={onClick}
      style={style}
    >
      { children }
    </div>
)

Card.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  /*task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,*/
  onClick:PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  selectable: PropTypes.bool
}


const Content = memo(({
  id,
  children,
  className,
  image
}) =>
  <div
    className={
      ' '
      //+ (? '':'')
			+ (image ? ' ' + C.image : ' p1')
      + (className ? ' ' + className : '')
    }
    id={id}
  >
    { children }
  </div>
)

Content.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  image:PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const Header = memo(({
  id,
  children,
  className,
  image,
}) =>
  <header
    className={
      ' b-light-grey'
	    //+ (? '':'')
		  + (image ? ' ' + C.image : ' p1')
		  + (className ? ' ' + className : '')
    }
    id={id}
  >
    { children }
  </header>

)

Header.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  image:PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const Footer = memo(({
  id,
  children,
  className,
  image
}) =>
  <footer
    className={
      ' b-off-white'
	    //+ (? '':'')
		+ (image ? ' ' + C.image : ' p1')
    + (className ? ' ' + className : '')
    }
    id={id}
  >
    { children }
  </footer>
)

Footer.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  image:PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}


const Divider = memo(() =>
  <div className='d'/>,
() => true
)

Card.Content = Content
Card.Footer = Footer
Card.Header = Header
Card.Divider = Divider


export default Card

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

