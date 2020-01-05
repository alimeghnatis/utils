import React from 'react'

//import { action } from '@storybook/addon-actions'

import { InlineLoader } from 'ui'

export default {
  title: 'common|InlineLoader',
  component:InlineLoader,
  parameters: {
    decorators: [
      //storyfn => <div className="">{ storyfn }</div>,
    ]
  }
}

export const Default = () =>
  <InlineLoader></InlineLoader>

export const Variant = () =>
  <InlineLoader></InlineLoader>

