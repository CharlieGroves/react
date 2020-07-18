import React from 'react'
/* 
Use Capital Camel Case for this
This needs to return just one element so wrap in an empty element <>Like this</> if you are trying
To return more than one elements
*/

function MyInfo() {
    return (
        <>
            <h1>Charlie</h1>
            <p>Placeholder</p>
            <ol style={{backgroundColor: 'red'}}>
                <li>France</li>
                <li>America</li>
                <li>Japan</li>
            </ol>
        </>
    )
}

export default MyInfo