import React, { memo } from 'react'
import PropTypes from 'prop-types'

import C from 'ui/cssClasses'
import P from 'ui/cssPrefixes'

import { Subtitle } from 'ui/common'

import {
  AuthorInfo,
  Body,
  Breadcrumb,
  Header,
  Meta,
  RelatedArticles,
} from './common'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.blog.single" */ './single.scss')

const main_class = P.BLOG.SINGLE

const DEFAULT_TEXT = {
  RELATED:'You might also like'
}

const LabelWrapper = ({ className='', category, ...props }) =>
  <span
    className={ 'nm h2 sm c-grey' + className }
    {...props}
  />

const Single = memo(({
  id,
  className,
  style,
  post,
  TEXT=DEFAULT_TEXT,
}) =>
  <article
    className={
      main_class
      //+ (? '':'')
      + (className ? ' ' + className : '')
    }
    id={ id }
    style={ style }
  >
    <Header
      className='ulc'
      subtitle={ post.description }
      subtitleClassName='nc '
      //     subtitle={ post.description.slice(0,30) } */
      title={ post.title || post.title_tag }
      category={ post.category }
      /* user={ post.user }
         description={ post.description } */
      imgSrc={ post.main_image }
      imgAlt={ post.meta_description }

    />

    <Body
      title={ post.title || post.title_tag }
      content={ post.content }
      user={ post.user }
    />
    <footer>
      <div className='cont'>
        <Subtitle
          upper
          className='s-sm pv05'
        >
          { TEXT.RELATED }
        </Subtitle>
        <RelatedArticles
          posts={ post.related }
        />
      </div>

    </footer>
  </article>
)

Single.propTypes = {
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
}

Single.AuthorInfo = AuthorInfo
Single.Body = Body
Single.Breadcrumb = Breadcrumb
Single.Header = Header
Single.Meta = Meta
Single.RelatedArticles = RelatedArticles

export default Single

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

