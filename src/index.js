import React from 'react'
import ReactDOM from 'react-dom'

/* 
Use Capital Camel Case for this
This needs to return just one element so wrap in an empty element <>Like this</> if you are trying
To return more than one elements
*/

function MyApp() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

// JSX
ReactDOM.render(<MyApp />, document.getElementById('root'))