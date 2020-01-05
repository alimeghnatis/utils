
import React from 'react'
import { TestRouter as Router } from '../TestRouter'
import BlogContextProvider from './TestBlogContextProvider'

export default ({ children }) =>
  <Router>
    <BlogContextProvider>
      { children }
    </BlogContextProvider>
  </Router>

