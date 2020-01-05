import React from 'react'

import { action } from '@storybook/addon-actions'
import { Subtitle } from 'ui'

export default {
  title: 'Common|Subtitle',
}

const variants = [
  {
    text:'Stanley Kubrick, 1960',
    link:''
  },
  {
    text:'@Meccamico',
    link:''
  },
  {
    text:'1961 - 2020',
    link:''
  },
  {
    text:'The new destination in Wales',
    link:''
  },
]

export const Default = () =>
  <Subtitle>This is a subtitle</Subtitle>

export const Variants = () =>
  variants.map((e,i) =>
    <Subtitle upper={ i % 2 == 1 }>
      { e.text }
    </Subtitle>
  )
/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
