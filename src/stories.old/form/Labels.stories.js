import React from 'react'

import { action } from '@storybook/addon-actions'
import { InputState, InputLabel } from 'ui'

export default {
  title: 'Form|InputLabel',
}

const color_map = [
  {
    label:'Enter your e-mail address below',
    color:true,
    valid:true,
    error:false,
    text:'Valid with color'
  },
  {
    label:'Enter your e-mail address below',
    color:true,
    valid:false,
    error:'Please enter your e-mail correctly',
    text:'Error with color'
  },
  {
    label:'Enter your e-mail address below',
    color:true,
    colorValid:'purple',
    colorError:false,
    valid:true,
    error:false,
    text:'Valid with custom color'
  },
  {
    label:'Enter your e-mail address below',
    color:true,
    colorError:'orange',
    valid:false,
    error:'Please enter your e-mail correctly',
    text:'Error with custom color'
  }
]

export const InputLabelDefault = () =>
  <InputLabel label='Please enter your e-mail address below'/>

export const LabelColorsAndStates = () =>
  color_map.map(({ text, ...e }) =>
    <div className='pv2'>
      <p>
        {'Input Label : '}
        { text }
      </p>
      <InputLabel { ...e }/>
    </div>
  )

LabelColorsAndStates.story = {
  name: 'Input Label : States / Colors',
}

export const InputStateDefault = () =>
  <InputState error='Please enter your e-mail address correctly'/>

export const InputStateVariant = () =>
  [color_map[1], color_map[3]].map(({ text, ...e }) =>
    <div className='pv2'>
      <p>
        {'Input state : '}
        { text }
      </p>
      <InputState { ...e }/>
    </div>
  )

InputStateVariant.story = {
  name: 'Input State : Colors',
}

/*
    onClick={action('clicked')}
		*/
