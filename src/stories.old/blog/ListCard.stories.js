import React from 'react'
import POSTS from './data/posts.json'

import BlogWrapper from './TestBlogWrapper'
import { action } from '@storybook/addon-actions'
import { BlogList as List } from 'ui'

export default {
  title: 'Blog|List/ContentCard',
}

export const Default = () =>
  <BlogWrapper>
    <div className='p1'>
      {POSTS.docs.map((e,i) =>
        <List.ContentCard
          key={ i }
          post={ e }
        />
      )}
    </div>
  </BlogWrapper>

const ListFromSize = ( size ) =>
  <BlogWrapper>
    <div className='p1'>
      {POSTS.docs.map((e,i) =>
        <List.ContentCard
          key={ i }
          post={ e }
          size={ size }
        />
      )}
      {POSTS.docs.map((e,i) =>
        <List.ContentCard
          key={ i }
          post={ e }
          size={ size }
        />
      )}
    </div>
  </BlogWrapper>

export const XS = ListFromSize('xs')

export const SM = ListFromSize('sm')

export const MD = ListFromSize('md')

export const XL = ListFromSize('xl')

