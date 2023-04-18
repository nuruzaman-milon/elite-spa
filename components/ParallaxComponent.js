import React from "react";
import { Parallax } from "react-parallax";

function ParallaxComponent() {
  return (
    <Parallax
      bgImage="/images/homepage.jpg"
      strength={600}
      bgImageStyle={{ opacity: ".8" }}
      //   className="filter brightness-75"
    >
      <div style={{ height: "450px" }} className="container">
        <div className="w-1/3 flex flex-col justify-center h-full gap-y-4">
          <h2 className="text-3xl font-bold">
            Dive into our Body Slimming and Shaping Treatments
          </h2>
          <p className="text-lg">
            At Elite Spa we offer advanced and noninvasive body contouring and
            fat removal services. We use ultrasound and laser energy to destroy
            the fat cells of your body. However, our selective technology will
            ensure that the surrounding cells are not damaged during the
            process.
          </p>
        </div>
      </div>
    </Parallax>
  );
}

export default ParallaxComponent;
