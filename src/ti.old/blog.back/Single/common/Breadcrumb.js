import React, { useContext, memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

import { Breadcrumb } from 'ui/elements'
import { BlogContext } from '../../common'

const main_class = 'article_breadcrumb'

const ArticleBreadcrumb = memo(({
  id,
  className='',
  elementClassName='',
  style,
  category={},
  homeLabel='Home',
  homeCanonical='https://mysite.org',
  blogLabel,
}) =>
{
  const {
    blogName,
    blogRelative,
    blogCanonical,
    getCategoryUrlFromSlug,
  } = useContext(BlogContext)

  const breadcrumb_map = [
    {
      to:'/',
      itemId:homeCanonical,
      children:homeLabel,
    },
    {
      to:blogRelative,
      itemId:blogCanonical,
      children:blogLabel || blogName,
    },
    {
      to:getCategoryUrlFromSlug(category.slug),
      children:category.name,
    }
  ]

  return(
    <Breadcrumb
      className={
  		[
          main_class,
          className
        ].join(' ')

	  }
      id={ id }
      style={ style }
    >
      { breadcrumb_map.map((properties,i) =>
        <Breadcrumb.El
          { ...properties }
          className={ elementClassName }
          position={ i +1 }
          key={ i }
        />

      )}
    </Breadcrumb>
  )}

)

ArticleBreadcrumb.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  homeLabel: PropTypes.string,
  blogLabel: PropTypes.string,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
}


export default ArticleBreadcrumb

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

