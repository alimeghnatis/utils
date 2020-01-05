import React from 'react'

import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'
import {
  BRANDS,
  COLORS,
  SIZES,
} from './Variables'

const header_text = `At the birth of the solar system, vast amounts of dust and gas circling the sun coalesced into the eight known planets.`
const header_list = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

const button_text = 'Call to Action'

const paragraph_text = `Depending on the angle of approach, comets and asteroids straying too close to Saturn in the early solar system would have become locked into radically different orbits around the planet. Only three of the new moons have so-called prograde orbits, meaning they circle Saturn in the same direction that it rotates. The other 17 are in retrograde orbits, meaning they orbit the planet backwards. One is the most distant moon ever spotted from the planet. Please call this number for more information 555-119-0285.`
const chars=[' ', '!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?', '@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '[', '\\', ']', '^', '_', '`', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '{', '|', '}', '~']

export default {
  title: 'Others|#Variables'
}

export const sizes = () =>
  <>
    {SIZES.map((e,i) =>
      <>
        <p className={ 's-' + e.toLowerCase()}>{ paragraph_text }</p>
        <button className={ 's-' + e.toLowerCase() }>{ button_text }</button>
      </>
    )}
  </>

sizes.story = {
  name: 'sizes',
}


export const paragraph = () => <p>{ paragraph_text }</p>

paragraph.story = {
  name: 'paragraph',
}

export const headers = () => (
  <>
    { header_list.map((e,i) => {
      const Comp = e
      return (
        <Comp key='i'>{ header_text }</Comp>
      )
    }
    )}
  </>
)

headers.story = {
  name: 'headers',
}

export const h2_text = () => (
  <>
    <h2>{ header_text }</h2>
    <p>{ paragraph_text}</p>
    <h2>{ header_text }</h2>
    <p>{ paragraph_text}</p>
  </>
)

h2_text.story = {
  name: 'H2 with text',
}

export const h3_text = () => (
  <>
    <h3>{ header_text }</h3>
    <p>{ paragraph_text}</p>
    <h3>{ header_text }</h3>
    <p>{ paragraph_text}</p>
  </>
)

h3_text.story = {
  name: 'H3 with text',
}

export const h4_text = () => (
  <>
    <h4>{ header_text }</h4>
    <p>{ paragraph_text}</p>
    <h4>{ header_text }</h4>
    <p>{ paragraph_text}</p>
  </>
)

h4_text.story = {
  name: 'H4 with text',
}


export const h5_text = () => (
  <>
    <h5>{ header_text }</h5>
    <p>{ paragraph_text}</p>
    <h5>{ header_text }</h5>
    <p>{ paragraph_text}</p>
  </>
)

h5_text.story = {
  name: 'H5 with text',
}


export const headers_in_colors = () => (
  <>
    { Object.keys(COLORS).map((e,i) =>
      <h3
        key='i'
        className={ 'c-' + e }
      >
        { e }
        {' '}
:
        {' '}
        { header_text }
      </h3>
    )}
    { Object.keys(BRANDS).map((e,i) =>
      <h3
        key='i'
        className={ 'c-' + e }
      >
        { e }
        {' '}
:
        {' '}
        { header_text }
      </h3>
    )}
  </>
)

headers_in_colors.story = {
  name: 'Colors (headers)',
}

export const icons = () =>
  <>
    {

      chars.map((e,i) => <span>
        <span>{ e }</span>
        {' '}
        { ' ' }
        <span className='fi'>{ e }</span>
        <br/>
                         </span>

      )
    }
  </>

icons.story = {
  name:'Icons'
}

export const text_variables = () =>
  <>
    {
      ['tl', 'ti', 'ts', 'tsm', 'tb', 'tu', 'tv', 'tw', 'tos','to', 'tn'].map((e, i) =>
        <p
          className={e}
          key={i}
        >
          { e }
          { ' : ' }
          { paragraph_text}
        </p>
      )
    }
  </>

text_variables.story = {
  name:'Text classes'
}

export const align = () =>
  <>
    {
      ['ul', 'ur', 'uc', 'uj', 'x-ul uc', 'x-uc ul', 'm-ur s-uj'].map((e, i) =>
        <p
          className={e}
          key={i}
        >
          { e }
          { ' : ' }
          { paragraph_text}
        </p>
      )
    }
  </>

align.story = {
  name:'Paragraph alignment'
}

const img_src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'


export const imageFit = () =>
  <img
    src={ img_src }
    alt='alt img'
    className='fit'
    height={500}
    width={350}
  />


imageFit.story = {
  name:'Image (Fit)'
}

export const Blockquote = () =>
  <blockquote style={{width:'400px'}}>
    { paragraph_text.slice(0,180) }
  </blockquote>
