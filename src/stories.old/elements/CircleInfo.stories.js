import React from 'react'

import { action } from '@storybook/addon-actions'
import { CircleInfo } from 'ui'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'

export default {
  title: 'Elements|CircleInfo',
}

const history = createBrowserHistory()


const map = [
  {
    circle:'b-orange',
    title:'Firedrich Nietzsche',
    subtitle:'A philosopher from the XIXth'
  },
  {
    circle:'b-violet',
    title:'J.S. Bach',
    subtitle:'A composer from the 18th'
  },
  {
    circle:'b-teal',
    title:'Carlos Pellicer',
    subtitle:'The poet from Tabasco'
  },
]

const mapVariant = [
  {
    circle:'b-orange',
    title:'Firedrich Nietzsche',
    subtitle:'@fnietzsche',
    link:'https://twitter.com/fnietzsche',
    image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nietzsche187a.jpg/440px-Nietzsche187a.jpg',
    imageAlt:'Firedrich Nietzsche',
  },
  {
    circle:'b-red',
    title:'J.S. Bach',
    subtitle:'@fnietzsche',
    link:'https://twitter.com/fnietzsche',
    image:'https://upload.wikimedia.org/wikipedia/commons/6/6a/Johann_Sebastian_Bach.jpg',
    imageAlt:'J.S. Bach',
  },
  {
    circle:'b-teal',
    title:'Carlos Pellicer',
    subtitle:'His biography, notes',
    link:'/pellicer',
    image:'https://www.mexicodesconocido.com.mx/wp-content/uploads/2019/02/WhatsApp-Image-2019-02-15-at-7.33.12-PM.jpeg',
    imageAlt:'Carlos Pellicer',
  },
]


export const CircleInfoDefault = () =>
  <>
    {
      map.map((e,i) =>
        <div
          className='p1'
          key={i}
        >
          <CircleInfo
            title={ e.title }
            subtitle={ e.subtitle }
            circleClassName={ e.circle }
          />
        </div>
      )
    }
  </>

export const CircleInfoVariant = () =>
  <Router history={history}>
    <>
      {
	    mapVariant.map((e,i) =>
  <div
    className='p1'
    key={i}
  >
    <CircleInfo
      title={ e.title }
      subtitle={ e.subtitle }
      link={ e.link }
      circleClassName={ e.circle }
    />
  </div>
	    )
	  }
    </>
  </Router>

CircleInfoVariant.story = {
  name: 'With Link',
}


export const CircleInfoWithImage = () =>
  <Router history={history}>
    <>
      {
	    mapVariant.map((e,i) =>
  <div
    className='p1'
    key={i}
  >
    <CircleInfo
      title={ e.title }
      subtitle={ e.subtitle }
      circleClassName={ e.circle }
      image={ e.image }
      imageAlt={ e.imageAlt }
    />
  </div>
	    )
	  }
    </>
  </Router>

CircleInfoWithImage.story = {
  name: 'With Image',
}

/*
    onClick={action('clicked')}
		*/
