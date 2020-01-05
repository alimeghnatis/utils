import React from 'react'

import { action } from '@storybook/addon-actions'
import { Checklist } from 'ui'

export default {
  title: 'Common|Checklist',
}

const items = [
  {
    content:'An amazing feature'
  },
  {
    content:'Better than an iPhone'
  },
  {
    content:'That you won\'t find somewhere else'
  },
  {
    content:'More than 5 hours of battery life. Only 3kg of weight. Available in 36 colors. Makes less noice than a B2 airplane.',
    className:'cc-red'
  }
]

export const Default = () =>
  <Checklist>
    { items.map(({content, ...e}) =>
      <Checklist.Item>
        { content }
      </Checklist.Item>
    ) }
  </Checklist>

export const OtherColor = () =>
  <Checklist className='cc-green'>
    { items.map(({content, ...e}) =>
      <Checklist.Item {...e}>
        { content }
      </Checklist.Item>
    ) }
  </Checklist>

export const WithCross = () =>
  <Checklist className='cc-green'>
    { items.map(({content, ...e}, i) =>
      <Checklist.Item
        {...e}
        cross={ i%2 == 0 }
      >
        { content }
      </Checklist.Item>
    ) }
  </Checklist>

export const MultilineTest = () =>
  <Checklist style={{width:'200px'}}>
    { items.map(({content, ...e}, i) =>
      <Checklist.Item
        {...e}
      >
        { content }
      </Checklist.Item>
    ) }
  </Checklist>


/*Variant.story = {
		content: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
