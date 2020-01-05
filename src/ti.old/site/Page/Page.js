import React, { useContext, memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

import { InnerContent as Content } from 'ui/common'

import Context from './common/Context'
import Section from './common/Section'
import LocalHelmet from './common/LocalHelmet'

import {
  Link as ScrollLink,
}
  from 'react-scroll'

import {
  Heading
} from 'ui/elements'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.page" */ './page.scss')

const main_class = 'page'

const SchemaExtra = memo(({
  canonical
}) =>
  <meta
    itemProp='mainEntityOfPage'
    content={ canonical }
  />
)

const Page = memo(({
  id,
  className,
  style,
  itemType,
  children,
  HELMET,
}) =>
  <Context.Provider
    value={{
			    id:id,
			  }}
  >
    <div
      className={
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
      }
      id={ id }
      style={ style }
      itemType={ itemType }
      itemScope={ itemType && ' ' }
    >
      { itemType &&
      <SchemaExtra
        canonical={ HELMET && HELMET.canonical }
      />
      }
      { HELMET && <LocalHelmet { ...HELMET }/> }

      { children }
    </div>
  </Context.Provider>
)

Page.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  itemType: PropTypes.string,
  style:PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  HELMET:PropTypes.object,
}

Page.Heading = Heading
Page.Section = Section
Page.Content = Content

export default Page

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

