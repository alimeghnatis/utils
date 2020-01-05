import React from 'react'

import { action } from '@storybook/addon-actions'
import { RoundProgress } from 'ui'

export default {
  title: 'Elements|RoundProgress',
}

const variants = [
  {
    number:45,
    max:100,
    unit:'%',
    className:'',
    title:'Create a company'
  },
  {
    number:95,
    max:100,
    unit:'%',
    title:'Are blond'
  },
  {
    number:4,
    max:5,
    unit:'',
    className:'f-light-grey c-blue',
    title:'Live in an appartment'
  },
  {
    number:60,
    max:60,
    unit:'',
    className:'f-blue c-light-grey',
    title:'Time savings',
  },
  {
    number:10,
    max:100,
    unit:'%',
    className:'f-black c-green',
    title:'Do sports',
  },
]

export const Default = () =>
  <div
    className='p1'
    style={{ width:'200px' }}
  >
    <RoundProgress
      { ...variants[0] }
    />
  </div>

export const Variant = () =>
  variants.map((e,i) =>
    <div
      className='p1'
      style={{ width:150 + 60*i + 'px'}}
    >
      <RoundProgress
        {...e}
      />
    </div>
  )

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
