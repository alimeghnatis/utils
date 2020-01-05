import { useEffect } from 'react'
import ReactGA from 'react-ga'

export default (inputName, value, condition, action='valid') => {
  useEffect(() => {
    if(condition) {
      ReactGA.event({
        category: 'Form Input',
        action: `${inputName} ${action}`,
        transport: 'beacon'
      })
    }
  }, [action, condition, inputName, value])
}

