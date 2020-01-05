import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.grayscale_icon" */ './grayscale_icon.scss')

const main_class = 'grayscale_icon'

const GrayscaleIcon = memo(({
  id,
  height='2.2em',
  width,
  src,
  className,
  link,
  alt='Alt img',
}) =>
  <a
    href={ link }
    rel='nofollow'
    target='_blank'
    className={
	  main_class
		+ ' t'
		+ (className ? ' ' + className : '')
	  }
    style={{ height, width }}
  >
    <img
      src={ src }
      alt={ alt }
      className={
        C.content
		//+ (? '':'')
		+ (className ? ' ' + className : '')
		+ ' fit'
      }
      id={ id }
    />
  </a>
,
() => true,
)

GrayscaleIcon.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  source : PropTypes.string,
  height : PropTypes.string,
  width: PropTypes.string,
}


export default GrayscaleIcon

