import ReactGA from 'react-ga'

export default (action='valid', category='Form Button') =>
  ReactGA.event({
    category,
    action,
    transport: 'beacon'
  })

