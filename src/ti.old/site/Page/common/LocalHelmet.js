import React, { useMemo, memo } from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'




const helmet_map = [
  {
    variables:['robots'],
    render:(v) =>
      `<meta name='robots' content=${ v || '"index, follow"'} />`
  },


  {
    variables:['title_tag', 'title'],
    render:(v) =>
      `<title>${v}</title>`
  },

  {
    variables:['meta_description'],
    render:(v) =>
      `<meta name='description' content=${v} />`
  },

  {
    variables:['canonical'],
    render:(v) =>
      `<link rel='canonical' href=${v} />`
  },

  {
    variables:['twitter_title', 'title', 'title_tag'],
    render:(v) =>
      `<meta name='twitter:title' content=${ v } />`
  },

  {
    variables:['twitter_description', 'meta_description'],
    render:(v) =>
      `<meta name='twitter:description' content={v}/>`
  },

  {
    test:true,
    variables:['twitter_image, main_image'],
    render:(v) =>
      `<meta name='twitter:image' content=${ v } />`
  },

  {
    variables:['og_title','title', 'title_tag'],
    render:(v) =>
      `<meta property='og:title' content=${ v } />`
  },

  {
    variables:['og_description', 'meta_description'],
    render:(v) =>
      `<meta property='og:description' content=${ v } />`
  },

  {
    test:true,
    variables:['og_image', 'main_image'],
    render:(v) =>
      `<meta property='og:image' content=${ v } />`
  },

  {
    test:true,
    variables:['og_type'],
    render:(v) =>
      `<meta property='og:type' content=${ v || '"article"' } />`
  },

  {
    variables:['og_url'],
    render:(v) =>
      `<meta property='og:url' content=${ v } />`
  },

]

const conditionMatchAndGetProps = (props) =>
  helmet_map.reduce((a,
    { variables, render, test }
  ) =>{
    var current, content = ''
    for (var key in variables) {
      if (props[variables[key]]) {
        content = props[variables[key]]
        break
      }
    }
    if (typeof test === 'undefined' || (test && content.length)) {
      current = render(content)
    }
    return a + current
  }
  ,'')


const LocalHelmet = memo(({
  ...props
}) => {
  const HelmetProps = useMemo(() => conditionMatchAndGetProps(props), [props])
  return (
    <Helmet>
      { HelmetProps }
    </Helmet>


  )
})

LocalHelmet.propTypes = {
  robots: PropTypes.string,
  title: PropTypes.string.isRequired,
  title_tag: PropTypes.string,
  canonical: PropTypes.string.isRequired,
  meta_description: PropTypes.string,
  twitter_title: PropTypes.string,
  twitter_description: PropTypes.string,
  twitter_image: PropTypes.string,
  og_title: PropTypes.string,
  og_description: PropTypes.string,
  og_image: PropTypes.string,
  og_type: PropTypes.string,
  og_url: PropTypes.string,
  /* : PropTypes.string.isRequired,
     : PropTypes.string, */
}

export default LocalHelmet

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

