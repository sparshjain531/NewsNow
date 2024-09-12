import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import React, { useState } from "react";
import App1 from './App1';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

function App() {

  const pageSize = 12;
  const [progress,setProgress]=useState(0)

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<><LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      /><App1 /></>}>
        <Route path='' element={<News setProgress={setProgress} key={"general"} country={'in'} category={'general'} pagesize={pageSize} />} />

        <Route path='business' element={<News setProgress={setProgress} key={'business'} country={'in'} category={'business'} pagesize={pageSize} />} />

        <Route path='entertainment' element={<News setProgress={setProgress} key={'entertainment'} country={'in'} category={'entertainment'} pagesize={pageSize} />} />

        <Route path='health' element={<News setProgress={setProgress} key={'health'} country={'in'} category={'health'} pagesize={pageSize} />} />

        <Route path='science' element={<News setProgress={setProgress} key={'science'} country={'in'} category={'science'} pagesize={pageSize} />} />

        <Route path='sports' element={<News setProgress={setProgress} key={'sports'} country={'in'} category={'sports'} pagesize={pageSize} />} />

        <Route path='technology' element={<News setProgress={setProgress} key={'technology'} country={'in'} category={'technology'} pagesize={pageSize} />} />


      </Route>
    )
  )

  return (
    <RouterProvider router={router} />
  )
}

export default App
