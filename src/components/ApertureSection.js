import React from "react";
import ImageContainer from "../components/ImageContainer";
import ImageDesc from "../components/ImageDesc";

const ApertureSection = () => {
  const ApertureDetails = [
    {
      title: "Low Aperture",
      imageSrc: "/assets/exposureTriangle/aperLow.jpg",
      text: "This is taken with a low aperture. the photograph is too dark, the details of this photograph are not clearly visible due to the under exposure",
      reverse: false,
    },
    {
      title: "High Aperture",
      imageSrc: "/assets/exposureTriangle/aperHigh.jpg",
      text: "This is taken with a high aperture. The photograph is very bright, the sun not visible and not well difiened.",
      reverse: true,
    },
    {
      title: "Ideal Aperture",
      imageSrc: "/assets/exposureTriangle/aperHigh.jpg",
      text: "This is taken with a correct aperture setting accordingto this scenario. The sun's details is clearly visible, the photograph is ideally exposed, reflection on the water is also well defined.",
      reverse: false,
    },
  ];

  return (
    <section id="aperture">
      <h1>
        <span>Aperture</span>
      </h1>
      <p>
        According to this principle, The three elements must be in balance in
        order to capture a well exposed photograph. It would take a bunch of
        trial of errors to get the hang to balance these three elements and
        capture a well exposed photograph.
      </p>
      <ImageContainer imageSrc="/assets/exposureTriangle/aperture.jpg" />
      {ApertureDetails.map((detail) => (
        <ImageDesc detail={detail} key={detail.title} />
      ))}
    </section>
  );
};

export default ApertureSection;
