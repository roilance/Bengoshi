import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Content from './Content'

function App(){
    return(
        <HashRouter>
            <Routes>
                <Route path='/'  element={<Content />}></Route>
            </Routes>
        </HashRouter>
       
    )
}

export default App;