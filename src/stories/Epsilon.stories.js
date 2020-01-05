import React from 'react'

//import { action } from '@storybook/addon-actions'

import { Epsilon } from 'ui'

export default {
  title: 'Home|Epsilon/3334',
  component:Epsilon,
  parameters: {
    decorators: [
      storyfn => <div
        className=''
        style={{ background:'#DFD100' }}
                 >
				Inside the decorator, about to execute storyFn().
        { storyfn() }
                 </div>,
    ]
  }
}

export const Default = () =>
  <Epsilon></Epsilon>

export const Variant = () =>
  <Epsilon></Epsilon>

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
