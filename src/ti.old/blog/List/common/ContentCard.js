import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import { Link } from 'react-router-dom'

//if(!process.env.BACKEND) import(/* webpackChunkName: "css.article" */ './article.scss')

const main_class = 'article_card'
const card_class = 'inside'
const image_class = 'illu'
const text_class = 'text'
const additional_text_class = 'more'

const ContentCard = memo(({
  id,
  className,
  style,
  post,
  size='xs',
}) =>
  <Link
    to={ post.slug}
    id={ id }
    style={ style }
    className={
	  main_class
			+ '_' + size
			+ ' t'
			+ (className ? ' ' + className : '')
    }
  >
    <div
      className={
        image_class
        /* + ' b'
           + (? '':'') */

      }
    >
      <img
        src={ post.main_image }
        className='fit'
      />
    </div>
    <div className={ text_class }>
      <p className='nm title'>
        <strong className='category'>{ post.category && post.category.name }</strong>
        { post.title }
      </p>
    </div>
    <div className={ additional_text_class }>
      <p className='description'>
        { post.description }
      </p>
    </div>
  </Link>
)

ContentCard.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    main_image: PropTypes.string.isRequired,
    word_count: PropTypes.number.isRequired,
    user: PropTypes.shape({
      id: PropTypes.string,
      first_name: PropTypes.string.isRequired,
      last_name: PropTypes.string.isRequired,
      username: PropTypes.string,
    }),
    category: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      seotext: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  }),
}


export default ContentCard

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

