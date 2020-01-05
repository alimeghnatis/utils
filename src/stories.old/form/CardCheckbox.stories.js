import React from 'react'

import { action } from '@storybook/addon-actions'
import { CardCheckbox } from 'ui'

export default {
  title: 'Form|CardCheckbox',
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
const long_label='Do you own a very complicated and long model of car that is difficult to describe ?'

export const Default = () =>
  <div className='p1'>
    <CardCheckbox
      {...type}
    />
    <CardCheckbox
      {...type}
      name='name2'
      label={ long_label }
    />
  </div>

export const Variant = () =>
  <div className='p1'>
    <CardCheckbox
      {...type}
    />
  </div>

export const ComplexLabel = () =>
  <div className='p1'>
    <CardCheckbox
      {...type}
      ComplexLabel={ () =>
        <span className='nm'>
          <p className='nm'>{ type.label }</p>
          <p className='nm s-sm tu c-red'>Hurry up !</p>
        </span>
      }
    />
    <CardCheckbox
      {...type}
      ComplexLabel={ () =>
        <span className='nm'>
          <p className='nm'>{ long_label }</p>
          <p className='nm s-sm tu c-red'>Hurry up !</p>
        </span>
      }
      name='name2'
    />
  </div>


export const Disabled = () =>
  <div className='p1'>
    <CardCheckbox
      {...type}
      disabled
    />
    <CardCheckbox
      {...type}
      label={ long_label }
      name='name2'
      disabled
    />
  </div>

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
