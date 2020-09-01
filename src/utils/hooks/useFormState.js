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
    //console.log(777, action)
    return {
      ...state,
      values:{
        ...state.values,
        ...action.payload
      },
    }
  case 'SET_PARSED_VALUE':
    //console.log(888, action)
    return {
      ...state,
      parsed:{
        ...state.parsed,
        ...action.payload
      }
    }
  case 'MERGE_VALUES':
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
  parsers={},
  debounceMs=300,
  ...otherProps
}) => {

  const parseValue = useCallback((value, name) => {
    //console.log('parsing', name, value, parsers[name])
    return parsers[name] ? parsers[name](value) : value

  },[]
  )

  const [state, dispatch=()=>null] = useReducer(reducer, {
    values:initialValues,
    touched:initialTouched,
    errors:initialErrors,
    parsed:Object.keys(initialValues).reduce((a, e) => {
      a[e] = parseValue(initialValues[e])
      return a
    }, {})
  })

  const {
    values,
    touched,
    parsed,
    errors:stateErrors
  } = state

  const handleChange = useCallback(fieldName => event => {
    event.persist()
    dispatch({
      type:'SET_FIELD_VALUE',
      payload: { [fieldName]:event.target.value },
    })
    debounce(dispatch({
      type:'SET_PARSED_VALUE',
      payload:{ [fieldName]:parseValue(event.target.value, fieldName) },
    }), debounceMs)
  }, [debounceMs])

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
      payload:{ [fieldName]:valueSet || new Set([valueToToggle]) },
    })
    debounce(dispatch({
      type:'SET_PARSED_VALUE',
      payload:{ [fieldName]:parseValue(valueSet || new Set([valueToToggle]), fieldName) },
    }), debounceMs)
  }

  const handleToggleSingle = fieldName => event => {
    const value = !values[fieldName] //we toggle the previous value

    dispatch({
      type:'SET_FIELD_VALUE',
      payload:{ [fieldName]:value },
    })
    debounce(dispatch({
      type:'SET_PARSED_VALUE',
      payload:{ [fieldName]:parseValue(value, fieldName) }
    }), debounceMs)
  }

  const handleBlur = useCallback(fieldName => event => {
    dispatch({
      type:'SET_FIELD_TOUCHED',
      payload: { [fieldName]:true },
    })
  }, [])
  const handleFocus = handleBlur //atm they're the same but lets leave the api evolve

  const setInputTouched = handleFocus

  const setInputValue = useCallback(fieldName => value => {
    //console.log('SIV', fieldName, value)
    dispatch({
      type:'SET_FIELD_VALUE',
      payload:{ [fieldName]:value },
    })
    dispatch({
      type:'SET_PARSED_VALUE',
      payload:{ [fieldName]:parseValue(value, fieldName) }
    })
  },
  [parseValue]
  )

  const mergeValues = dictToMerge => {
    dispatch({
      type:'MERGE_VALUES',
      payload: dictToMerge,
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
    onToggleSingle: handleToggleSingle(fieldName), //for multiple value, replaces onChange

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

  useEffect(() => debounce(() => {
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
    setInputValue,
    mergeValues,
    values,
    parsed,
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
