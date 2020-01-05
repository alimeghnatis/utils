import React from 'react'

import { action } from '@storybook/addon-actions'
import { TextInput } from 'ui'

import {
  BRANDS,
  COLORS,
  SIZES,
} from '../Variables'

export default {
  title: 'Form|TextInput',
}

const type = {
  label:'Please enter the required data below',
  valid:false,
  error:'Please double check the data you entered',
  colorLabel:false,
  colorState:true,
  labelClassName:'',
  stateClassName:'',
  prefix:'ab',
  title:'Basic',
  icon:'d',
  displayState:true,
}

const type_list = [
  'text',
  'email',
  'date',
  'time',
  /* 'month',
     'week',
     'color', */
  'number',
  'password',
  'search',
  'tel',
]

const label_map = [
  {
    label:undefined,
    valid:false,
    error:false,
    colorLabel:false,
    colorState:false,
    labelClassName:'',
    stateClassName:'',
    prefix:'ab',
    name:'name',
    title:'Basic',
  },

  {
    label:undefined,
    valid:false,
    error:false,
    colorLabel:false,
    colorState:false,
    labelClassName:'',
    stateClassName:'',
    prefix:'ab',
    name:'name',
    placeholder:'Custom placeholder goes here',
    title:'Custom Placeholder',
  },

  {
    label:'What\'s your name?',
    valid:false,
    error:false,
    colorLabel:false,
    colorState:false,
    labelClassName:'',
    stateClassName:'',
    prefix:'ab',
    name:'name2',
    title:'With label',
  },

  {
    label:'What\'s your name?',
    valid:true,
    error:false,
    colorLabel:false,
    colorState:false,
    labelClassName:'',
    stateClassName:'',
    prefix:'ab',
    name:'name3',
    title:'Valid',
  },

  {
    label:'What\'s your name?',
    valid:true,
    error:false,
    colorLabel:true,
    colorState:false,
    labelClassName:'',
    stateClassName:'',
    prefix:'ab',
    name:'name4',
    title:'Valid, with ColorLabel',
  },

  {
    label:'What\'s your name?',
    valid:false,
    error:true,
    colorLabel:false,
    colorState:false,
    labelClassName:'',
    stateClassName:'',
    prefix:'ab',
    name:'name5',
    title:'Error',
  },

  {
    label:'What\'s your name?',
    valid:false,
    error:true,
    colorLabel:true,
    colorState:false,
    labelClassName:'',
    stateClassName:'',
    prefix:'ab',
    name:'name6',
    title:'Error, with Color Label',
  },

  {
    label:'What\'s your name?',
    valid:false,
    error:'Please enter a real name',
    displayState:true,
    colorLabel:false,
    colorState:false,
    labelClassName:'',
    stateClassName:'',
    prefix:'ab',
    name:'name7',
    title:'Error, with label and state, no color',
  },
  {
    label:'What\'s your name?',
    valid:false,
    error:'Please enter a real name',
    displayState:true,
    colorLabel:true,
    colorState:true,
    labelClassName:'',
    stateClassName:'',
    prefix:'ab',
    name:'name8',
    title:'Error, with label and state, color',
  },
]

export const Default = () =>
  <div className='p1'>
    <TextInput/>
  </div>

export const TypesAndIcons = () =>
  <>
    {type_list.map((e, i) =>
      <div className='b m1 p1 sh-sm b-white'>
        <p className='tb'>
          {'Type '}
          { e }
        </p>
        <TextInput
          name={ 'data' + i }
          type={e}
          iconSide={ i % 2 == 0 ? 'l' : 'r' }
          { ...type }
        >
        </TextInput>
      </div>
    )}
    <div className='pv3'>_</div>
  </>

export const WithLabelAndState = () =>
  <>
    {label_map.map(({title, ...e}) =>
      <div className='b m1 p1 sh-sm b-white'>
        <p className='tb'>{ title }</p>
        <TextInput
          iconSide='l'
          {...e}
        >
        </TextInput>
      </div>
    )}
    <div className='pv3'>_</div>
  </>


export const Disabled = () =>
  <>
    <div className=' p1 b-off-white'>
      <TextInput
        className={
	    's-md'
	  }
        { ...type }
        icon={false}
        disabled
        label={undefined}
        displayState={ false }
      />
    </div>
    {Object.keys(COLORS).map((e,i) =>
      <div className=' p1 b-off-white'>
        <TextInput
          className={
			    's-md'
						+ ' b-' + e.toLowerCase()
						+ ' bh-' + e.toLowerCase()
			  }
          key={i}
			  //iconSide={ i % 2 == 0 ? 'l' : 'r' }
          { ...type }
          icon={false}
          disabled
          label={undefined}
          displayState={ false }
        />
      </div>
    )
    }
    <div className='yib p1 b-off-white'>
      <TextInput
        className={ 's-lg' }
        simple
        { ...type }
      >
      </TextInput>
    </div>
  </>


/*
    onClick={action('clicked')}
		*/

export const Colors = () =>
  <>
    {Object.keys(COLORS).map((e,i) =>
      <div className=' ph1 pv05 b-off-white'>
        <TextInput
          className={
            's-md'
							+ ' b-' + e.toLowerCase()
							+ ' bh-' + e.toLowerCase()
          }
          key={i}
          name={'i' + i}
          placeholder={ e + ' input for your data' }
          iconSide={ i % 2 == 0 ? 'l' : 'r' }
          { ...type }
          error={ false }
          displayState={ false }
          label={ false }
        >
        </TextInput>
      </div>
    )}

    {Object.keys(BRANDS).map((e,i) =>
      <div className='ph1 pv05 b-off-white'>
        <TextInput
          name={'b' + i}
          className={
            's-md'
							+ ' b-' + e.toLowerCase()
							+ ' bh-' + e.toLowerCase()
          }
          placeholder={ e + ' input for your data' }
          key={i}
          { ...type }
          error={ false }
          displayState={ false }
          label={ false }
        >
        </TextInput>
      </div>
    )}
    <div className=' ph1 pv05 b-off-white'>
      <TextInput
        className={ 's-md' }
        simple
        placeholder='this is a simple input (no background, minimal style'
        name='i'
        { ...type }
        error={ false }
        displayState={ false }
        label={ false }
      >
      </TextInput>
    </div>
  </>

export const Sizes = () =>
  <>
    {SIZES.map((e,i) =>
      <div className='p1'>
        <TextInput
          className={ 's-' + e.toLowerCase() }
          key={i}
          { ...type }
        >
        </TextInput>
      </div>
    )}
  </>

export const Simple = () =>
  <div className='p1 b-light-grey'>
    <TextInput
      { ...type }
      simple
      icon={ false }
    />
  </div>
