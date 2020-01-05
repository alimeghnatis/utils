import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import { Subtitle, Label } from 'ui/common'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.heading" */ './heading.scss')

const main_class = 'heading'

const Heading = memo(({
  id,
  className,
  headingClassName,
  subtitleClassName='r-sm',
  labelClassName,
  style,
  children,
  label,
  title,
  subtitle,
  subtitleUpper,
  as:Wrapper = 'p',
  labelAs:LabelWrapper = Label
}) =>
  <div
    className={
	  main_class
		//+ (? '':'')
		+ (className ? ' ' + className : '')
    }
    id={ id }
    style={ style }
  >
    { label &&
    <LabelWrapper
      className={
			    (labelClassName ? ' ' + labelClassName : '')
			  }
    >
      { label }
    </LabelWrapper>
    }

    <Wrapper
      className={
		    C.content
			+ (headingClassName ? ' ' + headingClassName : '')
		  }
    >
      { title }
    </Wrapper>

    { subtitle &&
    <Subtitle
      className={
        (subtitleClassName ? ' ' + subtitleClassName : '')
      }
      upper={ subtitleUpper }
    >
      { subtitle }
    </Subtitle>
    }
    { children }
  </div>
)

Heading.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  headingClassName: PropTypes.string,
  subtitleClassName: PropTypes.string,
  labelClassName: PropTypes.string,
  subtitle:PropTypes.string,
  subtitleUpper:PropTypes.bool,
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  labelAs: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  style:PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default Heading

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

