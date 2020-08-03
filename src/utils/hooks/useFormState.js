import { useReducer, useEffect, useCallback } from 'react'
import debounce from 'lodash.debounce'

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
  case 'SET_ERRORS':
    return {
      ...state,
      errors:action.payload
    }
  default:
    return state
  }
}

export default ({
  initialValues={},
  initialTouched={},
  initialErrors={},
  validation={},
  debounceMs=300,
  ...otherProps
}) => {

  const [state, dispatch] = useReducer(reducer, {
    values:initialValues,
    touched:initialTouched,
    errors:initialErrors
  })

  const {
    values,
    touched,
    errors:stateErrors
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
    //console.log('SIV', fieldName, value)
    dispatch({
      type:'SET_FIELD_VALUE',
      payload: { [fieldName]:value },
    })
  }

  const getFieldProps = fieldName => ({
    //Base Api
    value: state.values[fieldName],
    touched: state.touched[fieldName],
    errors: state.touched[fieldName] && state.errors[fieldName],
    onChange: handleChange(fieldName),
    onBlur:handleBlur(fieldName),
    onFocus:handleFocus(fieldName),

    //Extra Helpers
    onToggle: handleToggle(fieldName), //for multiple value, replaces onChange

    //Extra Api Control
    setInputTouched:setInputTouched(fieldName),
    setInputValue:setInputValue(fieldName)
  })

  /*
   *

  {
    _all:(fields) => (fields.password !== fields.password2 )&& 'Passwords dont match'
    password:(value) =>  (value.length < 6) && 'Password is too short'
  }
   *
   */

  useEffect(debounce(() => {
    var errors = {}

    Object.keys(validation).forEach(key => {
      if (key !== '_all') {
        const value = state.values[key]
        const validate = validation[key]

        const localErrors = validate(value)

        if (localErrors) {
          errors[key] = localErrors
        }
      }
      else {
        const validate = validation[key]
        const localErrors = validate(state.values)
        if (localErrors) {
          errors[key] = localErrors
        }
      }
    })

    //console.log('Errors will be dispatched', errors)

    dispatch({
      type:'SET_ERRORS',
      payload:errors
    })
  }, debounceMs),
  [state.values]
  )

  const isValid = Object.keys(stateErrors).length === 0

  return {
    values,
    touched,
    errors:stateErrors,
    getFieldProps,
    isValid,

    handleChange,
    handleBlur,
    handleToggle,

    dispatch, //provides deeper API control
  }
}

//https://usehooks.com/useWindowSize/
