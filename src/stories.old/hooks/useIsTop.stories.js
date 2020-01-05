import React from 'react'

import { action } from '@storybook/addon-actions'
import { useIsTop } from 'utils'

import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../Dummy'

export default {
  title: 'Hooks|useIsTop',
}

const Testf = (props) => {
  const isTop = useIsTop(props)
  return(
    <>
      <div
        style={{ 'position':'fixed', top:'0', left:'0' }}
        className={ isTop ? 'b-blue t' :'b-teal t' }
      >
        {isTop ? 'We\'re at the top\'' : 'We\'ve started scrolling'}
        { (props.offsetPx) &&
						'OffsetPx ' + props.offsetPx
        }
        { (props.initAt == false) &&
						'Init at false'
        }
      </div>
      <div
        dangerouslySetInnerHTML={{ __html:TEXT }}
        style={{ marginTop:'200px' }}
        className='b-off-white'
      />
      { (props.initAt == false) &&
      <div
        dangerouslySetInnerHTML={{ __html:TEXT }}
        style={{ marginTop:'200px' }}
        className='b-black'
        id='tttt'
      />
      }

    </>

  )
}

export const Default = () =>
  <Testf
    activeDefaultId='tttt'
  />

export const InitFalse = () =>
  <Testf
    initAt={ false }
  />

export const Offset400px = () =>
  <Testf
    offsetPx='400'
  />

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
