import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import { format, fromUnixTime } from 'date-fns'
//import { it } from 'date-fns/locale'

const ArticleMeta = memo(({
  sitename,
  canonical,
  post={},
}) =>
  <>
    <span
      itemProp='publisher'
      itemScope
      itemType='http://schema.org/Corporation'
    >
      <meta
        itemProp='name'
        content={ sitename }
      />
    </span>
    <meta
      itemProp='mainEntityOfPage'
      content={ canonical }
    />
    <meta
      itemProp='description'
      content={ post.description }
    />
    <meta
      itemProp='datePublished'
      content={format(fromUnixTime(post.published / 1000),
        'yyyy-MM-dd\'T\'HH:mm:ssX',
        //{locale:it})
      )
      }
    />
    <meta
      itemProp='dateModified'
      content={format(fromUnixTime(post.ts_updated / 1000),
        'yyyy-MM-dd\'T\'HH:mm:ssX')
      }
    />
    <meta
      itemProp='image'
      content={ post.main_image }
    />
    <meta
      itemProp='headline'
      content={ post.title }
    />
    { post.category && <meta
      itemProp='keywords'
      content={ post.category.name }
    />}
  </>

)

ArticleMeta.propTypes = {
  sitename:PropTypes.string,
  canonical:PropTypes.string.isRequired,
  post:PropTypes.object.isRequired,
  /*task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
	}),*/
}


export default ArticleMeta

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

