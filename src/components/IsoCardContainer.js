import React from 'react'
import IsoCard from './IsoCard'

const IsoCardContainer = () => {

    const ISO_DETAILS = [
        {
            text: 'This is low exposed',
            imageSrc : '/assets/exposureTriangle/lowISO.jpg',
            alt: 'low ISO'
        },
        {
            text: 'This is ideal exposed',
            imageSrc : '/assets/exposureTriangle/idealISO.jpg',
            alt: 'ideal ISO'
        },
        {
            text: 'This is high exposed',
            imageSrc : '/assets/exposureTriangle/highISO.jpg',
            alt: 'high ISO'
        }
    ]

  return (
    <div className='iso-cards-container'>
        {ISO_DETAILS.map((detail) => (
            <IsoCard 
                detail = {detail}
            />
        ))}
    </div>
  )
}

export default IsoCardContainer