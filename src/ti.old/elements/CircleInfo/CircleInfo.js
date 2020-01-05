import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import { Link } from 'react-router-dom'
import { Subtitle } from 'ui/common'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.circle_info" */ './circle_info.scss')

const main_class = 'circle_info'

const CircleInfo = memo(({
  id,
  className,
  circleClassName,
  title,
  subtitle,
  link,
  style,
  image,
  imageAlt
}) => {
  var Wrapper, wrapperArgs
  if (link){
    if(link.startsWith('/')) {
      Wrapper = Link
      wrapperArgs = {
        to:link
      }
    } else {
      Wrapper = 'a'
      wrapperArgs = {
        href:link,
        target:'_blank',
        rel:'nofollow'
      }
    }
  } else {
    Wrapper = React.Fragment
    wrapperArgs={}

  }
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
      <div className={
	  'yib wb'
		+ ' ' + C.circle
		+ (circleClassName ? ' ' + circleClassName : '')
      }
      >
        { image &&
        <img
          src={ image }
          alt={ imageAlt }
          className='row fit'
          height='100%'
        />
        }
      </div>
      <div className={ C.content + ' yib wb' }>
        <div className='inside p05'>
          <Wrapper {...wrapperArgs}>
            <p
              className='fh c-off-black nm'
            >
              { title }
            </p>
            <Subtitle
              //upper
              className='r-sm'
            >
              { subtitle }
            </Subtitle>
          </Wrapper>
        </div>
      </div>
    </div>
  )	}
)

CircleInfo.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
}

export default CircleInfo

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

