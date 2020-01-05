import React from 'react'

import { action } from '@storybook/addon-actions'
import { InlineLoader } from 'ui'

export default {
  title: 'Common|InlineLoader',
}

const item_map=[
  {
    color:'blue',
    height:'40',
  },
  {
    color:'green',
    height:'80',
  },
  {
    color:'white',
    height:'100',
    back:'blue',
  },
  {
    color:'red',
    height:'200',
  }
]

export const InlineLoaderDefault = () =>
  <InlineLoader
    height='200'
    loaderClassName='c-orange b-blue'
  >
  </InlineLoader>

export const InlineLoaderVariant = () =>
  <>
    {
      item_map.map((e,i) =>
        <div className='p1'>
          <InlineLoader
            className={
			    (e.back ? 'b-'+e.back:'')
			  }
            loaderClassName={' c-'+e.color}
            height={e.height }
          />
        </div>
      )
    }
  </>

InlineLoaderVariant.story = {
  name: 'Variant',
}

export const InlineLoaderCircle = () =>
  <>
    {
      item_map.map((e,i) =>
        <div className='p1'>
          <InlineLoader
            className={
			    (e.back ? 'b-'+e.back:'')
			  }
            type='circle'
            loaderClassName={' c-'+e.color}
            height={e.height }
          />
        </div>
      )
    }
  </>

InlineLoaderCircle.story = {
  name: 'Circle',
}

/*
    onClick={action('clicked')}
		*/
