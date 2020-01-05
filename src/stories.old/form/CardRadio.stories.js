import React from 'react'

import { action } from '@storybook/addon-actions'
import { CardRadio } from 'ui'

export default {
  title: 'Form|CardRadio',
}

const type = {
  label:'Do you own a car ?',
  valid:false,
  error:'Please double check the data you entered',
  colorLabel:false,
  colorState:true,
  labelClassName:'',
  stateClassName:'',
  prefix:'ab',
  title:'Basic',
  displayState:true,
  disabled:false,
  name:'name',
  altValue:200,
  altValuePrefix:'€ ',
}

const options = [
  {
    label:'I want a ferrari',
    name:'ferrari',
    altValue:1000,
  },
  {
    label:'I want a Porsche',
    name:'porsche',
    altValue:600,
  },
  {
    label:'I want a Fiat',
    name:'fiat',
    altValue:200,
  },
]

const long_label='Do you own a very complicated and long model of car that is difficult to describe ?'

export const Default = () =>
  <div className='p1'>
    { options.map(({ name:id, ...e },i) =>
      <CardRadio
        {...type}
        {...e}
        name='name'
        id={ id }
      />
    ) }
  </div>


export const Variant = () =>
  <div className='p1'>
    { options.map(({ name:id, ...e },i) =>
      <CardRadio
        {...type}
        {...e}
        name='name'
        id={ id }
      />
    ) }
  </div>

export const ComplexLabel = () =>
  <div className='p1'>
    { options.map(({ name:id, label, ...e },i) =>
      <CardRadio
        {...type}
        {...e}
        ComplexLabel={ () =>
          <span className='nm'>
            <p className='nm'>{ label }</p>
            <p className='nm s-sm tu c-red'>Hurry up !</p>
          </span>
        }
        name='name'
        id={ id }
      />
    ) }
  </div>

export const Disabled = () =>
  <div className='p1'>
    { options.map(({ name:id, ...e },i) =>
      <CardRadio
        {...type}
        {...e}
        name='name'
        id={ id }
        value={ i%3 == 2 ? true : false }
        disabled
      />
    ) }
  </div>

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
