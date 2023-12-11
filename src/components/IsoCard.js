import React from 'react'

const IsoCard = ({detail}) => {
  return (
    <div className='iso-card'>
        <img src={detail.imageSrc} alt={detail.alt} />
        <p>{detail.text}</p>
    </div>
  )
}

export default IsoCard