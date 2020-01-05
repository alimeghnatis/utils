import React, { Component } from 'react'
import PropTypes from 'prop-types'
import C from 'ui/cssClasses'

import Context from './Context'

//const main_class = 'content_index'

class ContextProvider extends Component {
  constructor(props){
    super(props)
    this.state = {
      contentTree:[],
      idList:[]
    }
  }

	setContentTree = (html) => {
	  //console.log('THE CONTENT IS', html)
	  const el = document.createElement(null)
	  el.innerHTML = html
	  const elNodeList = this.props.levels == 2 ?
	    el.querySelectorAll('h2, h3') :
	    el.querySelectorAll('h2')
	  const elArray = Array.from(elNodeList)
	  const contentTree = []

	  var a = { children : [] }

	  elArray.forEach((e,i) => {
	    const { id, innerText } = e
	    if (e.tagName.toLowerCase() == 'h2'){
	      if (a.id) {
	        contentTree.push(a)
	        a = { children:[] }
	      }
	      a.id = id
	      a.innerText = innerText
	    }
	    else {
	      a.children.push({
	        id,
	        innerText
	      })
	    }
	     if (i  == elArray.length -1) contentTree.push(a)
	  })

	  const idList = elArray.reduce((a,e) =>
	  {
	    a.push(e.id)
	    return a
	  }
	  , [])

	  this.setState({
	    contentTree,
	    idList
	  })
	}

	render() {
	  //const loading = this.props.initial_data.loading
	  return (
  <Context.Provider
    value={{
      ...this.state,
      setContentTree:this.setContentTree
    }}
  >
    { this.props.children }
  </Context.Provider>
	  )
	}
}

ContextProvider.defaultProps = {
  levels:2,
}

ContextProvider.propTypes = {
  levels: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ContextProvider

//const comparisonFunction = ((p,n) => true)

//export default memo(() => , comparisonFunction)

