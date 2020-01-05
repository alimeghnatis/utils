import React from 'react'

import { action } from '@storybook/addon-actions'
import { Quotation } from 'ui'

export default {
  title: 'Elements|Quotation',
}

const paragraph_text = 'The hour when ye say: \'What good is my justice! I do not see that I am fervour and fuel. The just, however, are fervour and fuel!\''

const cite = 'https://archive.org/stream/thusspokezarathu00nietuoft/thusspokezarathu00nietuoft_djvu.txt'

export const Default = () =>
  <Quotation>{ paragraph_text }</Quotation>

export const WithAuthor = () =>
  <Quotation
    author='F. Nietzsche'
    cite={ cite }
  >
    { paragraph_text }
  </Quotation>

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
