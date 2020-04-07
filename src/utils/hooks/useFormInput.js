import { useContext } from 'react'
//import debounce from 'lodash.debounce'

export default (
  fieldName,
  context,
) => {

  const { getFieldProps } = useContext(context)

  return getFieldProps(fieldName)
}

//https://usehooks.com/useWindowSize/
