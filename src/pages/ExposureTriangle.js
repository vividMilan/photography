import React from "react";
import ExposureIntro from "../components/ExposureIntro";
import ApertureSection from "../components/ApertureSection";
import ShutterSpeedSection from "../components/ShutterSpeedSection";
import IsoSection from "../components/IsoSection";

const ExposureTriangle = () => {

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
