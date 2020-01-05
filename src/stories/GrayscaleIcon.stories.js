import React from 'react'

//import { action } from '@storybook/addon-actions'

import { GrayscaleIcon } from 'ui'

export default {
	title: 'common|GrayscaleIcon',
	component:GrayscaleIcon,
	parameters: {
		decorators: [ 
			//storyfn => <div className="">{ storyfn }</div>,
		]
	}
}

export const Default = () => 
	<GrayscaleIcon></GrayscaleIcon> 

export const Variant = () => 
		<GrayscaleIcon></GrayscaleIcon> 

