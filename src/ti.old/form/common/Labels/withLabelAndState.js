import React, { memo } from 'react'
import C from 'ui/cssClasses'
import PropTypes from 'prop-types'

import InputLabel from './InputLabel'
import InputState from './InputState'

export default function withLabelAndState(
  ComposedComponent,
){
  return memo((props) =>
    <>
      { props.label &&
      <InputLabel
        htmlFor={ props.prefix + '_' + props.name + (props.id ? '_' + props.id:'')}
        className={ props.labelClassName }
        valid={ props.valid }
        error={ props.error }
        label={ props.label }
        color={ props.colorLabel }
      />
      }
      <ComposedComponent
        {...props}
      />
      { props.displayState &&
      <InputState
        className={ props.stateClassName }
        color={ props.colorState }
        error={ props.error }
      />
      }
    </>
  )
}

/*
withLabelAndState.propTypes = {
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


