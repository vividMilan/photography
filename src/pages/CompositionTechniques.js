import React from 'react'
import CompositionIntroSection from '../components/CompositionIntroSection'
import RuleOfThirds from '../components/RuleOfThirds'
import CenterComposition from '../components/CenterComposition'
import LeadingLines from '../components/LeadingLines'

const CompositionTechniques = () => {
  return (
    <div className='section composition'>
      <CompositionIntroSection />
      <RuleOfThirds />
      <CenterComposition />
      <LeadingLines />
    </div> 
  )
}

export default CompositionTechniques