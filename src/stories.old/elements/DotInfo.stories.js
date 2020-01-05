import React from 'react'

import { action } from '@storybook/addon-actions'
import { DotInfo } from 'ui'

export default {
  title: 'Elements|DotInfo',
}

const map = [
  {
    name:'In Progress',
    circle:'b-orange'
  },
  {
    name:'Error',
    circle:'b-red'
  },
  {
    name:'Ready',
    circle:'b-green'
  },
]

export const DotInfoDefault = () =>
  <>
    { map.map((e,i) =>
      <div className='p1'>
        <DotInfo
          title={e.name}
          circleClassName={e.circle}
        />
      </div>

    ) }
  </>

/*
    onClick={action('clicked')}
		*/
