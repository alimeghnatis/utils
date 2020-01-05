import React from 'react'

import { action } from '@storybook/addon-actions'
import { BlogSingle as Single } from 'ui'
import BlogWrapper from './TestBlogWrapper'
import POST from './data/post.json'

export default {
  title: 'Blog|Single/Header',
}


export const Default = () =>
  <BlogWrapper>
    <Single.Header
      className='ulc'
      subtitle={ POST.description }
      subtitleClassName='nc '
      //     subtitle={ POST.description.slice(0,30) } */
      title={ POST.title || POST.title_tag }
      category={ POST.category }
      /* user={ POST.user }
         description={ POST.description } */
      imgSrc={ POST.main_image }
      imgAlt={ POST.meta_description }
    />
  </BlogWrapper>


/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
