import React, { memo } from 'react'
//import PropTypes from 'prop-types'

import useInputTracking from './useInputTracking'

export default function withInputTracking(
  ComposedComponent,
){

  return memo((props) =>{

    const trackingCondition = typeof props.trackingCondition === 'undefined' ?
      props.valid :
      props.trackingCondition
    useInputTracking(props.name, props.value, trackingCondition)

    return(
      <ComposedComponent
        {...props}
      />
    )
  }
  )
}


/*
Tracking.propTypes = {
	id: PropTypes.string,
  className: PropTypes.string,
  style:PropTypes.object,
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
	children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};
*/



//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

