import React from 'react'

import { action } from '@storybook/addon-actions'
import { Card } from 'ui'
import { SVG } from 'ui'

export default {
  title: 'Elements|Card',
}

const text = `
En su grave rincón, los jugadores
rigen las lentas piezas. El tablero
los demora hasta el alba en su severo
ámbito en que se odian dos colores.

Adentro irradian mágicos rigores
las formas: torre homérica, ligero
caballo, armada reina, rey postrero,
oblicuo alfil y peones agresores.
Cuando los jugadores se hayan ido,
cuando el tiempo los haya consumido,
ciertamente no habrá cesado el rito.

En el Oriente se encendió esta guerra
cuyo anfiteatro es hoy toda la Tierra.
Como el otro, este juego es infinito.
`

const img_src='https://images.pexels.com/photos/157811/pexels-photo-157811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'

export const CardDefault = () =>
  <div className='p2'>
    <Card>
      <Card.Content>
        <h2 className='small'>Ajedrez</h2>
      </Card.Content>
      <Card.Divider/>
      <Card.Content>
        <p dangerouslySetInnerHTML={{__html:text}}>

        </p>
      </Card.Content>
    </Card>
  </div>

export const CardWithHeaderAndFooter = () =>
  <div className='p2'>
    <Card>
      <Card.Header>
        <h2 className='small'>Ajedrez</h2>
      </Card.Header>
      <Card.Divider/>
      <Card.Content>
        <p dangerouslySetInnerHTML={{__html:text}}>

        </p>
      </Card.Content>
      <Card.Divider/>
      <Card.Footer className='ur'>
        <p className=''>Jorge Luis Borges</p>
      </Card.Footer>
    </Card>
  </div>


CardWithHeaderAndFooter.story = {
  name: 'With header & footer',
}

export const CardSelectable = () =>
  <div className='p2'>
    <Card selectable>
      <Card.Header>
        <h2 className='small'>Ajedrez</h2>
      </Card.Header>
      <Card.Divider/>
      <Card.Content>
        <p dangerouslySetInnerHTML={{__html:text}}>

        </p>
      </Card.Content>
    </Card>
    <Card
      selectable
      active
    >
      <Card.Header>
        <h2 className='small'>Ajedrez</h2>
      </Card.Header>

      <Card.Divider/>

      <Card.Content>
        <p dangerouslySetInnerHTML={{__html:text}}>

        </p>
      </Card.Content>
    </Card>
  </div>


CardSelectable.story = {
  name: 'Selectable',
}

export const CardWithImage = () =>
  <div className='p2'>
    <Card style={{ width:'min-content' }}>
      <Card.Header image>
        <img
          src={ img_src }
          alt='alt img'
          className='fit'
          height={200}
          width={350}
        />
      </Card.Header>
      <Card.Content>
        <p dangerouslySetInnerHTML={{__html:text}}>

        </p>
      </Card.Content>
    </Card>
  </div>

CardWithImage.story = {
  name: 'WithImage',
}

export const CardIcon = () =>
  <div className='p2'>
    <Card style={{ width:'min-content' }}>
      <Card.Content>
        <SVG
          width='120'
          target='engine'
          className='f-teal'
          anim
        />
      </Card.Content>

      <Card.Divider/>

      <Card.Footer>
        <p className='uc'>Engine repair</p>
      </Card.Footer>

    </Card>
  </div>

CardIcon.story = {
  name: 'With Icon',
}
/*
    onClick={action('clicked')}
		*/

/*
export const CardVariant = () =>
  <div className='p2'><Card></Card></div>

CardVariant.story = {
  name: 'Variant',
}*/

