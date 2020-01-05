import React from 'react'
import { Meta, Typeset } from '@storybook/addon-docs/blocks'

export default {
  title:'Core|Typography'
}

export const Types = () => (
  <Typeset
    fontSizes={[
      '12px',
      '18px',
      '2rem'
    ]}
    fontWeight={'bold'}
  />

)

