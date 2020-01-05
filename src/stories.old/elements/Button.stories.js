import React from 'react'

import { action } from '@storybook/addon-actions'
import { Button } from 'ui'
import {
  BRANDS,
  COLORS,
  SIZES,
} from '../Variables'
import { TestRouter as Router } from '../TestRouter'
import { Link } from 'react-router-dom'

const button_text = (id) => `I am the ${id}button`

const icons_map = [
  {
    'icon':'F',
    'side':'l',
    'text':'Share on Facebook',
    'back':'facebook',
  },
  {
    'icon':'I',
    'side':'l',
    'text':'Share on Instagram',
    'back':'instagram',
    loaderType:'circle',
  },
  {
    'icon':'T',
    'side':'l',
    'text':'Share on Twitter',
    'back':'twitter',
  },
  {
    'icon':'a',
    'side':'r',
    'text':'Car-repair',
    'back':'red',
    loaderType:'circle',
  },
  {
    'icon':'g',
    'side':'r',
    'text':'Right Arrow',
    'back':'green',
  },
  {
    'icon':'d',
    'side':'r',
    'text':'Send e-mail',
    'back':'yellow',
  },
]

export default {
  title: 'Elements|Button',
}

export const Default = () =>
  <>
    <div className='ph1 pv05'>
      <Button>Click me</Button>
    </div>
    <div className='ph1 pv05'>
      <Button disabled>You can't, I'm disabled</Button>
    </div>
  </>

export const Colors = () =>
  <>
    {Object.keys(COLORS).map((e,i) =>
      <div className='yib p1 b-off-white'>
        <Button
          className={
            's-lg'
							+ ' b-' + e.toLowerCase()
							+ ' bh-' + e.toLowerCase()
          }
          key={i}
        >
          { button_text(e + ' ') }
        </Button>
      </div>
    )}
    {Object.keys(BRANDS).map((e,i) =>
      <div className='yib p1 b-off-white'>
        <Button
          className={
            's-lg'
							+ ' b-' + e.toLowerCase()
							+ ' bh-' + e.toLowerCase()
          }
          key={i}
        >
          { button_text(e + ' ') }
        </Button>
      </div>
    )}
    <div className='yib p1 b-off-white'>
      <Button
        className={ 's-lg' }
        simple
      >
        { button_text('simple ') }
      </Button>
    </div>
  </>

export const BasicColors = () =>
  <>
    {Object.keys(COLORS).map((e,i) =>
      <div className='yib p1 b-off-white'>
        <Button
          className={
            's-lg'
							+ ' c-' + e.toLowerCase()
							+ ' bh-' + e.toLowerCase()
          }
          key={i}
          basic
        >
          { button_text(e + ' ') }
        </Button>
      </div>
    )}
    {Object.keys(BRANDS).map((e,i) =>
      <div className='yib p1 b-off-white'>
        <Button
          className={
            's-lg'
							+ ' c-' + e.toLowerCase()
							+ ' bh-' + e.toLowerCase()
          }
          key={i}
          basic
        >
          { button_text(e + ' ') }
        </Button>
      </div>
    )}
  </>


export const ButtonSizes = () =>
  <>
    {SIZES.map((e,i) =>
      <div className='p1'>
        <Button
          className={ 's-' + e.toLowerCase() }
          key={i}
        >
          { button_text(e + ' ') }
        </Button>
      </div>
    )}
  </>


ButtonSizes.story = {
  name: 'Sizes',
}

export const ButtonIconOnly = () =>
  <>
    {icons_map.map((e,i) =>
      <div className='p1'>
        <Button
          className={'s-lg b-' + e.back + ' bh-' + e.back}
          icon={ e.icon }
        >
        </Button>
      </div>
    )}
  </>

ButtonIconOnly.story = {
  name: 'Icon Only',
}

export const ButtonIconOnlyCircle = () =>
  <>
    {icons_map.map((e,i) =>
      <div className='p1'>
        <Button
          className={'s-lg b-' + e.back + ' bh-' + e.back}
          icon={e.icon}
          circle
        >
        </Button>
      </div>
    )}
  </>

ButtonIconOnlyCircle.story = {
  name: 'Icon Only in Circle',
}

export const ButtonIcon = () =>
  <>
    {icons_map.map((e,i) =>
      <div className='p1'>
        <Button
          className={'s-lg b-' + e.back + ' bh-' + e.back}
          iconSide={ e.side }
          icon={e.icon}
        >
          { e.text }
        </Button>
      </div>
    )}
  </>

