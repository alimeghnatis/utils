import React from 'react'

import { action } from '@storybook/addon-actions'
import { SVG } from 'ui'
import {
  BRANDS,
  COLORS,
  SIZES,
} from '../Variables'

export default {
  title: 'Common|SVG',
}

export const SVGDefault = () =>
  <SVG
    height='200'
    width='200'
    target='engine'
  />

export const SVGStroke = () =>
  <SVG
    height='200'
    width='200'
    target='engine'
    stroke
  />


SVGStroke.story = {
  name: 'Stroke',
}

/*
    onClick={action('clicked')}
		*/

export const SVGAnim = () =>
  <SVG
    height='200'
    width='200'
    target='engine'
    stroke
    anim
    className={'c-' + 'red'}
  />


SVGAnim.story = {
  name: 'Anim',
}

export const SVGColorsStroke = () =>
  Object.keys(COLORS).map((e,i) =>
    <>
      <p>{ e }</p>
      <SVG
        key={i}
        height='200'
        width='200'
        target='engine'
        stroke
        anim
        className={'c-' + e}
      />
    </>

  )

SVGColorsStroke.story = {
  name: 'Colors Stroke',
}

export const SVGColorsFill = () =>
  Object.keys(COLORS).map((e,i) =>
    <>
      <p>{ e }</p>
      <SVG
        key={i}
        height='200'
        width='200'
        target='engine'
        className={'f-' + e}
      />
    </>

  )

SVGColorsFill.story = {
  name: 'Colors Fill',
}


export const SVGLogo = () =>
  <div className='b-red'>
    <p>Simple </p>
    <SVG
      height='60'
      sprite='/logo_inline_black.svg'
      target='text'
      viewBox='0 0 1647.1763 251.6029'
      preserveAspectRatio='xMinYMin'
      className='f-teal'
    />
    <p>Complex </p>
    <SVG
      height='60'
      sprite='/logo_inline_black.svg'
      targets={[
        {
          target:'text',
          className:'f-green'
        },
        {
          target:'icon',
          className:'c-white',
          stroke:true,
          strokeWidth:20,
        }
      ]}
      viewBox='0 0 1647.1763 251.6029'
      preserveAspectRatio='xMinYMin'
    />
  </div>

SVGLogo.story = {
  name:'Logo'
}


export const SVGBlog = () =>
  <div className='p1'>
    <SVG
      height='50'
      sprite='/logo_inline_blog.svg'
      targets={[
        {
          target:'text',
          className:'c-orange',
          stroke:true,
          strokeWidth:11,
        },
        {
          target:'icon',
          className:'c-orange',
          stroke:true,
          strokeWidth:11,
        },
        {
          target:'blog_text',
          className:'f-black',
        }
      ]}
      viewBox='-11 -11 1658 280'
      preserveAspectRatio='xMinYMin'
    />
  </div>

SVGBlog.story = {
  name:'Logo Blog'
}
