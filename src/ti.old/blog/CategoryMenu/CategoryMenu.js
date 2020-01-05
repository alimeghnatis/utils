import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import {
  Subtitle,
  SVG
} from 'ui/common'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.category_menu" */ './category_menu.scss')

const main_class = 'category_menu'

const CategoryMenu = memo(({
  id,
  className,
  style,
  query,
}) =>
{
  console.log(9999, query)
  const { loading, error, data } = useQuery(gql(query), {
    variables: { language: 'english' },
  })
  console.log(data)
  return(
    <div
      className={
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
      }
      id={ id }
      style={ style }
    >
      <div className='w g05'>
        { data && data.postCategories.map((e => <div className='uc w3 ph05'>
          <SVG
            height='60'
            width='60'
            sprite='/categories.svg'
            target={ e.icon }
            className={'f-teal'}
          />
          <Subtitle
            upper
            className='r-sm'
          >
            { e.name }
          </Subtitle>
          <p className='mv05 s-sm'>{ e.meta_description }</p>
        </div>
        ))}
      </div>
    </div>
  )
}
)

CategoryMenu.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  query:PropTypes.string,
}


export default CategoryMenu

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

