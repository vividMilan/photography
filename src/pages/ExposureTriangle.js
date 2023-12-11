import React from "react";
import ExposureIntro from "../components/ExposureIntro";
import ApertureSection from "../components/ApertureSection";
import ShutterSpeedSection from "../components/ShutterSpeedSection";
import IsoSection from "../components/IsoSection";

const ExposureTriangle = () => {
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
    <div className="exposure section">
      <ExposureIntro />
      <ApertureSection />
      <ShutterSpeedSection />
      <IsoSection />
    </div>
  );
};

export default ExposureTriangle;
