import React from 'react'

import Navbar from './Navbar'
import MainContent from './MainContent'
import Footer from './Footer'

/* Use Capital Camel Case for this
This needs to return just one element 
so wrap in an empty element <>Like this</> 
if you are trying to return more than one elements */

function App() {
    return (
        <>
            <Navbar />
            <MainContent />
            <Footer />
        </>
    )
}

export default App