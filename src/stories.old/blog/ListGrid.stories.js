import React from 'react'

import BlogWrapper from './TestBlogWrapper'
import { action } from '@storybook/addon-actions'
import { BlogList as List } from 'ui'
import POSTS from './data/posts.json'

export default {
  title: 'Blog|List/Grid',
}

const sizes_map = [
  'xl',
  'sm',
  'sm',
  'xl',
  'sm',
  'sm',
  'sm',
  'xs',
  'xl',
  'md',
  'md',
  'md',
  'md',
]

const back_map = [
  'b-off-black bh-off-black',
  'b-dark-grey bh-dark-grey',
  'b-grey bh-grey',
  'b-light-grey bh-light-grey',
  'b-off-white bh-off-white',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
]


export const Mixed = () =>
  <BlogWrapper>
    <List.Grid>
      {POSTS.docs.map((e,i) =>
        <List.ContentCard
          key={ i }
          post={ e }
          size={ sizes_map[i] }
        />
      )}
      {POSTS.docs.map((e,i) =>
        <List.ContentCard
          key={ i }
          post={ e }
          size={ sizes_map[i] }
        />
      )}
    </List.Grid>
  </BlogWrapper>

export const MixedWithColors = () =>
  <BlogWrapper>
    <List.Grid>
      {POSTS.docs.map((e,i) =>
        <List.ContentCard
          key={ i }
          post={ e }
          className={ back_map[i] }
          size={ sizes_map[i] }
        />
      )}
      {POSTS.docs.map((e,i) =>
        <List.ContentCard
          key={ i }
          post={ e }
          className={ back_map[i +1] }
          size={ sizes_map[i] }
        />
      )}
    </List.Grid>
  </BlogWrapper>

const GridListFromSize = ( size ) =>
  <BlogWrapper>
    <List.Grid>
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
    </List.Grid>

  </BlogWrapper>

export const XS = GridListFromSize('xs')

export const SM = GridListFromSize('sm')

export const MD = GridListFromSize('md')

export const XL = GridListFromSize('xl')

