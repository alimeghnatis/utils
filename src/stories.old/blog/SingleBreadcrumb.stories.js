import React from 'react'

import { BlogSingle as Single } from 'ui'
import BlogWrapper from './TestBlogWrapper'

export default {
  title: 'Blog|Single/Breadcrumb',
}




const test_category = {
  name:'Italian Books',
  slug:'test-category'
}

export const Default = () =>
  <BlogWrapper>
    <Single.Breadcrumb
      category={ test_category }
    />
  </BlogWrapper>

export const Labels = () =>
  <BlogWrapper>
    <Single.Breadcrumb
      homeLabel='Maison'
      blogLabel='WritingSpace'
      category={ test_category }
    />
  </BlogWrapper>

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
