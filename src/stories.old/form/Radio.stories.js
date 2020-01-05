import React from 'react'

import { action } from '@storybook/addon-actions'
import { Radio } from 'ui'

export default {
  title: 'Form|Radio',
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
    <Radio
      { ...type }
      name='a'
      id={'a1'}
    >
    </Radio>
    <Radio
      { ...type }
      name='a'
      id={'a2'}
    >
    </Radio>
  </div>

export const Disabled = () =>
  <div className='pv05 ph1'>
    <Radio
      { ...type }
      name='a'
      disabled
      id={'a1'}
    >
    </Radio>
    <Radio
      { ...type }
      name='a'
      value={true}
      disabled
      id={'a2'}
    >
    </Radio>
  </div>

export const Sizes = () =>
  SIZES.map((e,i) =>
    <div className='pv05 ph1'>
      <Radio
        className={ 's-' + e.toLowerCase() }
        { ...type }
        name='a'
        id={'a'+i}
      >
      </Radio>
    </div>
  )

export const DotDefault = () =>
  <div className='pv05 ph1'>
    <Radio
      { ...type }
      variant='dot'
      name='a'
      id='2'
    >
    </Radio>
    <Radio
      { ...type }
      variant='dot'
      name='a'
      id='3'
    >
    </Radio>
  </div>

export const DotSizes = () =>
  SIZES.map((e,i) =>
    <div className='pv05 ph1'>
      <Radio
        className={ 's-' + e.toLowerCase() }
        { ...type }
        variant='dot'
        name='a'
        id={'a'+i}
      >
      </Radio>
    </div>
  )

export const CrossDefault = () =>
  <div className='pv05 ph1'>
    <Radio
      { ...type }
      variant='cross'
      name='a'
      id='2'
    >
    </Radio>
    <Radio
      { ...type }
      variant='cross'
      name='a'
      id='3'
    >
    </Radio>
  </div>

export const CrossSizes = () =>
  SIZES.map((e,i) =>
    <div className='pv05 ph1'>
      <Radio
        className={ 's-' + e.toLowerCase() }
        { ...type }
        variant='cross'
        name='a'
        id={'a'+i}
      >
      </Radio>
    </div>
  )

export const Colors = () =>
  <div className='p1 b-light-grey'>
    <Radio.Group className='b-white b p1 sh-sm'>
      {Object.keys(COLORS).map((e,i) =>
        <div className=' pv05 '>
          <Radio
            className={
              's-lg b-white'
              //+ ' bh-' + e.toLowerCase()
            }
            inputClassName={ 'c-'+e.toLowerCase() }
            key={i}
            variant={ i % 3 == 0 ? 'dot' : (i % 3 == 1 ? 'cross' : '') }
            { ...type }
            label={ type.label + ' ' + e }
            name='a'
            id={'a'+i}
          />
        </div>
      )
      }
    </Radio.Group>
  </div>

export const BackgroundColors = () =>
  <div className='p1 b-light-grey'>
    <Radio.Group className='b-white b p1 sh-sm'>
      {Object.keys(COLORS).map((e,i) =>
        <div className=' pv05 '>
          <Radio
            className={
              's-lg'
          + ' b-' + e.toLowerCase()
            }
            //inputClassName={  }
            key={i}
            variant={ i % 2 == 0 ? 'check' : '' }
            { ...type }
            label={ type.label + ' ' + e }
            name='a'
            id={'a'+i}
          />
        </div>
      )
      }
    </Radio.Group>
  </div>

export const GroupUL = () =>
  <div className='p1 b-light-grey'>
    <Radio.Group className='b-white b p1 sh-sm'>
      { [...Array(5)].map((e,i) =>
        <Radio
          key={i}
          className={
            's-lg'
          }
          inputClassName={ 'c-green' }
          key={i}
          id={'a'+i}
          variant={ i % 2 == 0 ? 'check' : '' }
          { ...type }
          name={'a'}
          Wrapper='li'
        />
      ) }
    </Radio.Group>

  </div>

/* TODO
export const GroupOL = () =>
  <>
    <Radio.Group Wrapper='ol'>
      { [...Array(5)].map((e,i) =>
        <Radio
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
    </Radio.Group>

  </>
	*/


/*
    onClick={action('clicked')}
    */
