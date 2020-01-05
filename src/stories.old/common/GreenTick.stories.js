import React from 'react'

import { action } from '@storybook/addon-actions'
import { GreenTick } from 'ui'

export default {
  title: 'Common|GreenTick',
}
const sizes = [
  {
    height:'200px',
    back:'black',
  },
  {
    height:'300px',
    back:'blue',
  },
  {
    height:'450px',
    back:'purple',
  },
]

export const Default = () =>
  <GreenTick></GreenTick>


export const Variant = () =>
  sizes.map((e) =>
    <div
      className={'p1 b-' + e.back}
      style={{ height:e.height, width:e.width }}
    >
      <p>
        { e.height }
        {' '}
x
        {' '}
        { e.back }
      </p>
      <GreenTick></GreenTick>
    </div>
  )

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
