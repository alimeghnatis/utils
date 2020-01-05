import React, { useContext } from 'react'
import { BlogContext } from 'ui/blog'

import { format, fromUnixTime } from 'date-fns'
import { it } from 'date-fns/locale'


const getArticleUrlFromSlug = (slug) =>
  `/blog/${slug}`

const getCategoryUrlFromSlug = (category_slug, page='') =>
  `/blog/${category_slug}/${page}`

const getAuthorLink = (handle) =>
  `https://twitter.com/${handle}`

const formatDateStd = (timestamp) =>
  format(
    fromUnixTime(timestamp / 1000),
    'yyyy-MM-dd\'T\'HH:mm:ssX',
    {locale:it}
  )

const formatDateText = (timestamp) =>
  format(
    fromUnixTime(timestamp / 1000),
    ' dd MMMM yyyy\' alle \'HH:mm',
    {locale:it},
  )

const blogRelative = `/blog/`

const blogCanonical = `https://mysite.com/blog/`

const blogName = 'Our Blog'

const default_avatar = 'https://cdn.getyourguide.com/img/tour_img-2354830-148.jpg'

const CtxTester = () => {
  const {
    blogCanonical
  } = useContext(BlogContext)
  return(
    blogCanonical
  )
}

const Provider = ({ children }) =>{
  const value = {
    blogRelative,
    blogCanonical,
    blogName,
    getArticleUrlFromSlug,
    getCategoryUrlFromSlug,
    getAuthorLink,
    formatDateStd,
    formatDateText,
    default_avatar,
  }
  console.log('HeyHey')
  return (
    <BlogContext.Provider value={ value } >
      { children }
    </BlogContext.Provider>

  )
}

export default Provider
export { CtxTester }
