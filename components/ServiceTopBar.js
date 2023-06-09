import React from "react";
import ButtonWithAngle from "./ButtonWithAngle";

const ServiceTopBar = ({ title, desc }) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className="lipo-laser-bg-img relative h-96"
    >
      <div className="container">
        <div className="flex flex-col gap-y-3 absolute justify-center h-full max-w-full xl:w-1/3">
          <h1 className="text-4xl font-bold">{title}</h1>
          <h3 className="text-lg font-semibold">{desc}</h3>
          <ButtonWithAngle name="Free Consultation" />
        </div>
      </div>
    </div>
  );
};

export default ServiceTopBar;
