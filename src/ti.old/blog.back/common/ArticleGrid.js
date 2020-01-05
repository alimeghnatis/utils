import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.article" */ './article.scss')

const main_class = 'article_grid'

const ArticleGrid = memo(({
  id,
  className,
  style,
  children
}) =>
  <div
    className={
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
    }
    id={ id }
    style={ style }
  >
    { children }
  </div>
)


ArticleGrid.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}


export default ArticleGrid

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

