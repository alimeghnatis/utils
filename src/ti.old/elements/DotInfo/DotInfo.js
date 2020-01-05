import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'
import { Subtitle } from 'ui/common'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.dot_info" */ './dot_info.scss')

const main_class = 'dot_info'

const DotInfo = memo(({
  id,
  className,
  circleClassName,
  style,
  title,
  link,
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
    <div className={
	  'yib wb'
		+ ' ' + C.circle
		+ (circleClassName ? ' ' + circleClassName : '')
    }
    >
    </div>
    <div className={ C.content + ' yib wb ph05' }>
      <Subtitle upper>
        { title }
      </Subtitle>
    </div>
  </div>
)

DotInfo.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  circleClassName: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
  style:PropTypes.object,
}


export default DotInfo

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

