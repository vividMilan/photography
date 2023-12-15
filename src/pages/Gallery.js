import React, { useState } from 'react'


const Gallery = () => {

  const [showPic, setShowPic] = useState(false)

  const alertSrc = (e) => {
    console.log(e)
    setShowPic(!showPic)
  }

  const galleryPics = [
    {
      id: 1,
      name: "beachImg",
      imgSrc : 'assets/Gallery/beach.jpg'
    },
    {
      id: 2,
      name: "mountainImg",
      imgSrc : 'assets/Gallery/mountain1.jpg'
    },
    {
      id: 3,
      name: "spiderImg",
      imgSrc : 'assets/Gallery/spider1.jpeg'
    },
    {
      id: 4,
      name: "starsImg",
      imgSrc : 'assets/Gallery/stars1.jpg'
    },
    {
      id: 5,
      name: "birdImg",
      imgSrc : 'assets/Gallery/bird2.jpg'
    },
    {
      id: 6,
      name: "treeBirdImg",
      imgSrc : 'assets/Gallery/bird3.jpg'
    },
    {
      id: 7,
      name: "streetFlower",
      imgSrc : 'assets/Gallery/streetFlowers.jpg'
    },
    {
      id: 8,
      name: "superMoon",
      imgSrc : 'assets/Supermoon.png'
    },
    {
      id: 9,
      name: "mountainSunImg",
      imgSrc : 'assets/Gallery/mountain1.jpg'
    },
    {
      id: 10,
      name: "sunsetImg",
      imgSrc : 'assets/Gallery/sunset1.jpg'
    },
    {
      id: 11,
      name: "bird1Img",
      imgSrc : 'assets/bird_1.jpg'
    },
    {
      id: 12,
      name: "towerImg",
      imgSrc : 'assets/Gallery/tower1.jpg'
    },
    {
      id: 13,
      name: "cuteSpiderImg",
      imgSrc : 'assets/spider2.jpeg'
    },
    {
      id: 14,
      name: "lightTrail",
      imgSrc : 'assets/light1.jpg'
    },
    {
      id: 15,
      name: "lotusTower",
      imgSrc : 'assets/Gallery/lotusTower.jpg'
    },
    {
      id: 16,
      name: "beraTank",
      imgSrc : 'assets/Gallery/beraTank.jpg'
    },
  ]

  return (
    <>
      <div className='gallery section'>
        {galleryPics.map((pic) => (
          <img onClick={alertSrc} className='pic' src={pic.imgSrc} alt="" />
        ))}
      </div>
    </>

  )
}

export default Gallery