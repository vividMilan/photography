import React from 'react'
import IsoCardContainer from './IsoCardContainer'

const IsoSection = () => {
  return (
    <section id="shutter-speed">
      <h1>
        <span>ISO</span>
      </h1>
      <p>
        By manupulating the ISO, You can control the sensitivity of the sensor. If you increase ISO the sensor will become more sensitive to light , Thus having a high exposed photograph and vise-versa. Here are some examples below.
      </p>
      <IsoCardContainer />
      <p>
        The Exposure Triangle is a fundamental concept in photography that refers to the relationship between three key elements that affect the exposure of an image: aperture, shutter speed, and ISO sensitivity. Understanding how these elements work together is essential to achieving a well-exposed photograph. I hope this will gave you a good understading about the Exposure Triangle and how you can achieve a well exposed photograph by manupulating the three elements.
      </p>
    </section>
  )
}

export default IsoSection