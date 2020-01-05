import React, { useContext, memo } from 'react'
import PropTypes from 'prop-types'
import {
  Link as ScrollLink,
}
  from 'react-scroll'
import C from 'ui/cssClasses'
import Context from './Context'


if(!process.env.BACKEND) import(/* webpackChunkName: "css.page" */ './section.scss')

const main_class = 'section'
const caret_down_class = 'caret_down'

const CaretDown = memo(({
  destination,
  duration=900,
  animated
}) => {
  const pageContext = useContext(Context)
  return(
    <div className='row uc'>
      <ScrollLink
        className={
          caret_down_class
          //+ (props.inverted ? ' ' + C.inverted :'')
        }
        to={
          destination
			+ (pageContext.id ? '_' + pageContext.id : '')
        }
        spy={ true}
        smooth={ true }
        duration={ duration }
      >
        <i className='fi'>n</i>
      </ScrollLink>
    </div>
  )
})

const Section = memo(({
  id,
  className,
  style,
  children,
  transparent,
  inverted,
  head,
  caretDown,
  caretDownDuration,
  caretDownAnimated
}) => {
  const { id:contextId }= useContext(Context)
  return (
    <section
      id={ id &&
        (id
			+ (contextId ? '_' + contextId : '')
        )}
      className={
        main_class
          + (head ? ' ' + C.headSection : ' ' + C.section)
          + (className ? ' ' + className : ' pv2')
          + (inverted ? ' ' + C.inverted :'')
          + (transparent ? ' ' + C.transparent :'')
      }
      style={style}
    >
      {children}
      {caretDown &&
        <CaretDown
          destination={ caretDown }
          duration={ caretDownDuration }
          animated={ caretDownAnimated }
        />
      }

    </section>
  )
}
)

Section.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  head:PropTypes.bool,
  transparent:PropTypes.bool,
  inverted:PropTypes.bool,
  caretDown:PropTypes.bool,
  caretDownAnimated:PropTypes.bool,
  caretDownDuration:PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Section
