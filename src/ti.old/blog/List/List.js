import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

import {
  Grid,
  ContentCard
} from './common'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.list" */ './list.scss')

const main_class = 'list'

const List = memo(({
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
    <h2>Welcome to the List component</h2>
  </div>
)

/*
List.propTypes = {
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

List.Grid = Grid
List.ContentCard = ContentCard

export default List

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

