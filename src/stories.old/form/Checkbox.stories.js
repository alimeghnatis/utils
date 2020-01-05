import React from 'react'

import { action } from '@storybook/addon-actions'
import { Checkbox } from 'ui'

export default {
  title: 'Form|Checkbox',
}

import {
  BRANDS,
  COLORS,
  SIZES,
} from '../Variables'


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
}


export const Default = () =>
  <div className='pv05 ph1'>
    <Checkbox
      { ...type }
    >
    </Checkbox>
  </div>

export const Disabled = () =>
  <div className='pv05 ph1'>
    <Checkbox
      { ...type }
      disabled
    />
    <Checkbox
      { ...type }
      value={true}
      disabled
    />
  </div>

export const Sizes = () =>
  SIZES.map((e,i) =>
    <div className='pv05 ph1'>
      <Checkbox
        className={ 's-' + e.toLowerCase() }
        { ...type }
        name={i}
      >
      </Checkbox>
    </div>
  )

export const CheckDefault = () =>
  <div className='pv05 ph1'>
    <Checkbox
      { ...type }
      variant='check'
    >
    </Checkbox>
  </div>

export const CheckSizes = () =>
  SIZES.map((e,i) =>
    <div className='pv05 ph1'>
      <Checkbox
        className={ 's-' + e.toLowerCase() }
        { ...type }
        name={i}
        variant='check'
      >
      </Checkbox>
    </div>
  )

export const Colors = () =>
  <>
    {Object.keys(COLORS).map((e,i) =>
      <div className=' pv05 ph1 b-off-white'>
        <Checkbox
          className={
            's-lg b-white'
          //+ ' bh-' + e.toLowerCase()
          }
          inputClassName={ 'c-'+e.toLowerCase() }
          key={i}
          variant={ i % 2 == 0 ? 'check' : '' }
          { ...type }
          name={i}
          label={ type.label + ' ' + e }
        />
      </div>
    )
    }
  </>

export const BackgroundColors = () =>
  <>
    {Object.keys(COLORS).map((e,i) =>
      <div className=' pv05 ph1 b-off-white'>
        <Checkbox
          className={
            's-lg'
          + ' b-' + e.toLowerCase()
          }
          //inputClassName={  }
          key={i}
          variant={ i % 2 == 0 ? 'check' : '' }
          { ...type }
          name={i}
          label={ type.label + ' ' + e }
        />
      </div>
    )
    }
  </>

export const GroupUL = () =>
  <div className='p1 b-light-grey'>
    <Checkbox.Group className='b-white b p1 sh-sm'>
      { [...Array(5)].map((e,i) =>
        <Checkbox
          key={i}
          className={
            's-lg'
          }
          inputClassName={ 'c-green' }
          key={i}
          variant={ i % 2 == 0 ? 'check' : '' }
          { ...type }
          name={i}
          Wrapper='li'
        />
      ) }
    </Checkbox.Group>

  </div>

/* TODO
export const GroupOL = () =>
  <>
    <Checkbox.Group Wrapper='ol'>
      { [...Array(5)].map((e,i) =>
        <Checkbox
          key={i}
          className={
            's-lg'
          }
          //inputClassName={  }
          key={i}
          variant={ i % 2 == 0 ? 'check' : '' }
          { ...type }
          name={i}
          Wrapper='li'
        />
      ) }
    </Checkbox.Group>

  </>
	*/


/*
    onClick={action('clicked')}
    */
