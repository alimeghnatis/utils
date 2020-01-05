import React from 'react'

import { action } from '@storybook/addon-actions'
import { Breadcrumb } from 'ui'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'

export default {
  title: 'Elements|Breadcrumb',
}

const history = createBrowserHistory()

export const BreadcrumbDefault = () =>
  <Router history={history}>
    <Breadcrumb>
      <Breadcrumb.El
        to='blog'
        position={1}
      >
	Blog
      </Breadcrumb.El>
      <Breadcrumb.El
        to='blog'
        position={2}
      >
	Category
      </Breadcrumb.El>
      <Breadcrumb.El
        disabled
        position={3}
      >
	Article
      </Breadcrumb.El>
    </Breadcrumb>
  </Router>

/*
    onClick={action('clicked')}
		*/
