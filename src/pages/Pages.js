import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import ExposureTriangle from './ExposureTriangle'
import CompositionTechniques from './CompositionTechniques'
import Gallery from './Gallery'
import Feedback from './Feedback'
import PageNotFound from './PageNotFound'

const Pages = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/exposure-triangle' element = {<ExposureTriangle />} />
          <Route path='/composition-techniques' element = {<CompositionTechniques />} />
          <Route path='/gallery' element = {<Gallery />} />
          <Route path='/feedback' element = {<Feedback />} />
          <Route path='*' element = {<PageNotFound />} />
        </Routes>
    </div>
  )
}

export default Pages