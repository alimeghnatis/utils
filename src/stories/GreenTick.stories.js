import React from 'react'

//import { action } from '@storybook/addon-actions'

import { GreenTick } from 'ui'

export default {
	title: 'common|GreenTick',
	component:GreenTick,
	parameters: {
		decorators: [ 
			//storyfn => <div className="">{ storyfn }</div>,
		]
	}
}

export const Default = () => 
	<GreenTick></GreenTick> 

export const Variant = () => 
		<GreenTick></GreenTick> 

