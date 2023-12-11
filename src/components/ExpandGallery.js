import React from 'react'

const ExpandGallery = () => {

    const ExpandGalleryImage = [
        {
            title: 'beach',
            imageSrc: '/assets/exposureTriangle/Shutter Gallery/beach.jpg'
        },
        {
            title: "lights2",
            imageSrc: '/assets/exposureTriangle/Shutter Gallery/light2.jpg'
        },
        {
            title: "beach2",
            imageSrc: '/assets/exposureTriangle/Shutter Gallery/beach2.jpg'
        },
        {
            title: "trafficLights",
            imageSrc: '/assets/exposureTriangle/Shutter Gallery/trafficLights.jpg'
        },
        {
            title: 'beach1',
            imageSrc: '/assets/exposureTriangle/Shutter Gallery/beach1.jpg'
        },
        {
            title: 'carnival',
            imageSrc: '/assets/exposureTriangle/Shutter Gallery/carnival.JPG'
        },
        {
            title: 'stars',
            imageSrc: '/assets/exposureTriangle/Shutter Gallery/stars.jpg'
        }

    ]

  return (
    <div className="expand-gallery">
        {ExpandGalleryImage.map((image) => (
            <img className='expand-image' src={image.imageSrc} alt={image.title} />
        ))}
    </div>
  )
}

export default ExpandGallery