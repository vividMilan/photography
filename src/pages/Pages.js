import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import ExposureTriangle from './ExposureTriangle'
import CompositionTechniques from './CompositionTechniques'
import Gallery from './Gallery'

const Pages = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/exposure-triangle' element = {<ExposureTriangle />} />
          <Route path='/composition-techniques' element = {<CompositionTechniques start
          hniques />} />
          <Route path='/gallery' element = {<Gallery />} />
        </Routes>
    </div>
  )
}

export default Pages