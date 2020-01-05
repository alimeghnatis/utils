import React, { memo } from 'react'
import PropTypes from 'prop-types'

import C from 'ui/cssClasses'
import P from 'ui/cssPrefixes'

import { Link } from 'react-router-dom'

import { Card, SnapSlider } from 'ui/elements'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.blog.single" */ './related_articles.scss')

const main_class = P.BLOG.SINGLE + 'related_articles'

const RelatedArticleCard = memo(({
  altImg,
  img,
  title,
  category,
  slug,
  label
}) =>
  <Link to={ slug }>
    <Card selectable>
      <Card.Header image>
        <img
          src={ img }
          alt={ altImg }
          className='fit'
        />
      </Card.Header>
      <Card.Content>
        <p className='nm title'>
          <strong className='category'>{ label || (category && category.name) }</strong>
          { title }
        </p>
      </Card.Content>
    </Card>
  </Link>

)

const RelatedArticles = memo(({
  id,
  className,
  style,
  posts
}) =>
  <SnapSlider
    compact
    pin='left'
    className={
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
    }
    id={ id }
    style={ style }
  >
    { posts.map((post,i) =>
      <RelatedArticleCard
        title={ post.title || post.title_tag }
        img={ post.main_image }
        altImg={ post.description || post.meta_description }
        category={ post.category }
        label={ post.label }
        slug={ post.slug }
      />
    )}
  </SnapSlider>
)

RelatedArticles.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
}



export default RelatedArticles

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

