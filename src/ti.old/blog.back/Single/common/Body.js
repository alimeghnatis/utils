import React, { useState, useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import {
  ContentTree,
  ContentTreeContextProvider as ContextProvider,
} from 'ui/site'

import {
  InnerContent as Content,
  AnimatedVCaret
} from 'ui/common'

import { useWindowSize } from 'utils'

//import CONFIG from 'config'

const main_class = 'article_body'

const ArticleBody = memo(({
  id,
  className,
  style,
  title,
  content,
  mobileBreakpoint=900,
}) =>
{
  const [indexOpen, setIndexOpen] = useState(false)
  const [scrollOffset, setScrollOffset] = useState(0)

  const { width:currentWidth } = useWindowSize()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentWidth < mobileBreakpoint) {
        const height = document.getElementById('article_index_cont').getBoundingClientRect().height
        //console.log(940, height, indexOpen)
        setScrollOffset(-height)
      }
      else {
        //console.log(940, 'b', indexOpen)
        setScrollOffset(0)
      }
    }, 100)
    return () => clearTimeout(timer)
  }, [currentWidth, indexOpen, scrollOffset])

  //console.log(941, scrollOffset, 'is the offset for next scroll')

  /*
	const scrollLinkOffset = useMemo(
		() => null,
		[curentWidth]
	)
	*/

  return(
    <ContextProvider >
      <div
        className={
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
        }
        id={ id }
        style={ style }
      >
        <div
          className='local_index_cont nice'
          id='article_index_cont'
        >
          <input
            type='checkbox'
            id='index_open'
            name='index_open'
            checked={ indexOpen }
          />

          <label htmlFor='index_open'>
            <AnimatedVCaret
              active={ indexOpen }
              setActive={ setIndexOpen }
              id='index_arrow'
              className='c-dark-grey ch-grey'
              height='20px'
              strokeWidth='20'
            />
          </label>

          <ContentTree
            content={ content }
            activeClassName='c-accent1 focus'
            elementClassName='c-dark-grey ch-accent2'
            onElementClick={ () => setIndexOpen(false) }
            scrollLinkOffset={ scrollOffset }
            title={ title }
            withScrollLink
          />
        </div>

        <Content
          dangerouslySetInnerHTML={{ __html:content }}
          className='small-h'
        />
      </div>
    </ContextProvider>


  )
}
)

ArticleBody.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  mobileBreakpoint: PropTypes.number.isRequired
}


export default ArticleBody

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

