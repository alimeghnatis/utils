import React from 'react'

import { action } from '@storybook/addon-actions'
import { SnapSlider } from 'ui'

export default {
  title: 'Elements|SnapSlider',
}



const Outside = ({className, children}) =>
  <div
    className={'' + className}
    style={{ width:'400px' }}
  >
    { children }
  </div>

const elements_map = [
  {
    back:'blue',
  },
  {
    back:'red',
  },
  {
    back:'orange',
  },
  {
    back:'green',
  },
  {
    back:'white',
  },
  {
    back:'yellow',
  },
]

const Inside = ({ className }) =>
  elements_map.map((e,i) =>
    <div
      className={ className || '' + ' b-' + e.back}
      style={{ minWidth:'200px', height:'200px' }}
    />
  )

export const SnapSliderDefault = () =>
  <Outside className='b-grey'>
    <SnapSlider><Inside /></SnapSlider>
  </Outside>

SnapSliderDefault.story = {
  name: 'Center',
}

export const SnapSliderRight = () =>
  <Outside className='b-grey'>
    <SnapSlider pin='right'><Inside /></SnapSlider>
  </Outside>

SnapSliderRight.story = {
  name: 'Right',
}

export const SnapSliderLeft = () =>
  <Outside className='b-grey'>
    <SnapSlider pin='left'><Inside /></SnapSlider>
  </Outside>

SnapSliderLeft.story = {
  name: 'Left',
}

export const Compact = () =>
  <Outside className='b-grey'>
    <SnapSlider
      compact
      pin='left'
    >
      <Inside />
    </SnapSlider>
  </Outside>

/*
    onClick={action('clicked')}
		*/
