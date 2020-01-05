import React from 'react'

import { action } from '@storybook/addon-actions'
import { BackToButton } from 'ui'

export default {
  title: 'Site|BackToButton',
}

export const Default = () =>
  <>
		Scroll down the page...
    <div
      style={{ height:'1000px' }}
      className='b-grey'
    />
    <div
      style={{ height:'1000px' }}
      className='b-blue'
    />
    <BackToButton label='hello hey'/>
  </>

export const Target = () =>
  <>
		Scroll down the page...
    <div
      style={{ height:'1000px' }}
      className='b-blue'
    />
    <h2 id='title'>Title to scroll back to</h2>
    <div
      style={{ height:'1000px' }}
      className='b-grey'
    />
    <BackToButton
      label='hello hey'
      to='title'
    />
  </>

export const CustomChildren = () =>
  <>
		Scroll down the page...
    <h2 id='title'>Title to scroll back to</h2>
    <div
      style={{ height:'1000px' }}
      className='b-blue'
    />
    <div
      style={{ height:'1000px' }}
      className='b-grey'
    />
    <BackToButton
      to='title'
    >
hello
      <b> Hey</b>
      <em> Yahoo</em>
    </BackToButton>
  </>

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
