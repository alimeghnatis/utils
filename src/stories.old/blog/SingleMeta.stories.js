import React from 'react'

import { action } from '@storybook/addon-actions'
import { BlogSingle as Single } from 'ui'
import POST from './data/post.json'

export default {
  title: 'Blog|Single/Meta',
}

export const Default = () =>
  <>
    <Single.Meta
      canonical='mysite.com/blogpost'
      sitename='GABADI'
      post={ POST }
    />
		See source code here
  </>

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