ButtonIcon.story = {
  name: 'With Icon',
}

export const Group = () =>
  <>
    <div className='p1'>
      <Button.Group>
        {icons_map.slice(2).map((e,i) =>
          <Button
            className={'s-lg b-' + e.back + ' bh-' + e.back}
          >
            { e.text }
          </Button>
        )}
      </Button.Group>
    </div>

    <div className='p1'>
      <Button.Group>
        {icons_map.slice(2,4).map((e,i) =>
          <Button
            className={'s-lg b-' + e.back + ' bh-' + e.back}
            iconSide={ e.side }
            icon={e.icon}
          >
            { e.text }
          </Button>
        )}
      </Button.Group>
    </div>
  </>

export const StretchedGroup = () =>
  <>
    <div className='p1'>
      <Button.Group stretch='horizontal'>
        {icons_map.slice(1, 3).map((e,i) =>
          <Button
            className={'s-lg b-' + e.back + ' bh-' + e.back}
          >
            { e.text }
          </Button>
        )}
      </Button.Group>
    </div>

    <div className='p1'>
      <Button.Group stretch='horizontal'>
        {icons_map.slice(2,4).map((e,i) =>
          <Button
            className={'s-lg b-' + e.back + ' bh-' + e.back}
            iconSide={ e.side }
            icon={e.icon}
          >
            { e.text }
          </Button>
        )}
      </Button.Group>
    </div>
  </>

export const BasicGroup = () =>
  <>
    <div className='p1'>
      <Button.Group>
        {icons_map.slice(2).map((e,i) =>
          <Button
            className={'s-lg c-' + e.back + ' bh-' + e.back}
            basic
          >
            { e.text }
          </Button>
        )}
      </Button.Group>
    </div>

    <div className='p1'>
      <Button.Group>
        {icons_map.slice(2,4).map((e,i) =>
          <Button
            className={'s-lg c-' + e.back + ' bh-' + e.back}
            iconSide={ e.side }
            icon={e.icon}
            basic
          >
            { e.text }
          </Button>
        )}
      </Button.Group>
    </div>
  </>


export const GroupVertical = () =>
  <div className='p1'>
    <Button.Group vertical>
      {icons_map.map((e,i) =>
        <Button
          className={'s-lg b-' + e.back + ' bh-' + e.back}
          iconSide={ e.side }
          icon={e.icon}
        >
          { e.text }
        </Button>
      )}
    </Button.Group>
  </div>

export const GroupWithLinks = () =>
  <Router>
    <div className='p1'>
      <Button.Group>
        {icons_map.slice(2).map((e,i) =>
          <Link to='testLink'>
            <Button
              className={'s-lg b-' + e.back + ' bh-' + e.back}
            >
              { e.text }
            </Button>
          </Link>
        )}
      </Button.Group>
    </div>

    <div className='p1'>
      <Button.Group>
        {icons_map.slice(2,4).map((e,i) =>
          <Link to='testLink'>
            <Button
              className={'s-lg b-' + e.back + ' bh-' + e.back}
              iconSide={ e.side }
              icon={e.icon}
            >
              { e.text }
            </Button>
          </Link>
        )}
      </Button.Group>
    </div>
  </Router>

export const GroupVerticalWithLinks = () =>
  <Router>
    <div className='p1'>
      <Button.Group vertical>
        {icons_map.map((e,i) =>
          <Link to='testLink'>
            <Button
              className={'s-lg b-' + e.back + ' bh-' + e.back}
              iconSide={ e.side }
              icon={e.icon}
            >
              { e.text }
            </Button>
          </Link>
        )}
      </Button.Group>
    </div>
  </Router>

export const ButtonLoading = () =>
  <>
    {icons_map.map((e,i) =>
      <div className='p1'>
        <Button
          className={'s-lg b-' + e.back + ' bh-' + e.back}
          iconSide={ e.side }
          icon={e.icon}
          loading
          loaderType={ e.loaderType }
        >
          { e.text }
        </Button>
      </div>
    )}
  </>


ButtonLoading.story = {
  name: 'Loading',
}

export const AnimatedArrow = () =>
  <>
    <div className='p1'>
      <Button
        vertical
        icon='l'
        iconSide='l'
        className='it b-green'
      >
	Pass your mouve over me !
      </Button>
    </div>
    <div className='p1'>
      <Button
        icon='m'
        iconSide='r'
        className='it b-blue'
      >
	Pass your mouve over me !
      </Button>
    </div>
  </>


/*
    onClick={action('clicked')}
		*/
