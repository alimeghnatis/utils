import React, { memo } from 'react'
import PropTypes from 'prop-types'
import getClassName from 'utils'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.menu" */ './hamburger_icon.scss')

const main_class = 'hamburger_icon'

const HamburgerIcon = (props) => 
	<div className={
		main_class
		+ ' '
	}>
		<h2>Welcome to the HamburgerIcon component</h2>
	</div>

/*
HamburgerIcon.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};
*/


export default memo(HamburgerIcon)

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

