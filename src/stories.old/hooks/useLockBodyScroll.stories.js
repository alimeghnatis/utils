import React, { useState, useLayoutEffect } from 'react'

import { action } from '@storybook/addon-actions'
import { useLockBodyScroll } from 'utils'

import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../Dummy'

export default {
  title: 'Hooks|useLockBodyScroll',
}





function Modal({ title, content, onClose }){

  // Call hook to lock body scroll

  useLockBodyScroll()

  return (

    <div
      className='modal-overlay'
      onClick={onClose}
    >
      <div className='modal'>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>

  )

}

export const Default = () => {

  // State for our modal

  const [modalOpen, setModalOpen] = useState(false)



  return (

    <div>

      <button onClick={() => setModalOpen(true)}>Show Modal</button>

      {modalOpen && (

        <Modal

          title='Try scrolling'

          content="I bet you you can't! Muahahaha 😈"

          onClose={() => setModalOpen(false)}

        />

      )}


      <div
        dangerouslySetInnerHTML={{ __html:TEXT }}
        style={{ marginTop:'200px' }}
        className='b-off-white'
      />

    </div>

  )

}

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
