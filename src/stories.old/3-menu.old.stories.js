import React from 'react'
import {
  Link
} from 'react-router-dom'

import { action } from '@storybook/addon-actions'
import {
  Menu,
  SVG
} from 'ui'

export default {
  title: 'Menu|Menu',
}

const paragraph_text = `Depending on the angle of approach, comets and asteroids straying too close to Saturn in the early solar system would have become locked into radically different orbits around the planet. Only three of the new moons have so-called prograde orbits, meaning they circle Saturn in the same direction that it rotates. The other 17 are in retrograde orbits, meaning they orbit the planet backwards. One is the most distant moon ever spotted from the planet. 945-111-0200`

export const menu = () =>
  <>
    <Menu>
      <Menu.Header>
        <a href='blog'>
          <SVG
            height='45'
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
        </a>
      </Menu.Header>
    </Menu>
    { [...Array(8)].map((e) =>
      <p>
        { paragraph_text }
      </p>
    ) }
  </>

