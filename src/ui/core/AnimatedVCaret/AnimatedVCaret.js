import React from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

if(!process.env.BACKEND) {
  import(
    /* webpackChunkName: "css.animated_v_caret" */
    './animated_v_caret.scss'
  )
}

const main_class = 'animated_v_caret'

const AnimatedVCaret = ({
  id,
  className='',
  style,
  strokeWidth=10,
  strokeLinecap='round',
  active=false,
  height,
  width,
  duration='0.6s',
  setActive=() => null,
}) => {
  const lpath_id = (id ? id + '_' + 'lpath' : 'cdown_lpath')
  const rpath_id = (id ? id + '_' + 'rpath' : 'cdown_rpath')

  const swd = strokeWidth / 2 //strokeWidthDistance

  const lpath_initial = `M ${swd} 50 L 50 ${100 - swd}`
  const rpath_initial = `M ${100 - swd} 50 L 50 ${100 - swd}`

  const lpath_active = `M ${swd} 50 L 50 ${swd}`
  const rpath_active = `M ${swd} 50 L 50 ${swd}`

  //const subId = (sub) => id ? id + '_' + sub : sub

  return(
    <div
      className={
        main_class
        //+ (? '':'')
				+ (className ? ' ' + className : '')
				+ (active ? ' ' + C.active : '')
      }
      id={ id }
      style={ style }
      onClick={ () => setActive(!active) }
    >

      <svg
        viewBox='0 0 100 100'
        xmlSpace='preserve'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        preserveAspectRatio='xMinYMin meet'
        height={ height }
        width={ width }
      >
        <g>
          { [swd, 100 - swd].map((e,i) =>
            <line
              strokeLinecap={ strokeLinecap }
              strokeWidth={ strokeWidth }
              stroke='blue'
              x1={ e }
              y1={ 50 }
              x2={ 50 }
              y2={ active ? swd : 100 - swd }
              className={ 'line'+ ( i+1 ) }
            >

              {active ?
                <animate
                  attributeType='XML'
                  attributeName='y2'
                  values={`${100 - swd};82;18;${swd}`}
                  keyTimes='0;.25;.75; 1'
                  dur={ duration }
                  fill='freeze'
                  //dur={ animationDuration + 's' }
                  repeatCount='1'
                  restart='always'
                  begin={`${id}.click`}
                />
						  :
                <animate
                  attributeType='XML'
                  attributeName='y2'
                  values={`${swd};18;82;${100 - swd}`}
                  keyTimes='0;.25;.75; 1'
                  dur={ duration }
                  fill='freeze'
                  //dur={ animationDuration + 's' }
                  repeatCount='1'
                  restart='always'
                  begin={`${id}.click`}
                />
              }

            </line>


          ) }
        </g>
      </svg>
    </div>

  )
}

AnimatedVCaret.propTypes = {
  /**
   * Provide an HTML id to this element
   */
  id: PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className: PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style: PropTypes.object,

  height: PropTypes.string,
  width: PropTypes.string,
  duration: PropTypes.number,
  strokeWidth: PropTypes.number,
  strokeLinecap: PropTypes.string,
  active: PropTypes.bool,
  setActive: PropTypes.func,
}

AnimatedVCaret.defaultProps = {
  strokeWidth:10,
  strokeLinecap:'round',
  active:false,
  duration:'0.6s',
}


export default AnimatedVCaret
