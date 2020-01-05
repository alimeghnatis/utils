import React from 'react'

import { action } from '@storybook/addon-actions'
import { Rating } from 'ui'

export default {
  title: 'Elements|Rating',
}


const ratings_map = [
  {
    rating:5,
    name:'John Doe',
    title:'A very good review',
    content:`Trópico, para que me diste
las manos llenas de color.
Todo lo que yo toque
se llenará de sol. `,
    source:'https://gle.me/ratingJohnDoe'
  },
  {
    rating:4,
    name:'Bocaccio',
    title:'Could have been perfect',
    content:`
		En las tardes sutiles de otras tierras
pasaré con mis ruidos de vidrio tornasol.
Déjame un solo instante
dejar de ser grito y color.
Déjame un solo instante
cambiar de clima el corazón,
`,
    source:'https://gle.me/ratingJohnDoe'
  },
  {
    rating:3,
    name:'Rastapopoulos',
    title:'So-so',
    content:`
		Everything perfect ! Very recommended service
`,
    source:'https://gle.me/ratingJohnDoe'
  },
  {
    rating:2,
    name:'Carlos Pellicer Camara',
    title:'Can do better',
    content:`
		beber la penumbra de una costa desierta,
inclinarme en silencio sobre un recóndito balcón,
ahondarme en el manto de pliegues finos,
dispersarme en la orilla de una suave devoción,
acariciar dulcemente las cabelleras lacias
y escribir con un lápiz muy fino mi meditación.
`,
    source:'https://gle.me/ratingJohnDoe'
  },
  {
    rating:1,
    name:'Friedrich Nietzsche',
    title:'Will not come back',
    content:`
		¡Oh, deja de ser un solo instante
el Ayudante de Campo del sol!
¡Trópico, para qué me diste
las manos llenas de color!
`,
    source:'https://gle.me/ratingJohnDoe'
  },
]

export const RatingDefault = () =>
  <div className='b-yellow p1'>
    {
		  ratings_map.map((e,i) =>
  <Rating
    style={{ width:'400px' }}
    { ...e }
    asCard
  />
		  )}
  </div>

export const RatingNoTitle = () =>
  <div className='b-yellow yf p1'>
    {
		  ratings_map.map(({ title, ...e },i) =>
  <Rating
    style={{ width:'400px' }}
    { ...e }
    asCard
  />
		  )}
  </div>


RatingNoTitle.story = {
  name: 'No Title',
}

export const RatingOnTen = () =>
  <div className='b-yellow p1'>
    {
		  ratings_map.map(({rating, ...e},i) =>
  <Rating
    scale={ 10 }
    rating={ rating + 5 }
    style={{ width:'400px' }}
    { ...e }
    asCard
  />
		  )}
  </div>


RatingOnTen.story = {
  name: 'On Ten',
}

export const RatingEmptyStars = () =>
  <div className='b-yellow p1'>
    {
		  ratings_map.map(( e ,i) =>
  <Rating
    emptyStars
    style={{ width:'400px' }}
    { ...e }
    asCard
  />
		  )}
  </div>


RatingEmptyStars.story = {
  name: 'Empty Star',
}


/*
    onClick={action('clicked')}
		*/
