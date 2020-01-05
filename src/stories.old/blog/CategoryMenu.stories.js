import React from 'react'

import { action } from '@storybook/addon-actions'
import { CategoryMenu } from 'ui'
import TestClient from '../TestClient'

export default {
  title: 'Blog|CategoryMenu',
}

import QUERY from './graphql/postCategories.graphql'


const ENDPOINT = 'https://s.meccamico.com/graphql'

export const Default = () =>
  <TestClient endpoint={ ENDPOINT }>
    <CategoryMenu query={ QUERY }/>
  </TestClient>

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
