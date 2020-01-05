import React from 'react'

import { action } from '@storybook/addon-actions'
import { Label } from 'ui'
import {
  BRANDS,
  COLORS,
  SIZES,
} from '../Variables'


export default {
  title: 'Common|Label',
}

const variants = [
  {
    content:'Best price today',
    icon:'S'
  },
  {
    content:'25% off',
    className:'b-blue',
    icon:'a'
  },
  {
    content:'Today only',
    className:'b-red',
    icon:'e'
  },
  {
    content:'Only 3 remaining',
    className:'b-green',
    icon:'d'
  },
]

const text = ['h1', 'h2', 'h3', 'h4', 'p']

export const Default = () =>
  <Label>This is a simple label</Label>

export const Variant = () =>
  variants.map((e,i) =>
    <Label className={ e.className }>{ e.content || 'blah' }</Label>
  )

export const Colors = () =>
  <>
    {Object.keys(COLORS).map((e,i) =>
      <div className='yib p1 b-off-white'>
        <Label
          className={ 'b-'+e  + ' bh-' + e}
        >
          { variants[1].content || 'blah'}
        </Label>
      </div>
    )}
    {Object.keys(BRANDS).map((e,i) =>
      <div className='yib p1 b-off-white'>
        <Label
          className={ 'b-'+e + ' bh-' +e }
        >
          { variants[1].content || 'blah'}
        </Label>
      </div>
    )}
    <div className='yib p1 b-off-white'>
      <Label
        simple
        //className={ variants[1].className }
      >
        { variants[1].content || 'blah'}
      </Label>
    </div>
  </>

export const BasicColors = () =>
  <>
    {Object.keys(COLORS).map((e,i) =>
      <div className='yib p1 b-off-white'>
        <Label
          className={ 'c-'+e  + ' bh-' + e}
          basic
        >
          { variants[1].content || 'blah'}
        </Label>
      </div>
    )}
    {Object.keys(BRANDS).map((e,i) =>
      <div className='yib p1 b-off-white'>
        <Label
          className={ 'c-'+e + ' bh-' +e }
          basic
        >
          { variants[1].content || 'blah'}
        </Label>
      </div>
    )}
  </>

export const Sizes = () =>
  <>
    {SIZES.map((e,i) =>
      <div className='p1'>
        <Label
          className={ variants[3].className + ' s-'+e.toLowerCase()}
        >
          { variants[3].content || 'blah'}
        </Label>
      </div>
    )}
  </>

export const InText = () =>
  text.map((e,i)=>{
    const Wrapper=e
    return(
      <div className='p1'>
        <Wrapper className='uc'>
          <Label
            className={ variants[3].className + ' s-sm'}
          >
            { variants[1].content || 'blah'}
          </Label>
				Blue jeans from Levis
        </Wrapper>
      </div>

    )
  }
  )

export const WithIcons = () =>
  <>
    {variants.map((e,i) =>
      <Label
        className={ e.className + ' s-lg'}
        icon
      >
        { e.icon || 'blah'}
      </Label>
    )}
  </>



/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
