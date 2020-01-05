import React, { memo } from 'react'
import PropTypes from 'prop-types'
import getClassName from 'utils'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.menu" */ './menu.scss')

const main_class = 'menu'

const Menu = memo(({ children }) =>
  <nav className={
	  main_class
		+ ' b-light-grey c-red p05'
  }
  >
    { children }
  </nav>
)

Menu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

/*
Menu.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};
*/

const Content = memo(({
  id,
  children,
  className,
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const Header = memo(({
  id,
  children,
  className,
}) =>
  <header
    className={
	    //+ (? '':'')
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

const Footer = memo(({
  id,
  children,
  className,
}) =>
  <footer
    className={
	    //+ (? '':'')
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

Menu.Header = Header
Menu.Footer = Footer
Menu.Content = Content

export default Menu

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

