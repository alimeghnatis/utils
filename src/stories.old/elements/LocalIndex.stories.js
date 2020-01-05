import React from 'react'

import { action } from '@storybook/addon-actions'
import { LocalIndex } from 'ui'
import { TEXT } from '../Dummy'

export default {
  title: 'Elements|LocalIndex',
}

export const LocalIndexDefault = () =>
  <LocalIndex title='In this page'>
    <LocalIndex.El
      title='Old Polluting cars'
    >
      <LocalIndex.El
        title='Hummer'
      />
      <LocalIndex.El
        title='Renault'
      />
      <LocalIndex.El
        title='Fiat'
      />
    </LocalIndex.El>

    <LocalIndex.El
      title='Electric cars'
    >
      <LocalIndex.El
        title='Tesla'
      />
      <LocalIndex.El
        title='Renault'
      />
      <LocalIndex.El
        title='Fiat'
      />
    </LocalIndex.El>

    <LocalIndex.El
      title='Why does it rain more on Tuesdays ?'
    >
      <LocalIndex.El
        title='Tuesdays are no wednesdays'
      />
      <LocalIndex.El
        title='Not all tuesdays are the same'
      />
      <LocalIndex.El
        title='A thunderstorm'
      />
    </LocalIndex.El>
  </LocalIndex>

export const LocalIndexVariant = () =>
  <>
    <LocalIndex>Yo</LocalIndex>
    <div
      className=''
      dangerouslySetInnerHTML={{__html:TEXT}}
    >
    </div>
  </>

LocalIndexVariant.story = {
  name: 'Variant',
}

/*
    onClick={action('clicked')}
		*/
