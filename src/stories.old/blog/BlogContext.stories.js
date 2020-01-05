import React, { useContext }from 'react'

import { action } from '@storybook/addon-actions'
import { BlogContext } from 'ui/blog'
import BlogWrapper from './TestBlogWrapper'

export default {
  title: 'Blog|ContextTester',
}

const Inside = () => {
  const {
    test,
    blogCanonical,
    blogRelative,
    blogName,
    getArticleUrlFromSlug,
    getCategoryUrlFromSlug,
    getAuthorLink,
    formatDateStd,
    formatDateText,
  } = useContext(BlogContext)

  const propertiesToTest = [
    {
      name:'blogRelative',
      func:blogRelative,
      value:'',
      static:true,
    },
    {
      name:'blogCanonical',
      func:blogCanonical,
      value:'',
      static:true,
    },
    {
      name:'blogName',
      func:blogName,
      value:'',
      static:true,
    },
    {
      name:'getArticleUrlFromSlug',
      func:getArticleUrlFromSlug,
      value:'alternatore-auto-cosa-e',
    },
    {
      name:'getCategoryUrlFromSlug',
      func:getCategoryUrlFromSlug,
      value:'moversi-a-milano',
    },
    {
      name:'getAuthorLink',
      func:getAuthorLink,
      value:'meccamico',
    },
    {
      name:'formatDateStd',
      func:formatDateStd,
      value:'1573032000000',
    },
    {
      name:'formatDateText',
      func:formatDateText,
      value:'1573032000000',
    },
  ]

  console.log(999, blogCanonical, getArticleUrlFromSlug, test)
  return(
    <>
      { propertiesToTest.map((e) =>
        <>
          <h5 className=''>{ e.name }</h5>
          <p>
            { e.static ? e.func :
              <>
              <strong>
                  { e.value }
                </strong>
                {' => '}
                {e.func(e.value)}
            </>
            }
          </p>
        </>
      ) }
    </>
  )
}

export const Default = () =>
  <BlogWrapper>
    <Inside />
  </BlogWrapper>

/*Variant.story = {
    name: 'Variant',
}*/

/*
    onClick={action('clicked')}
    */
