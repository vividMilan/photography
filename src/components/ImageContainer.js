import React from "react";

const ImageContainer = ({imageSrc}) => {
  return (
    <div className="image-container">
      <img src={imageSrc} alt="" />
    </div>
  );
};

export default ImageContainer;
