import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Content from './Content'

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/'  element={<Content />}></Route>
            </Routes>
        </BrowserRouter>
       
    )
}

export default App;