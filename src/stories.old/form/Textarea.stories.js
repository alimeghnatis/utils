import React from 'react'

import { action } from '@storybook/addon-actions'
import { Textarea } from 'ui'

export default {
  title: 'Form|Textarea',
}

import {
  BRANDS,
  COLORS,
  SIZES,
} from '../Variables'


const color_map = [
  {

  },

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


const type = {
  label:'Please enter the data below',
  valid:false,
  error:'Please double check the data you entered',
  colorLabel:false,
  colorState:true,
  labelClassName:'',
  stateClassName:'',
  prefix:'ab',
  title:'Basic',
  displayState:true,
  icon:'d'
}

export const Default = () =>
  <div className='p1'>
    <Textarea></Textarea>
  </div>

export const WithLabelAndState = () =>
  <>
    {label_map.map(({title, ...e}) =>
      <div className='b m1 p1 sh-sm b-white'>
        <p className='tb'>{ title }</p>
        <Textarea
          iconSide='l'
          {...e}
        >
        </Textarea>
      </div>
    )}
    <div className='pv3'>_</div>
  </>



export const Disabled = () =>
  <>
    <div className=' p1 b-off-white'>
      <Textarea
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
        <Textarea
          className={
			    's-md'
						+ ' b-' + e.toLowerCase()
						+ ' bh-' + e.toLowerCase()
			  }
          key={i}
			  //iconSide={ i % 2 == 0 ? 'l' : 'r' }
          { ...type }
          disabled
          label={undefined}
          displayState={ false }
        />
      </div>
    )
    }
    <div className='yib p1 b-off-white'>
      <Textarea
        className={ 's-lg' }
        simple
        { ...type }
      >
      </Textarea>
    </div>
  </>



export const Colors = () =>
  <>
    {Object.keys(COLORS).map((e,i) =>
      <div className=' ph1 pv05 b-off-white'>
        <Textarea
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
        </Textarea>
      </div>
    )}

    {Object.keys(BRANDS).map((e,i) =>
      <div className='ph1 pv05 b-off-white'>
        <Textarea
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
        </Textarea>
      </div>
    )}

    <div className='ph1 pv05 b-off-white'>
      <Textarea
        className={ 's-md' }
        simple
        placeholder='Simple textarea (no background), minimal styling'
        { ...type }
        error={ false }
        displayState={ false }
        label={ false }
      />
    </div>
  </>

export const Sizes = () =>
  <>
    {SIZES.map((e,i) =>
      <div className='p1'>
        <Textarea
          className={ 's-' + e.toLowerCase() }
          key={i}
          { ...type }
        >
        </Textarea>
      </div>
    )}
  </>

export const Simple = () =>
  <div className='p1 b-light-grey'>
    <Textarea
      { ...type }
      simple
    />
  </div>


/*
    onClick={action('clicked')}
		*/
