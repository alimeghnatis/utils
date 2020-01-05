import React from 'react'

import { action } from '@storybook/addon-actions'
import { BlogSingle as Single } from 'ui'
import BlogWrapper from './TestBlogWrapper'
import POST from './data/post.json'

export default {
  title: 'Blog|Single/Body',
}

if(!process.env.BACKEND) import(/* webpackChunkName: "css.article" */ 'ui/blog/common/article.scss')

export const Default = () =>
  <BlogWrapper>
    <div className='article_single'>
      <Single.Body
        title={ POST.title }
        content={ POST.content }
      />
    </div>
  </BlogWrapper>


/*Variant.story = {
    name: 'Variant',
}*/

/*
    onClick={action('clicked')}
    */
