import { useReducer, useEffect, useCallback } from 'react'
//import debounce from 'lodash.debounce'

const reducer = (state, action) => {
  switch (action.type) {
  /* We comment out this base case because we also want input validation
  case 'SET_FIELD_VALUE':
    return {
      ...state,
      values:{
        ...state.values,
        ...action.payload
      }
    }
    */
  case 'SET_FIELD_VALUE':
    return {
      ...state,
      values:{
        ...state.values,
        ...action.payload
      }
    }
  case 'SET_FIELD_MULTIPLE_VALUE':
    return {
      ...state,
      values:{
        ...state.values,
        ...action.payload
      }
    }
  case 'SET_FIELD_TOUCHED':
    return {
      ...state,
      touched:{
        ...state.touched,
        ...action.payload
      }
    }
  default:
    return state
  }
}

export default ({
  initialValues,
  initialTouched,
  ...otherProps
}) => {

  const [state, dispatch] = useReducer(reducer, {
    values:initialValues,
    touched:initialTouched,
  })

  const {
    values,
    touched
  } = state

  const handleChange = fieldName => event => {
    event.persist()
    dispatch({
      type:'SET_FIELD_VALUE',
      payload: { [fieldName]:event.target.value },
    })
  }

  const handleToggle = fieldName => event => {
    event.persist()
    const valueSet = values[fieldName]
    const valueToToggle = event.target.value
    valueSet &&
      (valueSet.has(valueToToggle) ?
        valueSet.delete(valueToToggle) : valueSet.add(valueToToggle)
      )
    //console.warn(97777, valueSet, valueToToggle)

    dispatch({
      type:'SET_FIELD_VALUE',
      payload: { [fieldName]:valueSet || new Set([valueToToggle]) },
    })
  }

  const handleBlur = fieldName => event => {
    dispatch({
      type:'SET_FIELD_TOUCHED',
      payload: { [fieldName]:true },
    })
  }
  const handleFocus = handleBlur //atm they're the same but lets leave the api evolve

  const setInputTouched = handleFocus

  const setInputValue = fieldName => value => {
    console.log('SIV', fieldName, value)
    dispatch({
      type:'SET_FIELD_VALUE',
      payload: { [fieldName]:value },
    })
  }

  const getFieldProps = fieldName => ({
    //Base Api
    value: state.values[fieldName],
    onChange: handleChange(fieldName),
    onBlur:handleBlur(fieldName),
    onFocus:handleFocus(fieldName),

    //Extra Helpers
    onToggle: handleToggle(fieldName), //for multiple value, replaces onChange

    //Extra Api Control
    setInputTouched:setInputTouched(fieldName),
    setInputValue:setInputValue(fieldName)
  })

  console.log('Here in the utils')


  useEffect(() => {
    if (otherProps.validate) {
      const errors = props.validate(state.values)
      dispatch({
        type:'SET_ERRORS',
        payload:errors,
      })
    }
  }
  )

  return {
    values,
    touched,
    getFieldProps,

    handleChange,
    handleBlur,
    handleToggle,

    dispatch, //provides deeper API control
  }
}

//https://usehooks.com/useWindowSize/
