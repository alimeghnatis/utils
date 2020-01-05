import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

import { Subtitle } from 'ui/common'
import { Heading, CircleInfo } from 'ui/elements'

import {
  ArticleBody,
  ArticleBreadcrumb
} from './common'
import {
  RelatedArticles,
  UserInfo,
} from '../common'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.article" */ '../common/article.scss')

const main_class = 'article_single'
const a = main_class

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
    <header className='uc'>
      <Heading
        className='mv2'
        as={ 'h1' }
        subtitle={ post.description.slice(0,30) }
        title={ post.title || post.title_tag }
        label={
          <ArticleBreadcrumb
            category={ post.category }
            elementClassName={ 'c-dark-grey ch-off-black' }
            className='s-sm'
          />
        }
        headingClassName='sm'
        labelClassName={ 'fh'}
      />

      <div className='sub uc'>
        <UserInfo user={ post.user }/>
        <p className='txt mv2 ul'><em>{ post.description }</em></p>
      </div>

      <div
        className='img_cont mv3'
      >
        <img
          src={ post.main_image }
          alt={ post.meta_description }
          className='fit b2'
        />
      </div>
    </header>

    <ArticleBody
      title={ post.title || post.title_tag }
      content={ post.content }
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

export default Single

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

