import React, { useMemo, useEffect, useContext, memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import Context from './Context'

import { LocalIndex } from 'ui/elements'
import { useScrollspy } from 'utils'
import {
  Link as ScrollLink,
}
  from 'react-scroll'


if(!process.env.BACKEND) import(/* webpackChunkName: "css.content_tree" */ './content_tree.scss')

const main_class = 'content_tree'

const defaultDurationFromDistance = (distance) => Math.abs(distance) / 2

const displayTree = (
  tree,
  activeId,
  pastIds,
  onElementClick,
  withScrollLink,
  scrollLinkOffset,
  scrollLinkSmooth,
  scrollLinkDuration,
  options = {
    elementClassName:undefined,
    activeClassName:undefined,
    pastClassName:undefined,
    unfoldActive:false,
  },
) =>{
  const {
    unfoldActive,
    elementClassName,
    activeClassName,
    pastClassName,
  } = options

  const childrenReducer = (a,e) => {
    a.push(e.id)
    return a
  }

  return(
    tree.map((e) =>
      <LocalIndex.El
        key={ e.id }
        title={
          withScrollLink ?
            <ScrollLink
              to={ e.id }
              offset={scrollLinkOffset}
              spy={ false }
              smooth={scrollLinkSmooth}
              duration={scrollLinkDuration}
              onClick={ onElementClick }
              isDynamic={ false }
            >
              { e.innerText }
            </ScrollLink>
            :
            <a
              href={'#' + e.id}
              onClick={ onElementClick }
            >
              { e.innerText }
            </a>
        }
        className={
          (elementClassName || '')
				+ ( activeId == e.id ? ' ' + activeClassName : '' )
				+ ( (pastClassName && pastIds.includes(e.id)) ?
				  ' ' + pastClassName : '' )
        }
      >
        { e.children
					&& (!unfoldActive ||
								(unfoldActive &&
									((activeId == e.id) || e.children.reduce(
									  childrenReducer,
									  []).includes(activeId))
								)
					)
					&& displayTree(e.children, activeId, pastIds, options)
        }
      </LocalIndex.El>
    ))}

const ContentTree = memo(({
  id,
  className,
  style,
  content,
  title,
  elementClassName,
  activeClassName,
  pastClassName,
  unfoldActive,
  onElementClick,
  children,
  offsetPx=-100,
  withScrollLink,
  scrollLinkOffset=0,
  scrollLinkSmooth=true,
  scrollLinkDuration=defaultDurationFromDistance
}) =>{
  const {
    contentTree,
    idList,
    setContentTree
  } = useContext(Context)

  const {
    activeId,
    pastIds
  } = useScrollspy(
    {
      idList,
      offsetPx
    }
  )

  useEffect(
    () => setContentTree(content),
    [content, setContentTree]
  )

  const ContentBlock = useMemo(
    () => displayTree(
      contentTree,
      activeId,
      pastIds,
      onElementClick,
      withScrollLink,
      scrollLinkOffset,
      scrollLinkSmooth,
      scrollLinkDuration,
      {
        elementClassName,
        activeClassName,
        pastClassName,
        unfoldActive,
      }),
    [
      contentTree,
      activeId,
      pastIds,
      elementClassName,
      activeClassName,
      pastClassName,
      withScrollLink,
      scrollLinkOffset,
      scrollLinkSmooth,
      scrollLinkDuration
    ],
  )

  return(
    <LocalIndex
      title={ title }
      className={
        main_class
    //+ (? '':'')
    + (className ? ' ' + className : '')
      }
      id={ id }
      style={ style }
    >
      { children }
      { ContentBlock }
    </LocalIndex>

  )

})

ContentTree.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  elementClassName: PropTypes.string,
  activeClassName: PropTypes.string,
  pastClassName: PropTypes.string,
  unfoldActive: PropTypes.bool,
  offsetPx: PropTypes.number,
  onElementClick:PropTypes.func,
  title: PropTypes.string,
  style:PropTypes.object,
  withScrollLink:PropTypes.bool,
  scrollLinkOffset:PropTypes.number,
  scrollLinkSmooth:PropTypes.bool,
  scrollLinkDuration: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.func
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
}


export default ContentTree

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

