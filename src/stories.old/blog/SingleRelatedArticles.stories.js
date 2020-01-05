import React from 'react'

import { action } from '@storybook/addon-actions'
import { BlogSingle as Single } from 'ui'

import { TestRouter as Router } from '../TestRouter'
import POSTS from './data/posts.json'

export default {
  title: 'Blog|Single/RelatedArticles',
}


export const Default = () =>
  <Router>
    <Single.RelatedArticles
      posts={ POSTS.docs.slice(0,3) }
    />
  </Router>

export const Variant = () =>
  <Router>
    <Single.RelatedArticles
      posts={ POSTS.docs.slice(0,3) }
    />
  </Router>


/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
