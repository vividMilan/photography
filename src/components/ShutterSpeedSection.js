import React from "react";
import ImageDesc from "../components/ImageDesc";
import ExpandGallery from "./ExpandGallery";

const ShutterSpeedSection = () => {

  const ShutterDetails = [
      {
        title: "Low Shutter",
        imageSrc: "/assets/exposureTriangle/lowShutter.jpg",
        text: "This is taken with a high shutter speed. Underexposed, we can see all the tower's features but the photograph is too due the underexposure. It would be if it was taken with slower shutter speed.",
        reverse: false,
       },
      {
        title: "High Shutter",
        imageSrc: "/assets/exposureTriangle/highShutter.jpg",
        text: "This is taken with a low shutter speed. over-exposed, the hit the sensor for a too long period of time. Beacuase of this the photograph is over-exposed.",
        reverse: true,
      },
      {
        title: "Ideal Shutter",
        imageSrc: "/assets/exposureTriangle/idealShutter.jpg",
        text: "This is taken with ideal shutter speed. The lotus tower is well defined, but at the same the photograph is not too bright nor dark, Ideally exposed",
        reverse: false,
      },
    ];
    

  return (
    <section id="shutter-speed">
      <h1>
        <span>Shutter Speed</span>
      </h1>
      <p>
        By manupulating the Shutter Speed, You can control how long the camera sensor is exposed to light. Shutter is a moving mechanical part inside the camera. It's what gives the iconic "click!" sound. Exposing the sensor for a long time can result a over-exposed photogrph. and exposing the sensor for a long time can result a under-exposed photograph.
      </p>
      {ShutterDetails.map((detail) => (
        <ImageDesc detail={detail} key={detail.title} />
      ))}
      <p>
        In order to capture a fast moving subject, It is mandotary to set a faster shutter speed. Caputuring a fast moving at a slower shutter speed results a blurry effect. But sometimes the blurry effect is used in a artistic way. Let's see some below.
      </p>
      <ExpandGallery />
    </section>
  );
};

export default ShutterSpeedSection;
