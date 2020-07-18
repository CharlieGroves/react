import React from 'react'
import ReactDOM from 'react-dom'

/* When importing a component, React assumes that you are importing a js file
so you do not have to put .js at the end of './MyInfo' as .js is the default extension */

import MyInfo from './components/MyInfo'

// JSX
ReactDOM.render(<MyInfo />, document.getElementById('root'))