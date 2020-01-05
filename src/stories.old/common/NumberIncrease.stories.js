import React from 'react'

import { action } from '@storybook/addon-actions'
import { NumberIncrease } from 'ui'

export default {
  title: 'Common|NumberIncrease',
}

const variants = [
  {
    number:100,
    duration:1000,
  },
  {
    number:1000,
    duration:1000,
  },
  {
    number:100,
    duration:1000,
  },
  {
    number:100,
    duration:5000,
    suffix:'km'
  },
  {
    number:1000,
    duration:5000,
  },
  {
    number:100,
    duration:5000,
    suffix:'years'
  },
]

export const Default = () =>
  <div className='p1'>
    <p>Num 100 | Duration : 1000</p>
    <NumberIncrease
      number={100}
      duration={1000}
      className='r-lg'
    />
  </div>

export const OtherWrapper = () =>
  <div className='p1'>
    <p>Wrrapper H2 | Num 100 | Duration : 1000</p>
    <NumberIncrease
      number={100}
      duration={1000}
      as='h2'
    />
  </div>

export const Variants = () =>
  variants.map((e,i) =>
    <div className='p1'>
      <p>
Num
        { e.number }
        {' '}
| Duration :
        { e.duration }
        { e.suffix && ' | Suffix : ' + e.suffix }
      </p>
      <NumberIncrease
        number={ e.number }
        duration={ e.duration }
        className='r-lg'
      />
    </div>

  )

export const WithSuffix = () =>
  <div className='p1'>
    <p>Num 100 | Duration : 1000</p>
    <NumberIncrease
      number={100}
      duration={1000}
      suffix={ 'km' }
    />
  </div>

export const WithSuffixClass = () =>
  variants.map((e,i) =>
    <div className='p1'>
      <p>
Num
        { e.number }
        {' '}
| Duration :
        { e.duration }
        { e.suffix && ' | Suffix : ' + e.suffix }
      </p>
      <NumberIncrease
        number={ e.number }
        duration={ e.duration }
        suffix={ i % 2 == 0 ? 'km' : 'years' }
        className='r-lg'
        suffixClassName={ i % 2 == 0 ? 'c-red' : 'c-green' }
      />
    </div>

  )



/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
