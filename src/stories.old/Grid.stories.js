import React from 'react'

import { action } from '@storybook/addon-actions'

export default {
  title: 'Others|Grid',
}

const columns = [
  {
    width:1,
    back:'brown'
  },
  {
    width:2,
    back:'pink'
  },
  {
    width:3,
    back:'violet'
  },
  {
    width:4,
    back:'olive'
  },
  {
    width:5,
    back:'purple'
  },
  {
    width:6,
    back:'teal'
  },
  {
    width:7,
    back:'blue'
  },
  {
    width:8,
    back:'light-grey'
  },
  {
    width:9,
    back:'yellow'
  },
  {
    width:10,
    back:'orange'
  },
  {
    width:11,
    back:'green'
  },
  {
    width:12,
    back:'red'
  },
]

export const Default = () =>
  <div className='w'>
    {columns.map((e) =>
      <div
        className={ 'w' + e.width + ' b-' + e.back }
        style={{ height:'200px' }}
      >
        { 'Column '+ e.width + ' wide' }
      </div>
    )}
  </div>

export const SM = () =>
  <div className='w'>
    {columns.map((e) =>
      <div
        className={ 'w' + e.width + '-sm b-' + e.back }
        style={{ height:'200px' }}
      >
        { 'Column '+ e.width + ' wide' }
      </div>
    )}
  </div>

export const MD = () =>
  <div className='w'>
    {columns.map((e) =>
      <div
        className={ 'w' + e.width + '-md b-' + e.back }
        style={{ height:'200px' }}
      >
        { 'Column '+ e.width + ' wide' }
      </div>
    )}
  </div>

export const LG = () =>
  <div className='w'>
    {columns.map((e) =>
      <div
        className={ 'w' + e.width + '-lg b-' + e.back }
        style={{ height:'200px' }}
      >
        { 'Column '+ e.width + ' wide' }
      </div>
    )}
  </div>

export const ColumnGaps = () =>
  ['02', '05', '1', '2'].map((f) =>
    <div className={'w gh' + f}>
      {columns.map((e) =>
        <div
          className={ 'w1 b-' + e.back }
          style={{ height:'200px' }}
        >
          { 'Col '+ e.width + ' wide' }
        </div>
      )}
    </div>
  )


/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
