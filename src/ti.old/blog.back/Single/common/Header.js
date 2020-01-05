import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.true" */ './header.scss')

const main_class = 'header'

const Header = memo(({
	id,
	className='',
	style
}) => 
	<div 
		className={
			[
				main_class,
				className
			].join(' ')
	}
		id={ id }
		style={ style }
	>
		<h2>Welcome to the Header component</h2>
	</div>
)

/*
Header.propTypes = {
	id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
	children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};
*/


export default Header

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

