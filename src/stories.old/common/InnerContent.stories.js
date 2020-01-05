import React from 'react'

import { action } from '@storybook/addon-actions'
import { InnerContent } from 'ui'

import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../Dummy'

export default {
  title: 'Common|InnerContent',
}

export const Default = () =>
  <InnerContent
    dangerouslySetInnerHTML={{ __html:TEXT }}
  />


/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
