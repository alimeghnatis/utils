import React from 'react'

import { action } from '@storybook/addon-actions'
import { BlogSingle as Single } from 'ui'
import POST from './data/post.json'
import BlogWrapper from './TestBlogWrapper'

export default {
  title: 'Blog|Single/AuthorInfo',
}


export const Default = () =>
  <BlogWrapper>
    <Single.AuthorInfo user={ POST.user }/>
  </BlogWrapper>


/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
