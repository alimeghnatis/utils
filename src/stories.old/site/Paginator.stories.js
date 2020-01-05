import React from 'react'

import { action } from '@storybook/addon-actions'
import { Paginator } from 'ui'

import { TestRouter as Router } from '../TestRouter'

export default {
  title: 'Site|Paginator',
}

import POSTS from '../mockData/testposts.json'


var { docs, ...paginator } = POSTS

const { ...pagThree} = paginator
pagThree.page = 2
pagThree.totalPages = 3

const { ...pagNext} = paginator
pagNext.page = 1
pagNext.totalPages = 5

const { ...pagPrev} = paginator
pagPrev.page = 5
pagPrev.totalPages = 5

const { ...pagMulti} = paginator
pagMulti.page = 120
pagMulti.totalPages = 240

const getLink = (page) => `./blahhhh-${page}`

export const First = () =>
  <Router>
    <Paginator
      paginator={ pagNext }
      spread={ 2 }
      getLink={ getLink }
    />
  </Router>

export const Last = () =>
  <Router>
    <Paginator
      paginator={ pagPrev }
      spread={ 2 }
      getLink={ getLink }
    />
  </Router>

export const PreviousAndNext = () =>
  <Router>
    <Paginator
      buttonClassName='s-lg b-grey bh-grey'
      paginator={ paginator }
      //spread={ 1 }
      getLink={ getLink }
    />
  </Router>

export const ThreePages = () =>
  <Router>
    <Paginator
      buttonClassName='s-lg b-grey bh-grey'
      paginator={ pagThree }
      spread={ 4 }
      getLink={ getLink }
    />
  </Router>

export const Stretch = () =>
  <Router>
    <Paginator
      buttonClassName='s-lg b-grey bh-grey'
      paginator={ pagThree }
      spread={ 4 }
      getLink={ getLink }
      stretch
    />
  </Router>

export const ManyPages = () =>
  <Router>
    <Paginator
      buttonClassName='s-md b-green bh-grey'
      paginator={ pagMulti }
      spread={ 4 }
      getLink={ getLink }
    />
  </Router>

export const Current = () =>
  <Router>
    <Paginator
      buttonClassName='s-md b-blue bh-grey'
      currentClassName='s-md b-red bh-grey'
      paginator={ pagMulti }
      spread={ 4 }
      getLink={ getLink }
    />
  </Router>

export const Basic = () =>
  <Router>
    <Paginator
      buttonClassName='s-lg c-blue bh-grey'
      paginator={ pagThree }
      spread={ 4 }
      basic
      getLink={ getLink }
    />
  </Router>

export const CustomLabels = () =>
  <Router>
    <Paginator
      buttonClassName='s-md b-blue bh-grey'
      paginator={ pagThree }
      spread={ 4 }
      TEXT={{ PREV:'GABADI', NEXT:'GABADA' }}
      getLink={ getLink }
    />
  </Router>

export const NoLabels = () =>
  <Router>
    <Paginator
      buttonClassName='s-md b-teal bh-grey'
      currentClassName='s-md b-violet bh-grey'
      paginator={ pagThree }
      spread={ 4 }
      TEXT={{ }}
      getLink={ getLink }
    />
  </Router>

/*Variant.story = {
		name: 'Variant',
}*/

/*
    onClick={action('clicked')}
		*/
