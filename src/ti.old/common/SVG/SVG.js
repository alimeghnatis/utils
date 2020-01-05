import React, { memo } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) import(/* webpackChunkName: "css.svg" */ './svg.scss')

const main_class = 'sprite'
const stroke_class = 'stroke'

const UseSVG = memo(({
  className,
  sprite,
  target,
  stroke,
  strokeWidth,
}) =>
  <use
    className={
      (className || '')
			+ (stroke ?  ' ' + stroke_class : '')
    }
    href={(sprite || '/s2.svg' ) + (target ? '#' + target : '')}
    style={ strokeWidth ? {'--sw':Number(strokeWidth)} : undefined}
  />
)

UseSVG.propTypes = {
  className: PropTypes.string,
  sprite: PropTypes.string,
  target: PropTypes.string,
  stroke: PropTypes.boolean,
  strokeWidth: PropTypes.number,
}



const SVG = ({
  width,
  height,
  viewBox,
  id,
  className,
  useClassName,
  preserveAspectRatio,
  sprite,
  target,
  targets,
  stroke,
  strokeWidth,
  anim,
}) =>(
  <svg
    xmlns='http://www.w3.org/2000/svg'
    version='1.1'
    preserveAspectRatio={preserveAspectRatio || 'xMinYMin meet'}
    width={width || (!height ? '512' : undefined)}
    height={height || ( !width ? '512' : undefined)}
    viewBox={viewBox || '-4 -4 516 516'}
    id={id}
    className={
      main_class
        + (className ?  ' ' + className : '')
        + (anim ?  ' ' + C.anim : '')
    }
  >
    { !targets ?
      <UseSVG
        className={ useClassName }
        sprite={ sprite }
        target={ target }
        stroke={ stroke }
        strokeWidth={ strokeWidth }
      />
      :
      targets.map((e, i) =>
        <UseSVG
          className={ e.className }
          sprite={ sprite }
          target={ e.target }
          stroke={ e.stroke }
          strokeWidth={ e.strokeWidth }
          key={ i }
        />
      )
    }

  </svg>
)

SVG.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  viewBox: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  useClassName: PropTypes.string,
  preserveAspectRatio:PropTypes.string,
  sprite: PropTypes.string,
  target: PropTypes.string,
  targets: PropTypes.arrayOf(
    PropTypes.exact({
      target: PropTypes.string,
      className: PropTypes.number,
      stroke: PropTypes.boolean,
      strokeWidth: PropTypes.number,
    }),
  ),
  stroke: PropTypes.boolean,
  strokeWidth: PropTypes.number,
  anim: PropTypes.boolean,
}

export default memo(SVG)

