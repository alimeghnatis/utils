import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.rating" */ './rating.scss')

const main_class = 'rating'
const sub_class = 'stars'

const Rating = memo(({
  id,
  className,
  style,
  title,
  content,
  rating,
  scale=5,
  name,
  text={},
  emptyStars=false,
  round=true,
  back,
  asCard=true,
  animated=true,
  source,
}) =>{
  const noStarChar = emptyStars ? 's':'S' //Depending on the font
  return(
    <div
      className={
	  main_class
        //+ (? '':'')
					+ ' p1'

		+ (className ? ' ' + className : '')
		+ (back ? ' b-' + back : '')
					+ (asCard ? ' sh-sm b ' + C.incard + (!back ? ' b-white' : '') : '')

      }
      id={ id }
      style={ style }
    >
      <p className={ sub_class + ' fi' + (animated ? ' ' + C.anim : '')}>
        <span className='fp'>
          {rating}
          {' '}
        </span>
        { [...Array(scale)].map((e,i) =>
          i < rating ? <span className='yes'>S</span> : <span className='no'>{ noStarChar }</span>
        ) }
      </p>
      <p className={ C.title + '' }>
        { title }
      </p>
      <p className={ C.name + '' }>
        { text.BY ? text.BY : 'By ' }
        {' '}
        <span className={ C.content }>
          { name }
        </span>
      </p>
      <p className={ C.content + '' }>{ content }</p>
      { source &&
      <p className={ C.source + ' ur s-xs' }>
        <a
          href={ source }
          target='_blank'
          className='c-ld t'
          rel='nofollow'
        >
          { source }
        </a>
      </p>
      }
    </div>

  )
}

)

Rating.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  rating: PropTypes.number,
  scale: PropTypes.number,
  style:PropTypes.object,
  text:PropTypes.object,
  emptyStars:PropTypes.boolean,
  round:PropTypes.boolean,
  asCard:PropTypes.boolean,
  back:PropTypes.string,
  source:PropTypes.string,
  animated:PropTypes.boolean,
}


export default Rating

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

