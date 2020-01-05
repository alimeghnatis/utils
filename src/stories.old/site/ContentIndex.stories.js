import React from 'react'

import { action } from '@storybook/addon-actions'
import {
  ContentTree,
  ContentTreeContextProvider as ContextProvider,
} from 'ui'
import { TEXT } from '../Dummy'

export default {
  title: 'Site|ContentTree',
}

export const Default = () =>
  <ContextProvider >
    <ContentTree
      content={ TEXT }
      style={{
    		position:'fixed',
    		top:'0',
    		left:'0',
		    background:'beige'
		  }}
      activeClassName='c-orange'
    />
    <div
      className='content'
      dangerouslySetInnerHTML={{__html:TEXT}}
      style={{ paddingTop:'500px', paddingBottom:'500px' }}
    >

    </div>
  </ContextProvider>

export const PastStyle = () =>
  <ContextProvider >
    <ContentTree
      content={ TEXT }
      style={{
    		position:'fixed',
    		top:'0',
    		left:'0',
		    background:'beige'
		  }}
      pastClassName='c-red ti'
      activeClassName='c-teal'
      elementClassName='nt'
    />
    <div
      className='content'
      dangerouslySetInnerHTML={{__html:TEXT}}
      style={{ paddingTop:'500px', paddingBottom:'500px' }}
    >

    </div>
  </ContextProvider>

export const UnfoldActive = () =>
  <ContextProvider >
    <ContentTree
      content={ TEXT }
      style={{
    		position:'fixed',
    		top:'0',
    		left:'0',
		    background:'beige'
		  }}
      activeClassName='c-teal'
      unfoldActive
    />
    <div
      className='content'
      dangerouslySetInnerHTML={{__html:TEXT}}
      style={{ paddingTop:'500px', paddingBottom:'500px' }}
    >

    </div>
  </ContextProvider>

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
