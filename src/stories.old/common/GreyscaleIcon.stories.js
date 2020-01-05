import React from 'react'

import { action } from '@storybook/addon-actions'
import { GrayscaleIcon } from 'ui'

export default {
  title: 'Common|GrayscaleIcon',
}

const variants = [
  {
    alt:'Corriere',
    src:'/press_corriere.png',
    link:'blah.com'
  },
  {
    alt:'New York Times',
    src:'/press_nyt.png',
    className:'b-teal',
    link:'blah.com'
  },
  {
    alt:'Stampa',
    src:'/press_stampa.svg',
    className:'b-red',
    link:'blah.com'
  }
]

export const Default = () =>
  <GrayscaleIcon
    { ...variants[0] }
  >
  </GrayscaleIcon>

export const TestClasses = () =>
  variants.map((e,i) =>
    <GrayscaleIcon
      { ...e }
      key={ i }
    >
    </GrayscaleIcon>
  )

export const Inline = () =>
  variants.map(({ className, ...e },i) =>
    <GrayscaleIcon
      { ...e }
      key={ i }
    >
    </GrayscaleIcon>
  )

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
