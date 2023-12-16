import React from "react";
import ImageContainer from "./ImageContainer";

const ExposureIntro = () => {

    const topics = [
      {
        name: "Aperture",
        href: "#aperture"
      },
      {
        name: "Shutter Speed",
        href: "#shutter-speed"
      },
      {
        name: "ISO",
        href: "#iso"
      },
    ]

  return (
    <section id="intro">
      <h1>
        Exposure Triangle in <span>Photography</span>
      </h1>
      <p>
        <b>Exposure Triangle</b> is one of the solid ways to get a understanding
        about basics of Photography. It shows the main elements that effect the
        exposure of the photograph.
      </p>
      <div className="topic-list">
        <p>The main Elements are,</p>
        <br />
        <ul>
          {topics.map((topic) => (
            <li key={topic.name} className="topic">
              <a style={{textDecoration: 'none', color: 'inherit'}} href={topic.href}><b>{topic.name}</b></a>
            </li>
          ))}
        </ul>
      </div>
      <p>
        According to this principle, The three elements must be in balance in
        order to capture a well exposed photograph. It would take a bunch of
        trial of errors to get the hang to balance these three elements and
        capture a well exposed photograph.
      </p>
      <ImageContainer 
        imageSrc = "/assets/exposureTriangle/exposureTriangle.jpg"
      />
      <p>
        As you can see, A photographer should know this exposure triangle. If
        you are shooting in auto mode, your camera will do the work for you.
        Almost every beginner is advised to shoot in auto mode and then shooting
        in manual mode after. You can get away with shooting in auto mode almost
        everytime. However there are times you can't get the expected results.
        Because camera is a machine, It doesn't quite add the artistic touch
        which you have in mind. In manual mode, you have the control over each
        individual elements.
      </p>
      <br />
      <p>Let's discuss more about each element below :)</p>
    </section>
  );
};

export default ExposureIntro;
