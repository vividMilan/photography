import React from 'react'

const ImageDesc = ({detail}) => {
  return (
    <div className="ImageCard" id={detail.reverse ? 'reverseFlex' : ''}>
      <img src={detail.imageSrc} alt={detail.title} />
      <p>
        {detail.text}
      </p>
    </div>
  )
}

export default ImageDesc