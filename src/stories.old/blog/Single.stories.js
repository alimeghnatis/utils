import React from 'react'

import { BlogSingle as Single } from 'ui'
import BlogWrapper from './TestBlogWrapper'
import POST from './data/post.json'

export default {
  title: 'Blog|Single',
}

const test_category = {
  name:'Italian Books',
  slug:'test-category'
}

export const Default = () =>
  <BlogWrapper>
    <Single
      post={ POST }
    />
  </BlogWrapper>

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
