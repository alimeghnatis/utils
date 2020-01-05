import React from 'react'

import { action } from '@storybook/addon-actions'
import { Heading } from 'ui'

import {
  BRANDS,
  COLORS,
  SIZES,
} from '../Variables'

export default {
  title: 'Elements|Heading',
}

const variants = [
  {
    title:'Spartacus',
    sub:'Stanley Kubrick, 1960',
    as:'h1',
    align:'ul',
    label:'Film',
    labelClassName:'b-blue'
  },
  {
    title:'Lolita',
    sub:'Stanley Kubrick, 1962',
    as:'h2',
    align:'uc',
    label:'Today\'s cinema',
    labelClassName:'b-orange'
  },
  {
    title:'Dr. Strangelove',
    sub:'Stanley Kubrick, 1964',
    as:'h3',
    align:'ur',
    label:'Movie time',
    labelClassName:'b-red'
  },
  {
    title:'2001 : A Space Odyssey',
    sub:'Stanley Kubrick, 1968',
    as:'h4',
    align:'uc',
    label:'The best of 1968',
    labelClassName:'b-green'
  },
  {
    title:'A Clockwork Orange',
    sub:'Stanley Kubrick, 1971',
    as:'p',
    align:'ur',
    label:'An incredible film',
    className:'tb',
    labelClassName:'b-light-grey'
  },
]

export const Default = () =>
  <Heading title={ variants[4].title } />

export const WithSubtitle = () =>
  <Heading
    title={ variants[4].title }
    subtitle={ variants[4].sub }
  />

export const As = () =>
  variants.map((e,i) =>
    <div className='p1'>
      <Heading
        as={ e.as }
        subtitle={ e.sub }
        title={ e.title }
        headingClassName={ e.className }
      >
      </Heading>
    </div>
  )

export const Alignment = () =>
  variants.map((e,i) =>
    <div className='p1'>
      <Heading
        as='h2'
        subtitle={ e.sub }
        title={ e.title }
        className={e.align}
      >
      </Heading>
    </div>
  )

export const Colors = () =>
  Object.keys(COLORS).map((e,i) =>
    <Heading
      as='h3'
      subtitle={ variants[3].sub }
      className={ 'mv1 uc c-' + e }
      title={ variants[3].title }
    >
    </Heading>
  )

export const StrokeColors = () =>
  Object.keys(COLORS).map((e,i) =>
    <Heading
      as='h1'
      subtitle={ variants[3].sub }
      className={ 'mv1 uc ' +(i % 2 == 0 ? 'tu' : '') }
      headingClassName={'ts c-' + e}
      title={ variants[3].title }
    >
    </Heading>
  )

export const WithLabel = () =>
  variants.map((e,i) =>
    <div className='p1'>
      <Heading
        className='uc'
        as={ e.as }
        subtitle={ e.sub }
        title={ e.title }
        label={ e.label }
        headingClassName={ e.className }
        labelClassName={ e.labelClassName + ' s-sm'}
      >
      </Heading>
    </div>
  )

const LabelWrapper = ({ className='', ...props }) =>
  <span
    className={ 'nm h2 sm c-grey' + className }
    {...props}
  />

export const LabelAs = () =>
  variants.slice(0,2).map((e,i) =>
    <div className='p1'>
      <Heading
        as={ e.as }
        labelAs={ LabelWrapper }
        subtitle={ e.sub }
        label={ e.label }
        title={ e.title }
        headingClassName={ e.className }
      >
      </Heading>
    </div>
  )


/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
