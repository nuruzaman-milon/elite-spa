import React from "react";

const Locations = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-6">
      <div>
        <iframe
          width="100%"
          height="300"
          title="PetersBurg"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=9609%20Bay%20Pines%20Blvd,%20St.%20Petersburg,%20FL%2033708+(Petersburg)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          distance maps
        </iframe>
        <p className="text-2xl font-semibold mt-2 border-l-4 pl-1 border-primary-color">
          St. Petersburg
        </p>
      </div>
      <div>
        <iframe
          width="100%"
          height="300"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=10347%20Cross%20Creek%20Blvd,%20Suite%20D,%20Tampa,%20FL%2033647-2992+(Petersburg)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          area maps
        </iframe>
        <p className="text-2xl font-semibold mt-2 border-l-4 pl-1 border-primary-color">
          Tampa
        </p>
      </div>
      <div>
        <iframe
          width="100%"
          height="300"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=300&amp;hl=en&amp;q=8807%20River%20Crossing,%20New%20Port%20Richey,%20FL%2034655+(Petersburg)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          areal maps
        </iframe>
        <p className="text-2xl font-semibold mt-2 border-l-4 pl-1 border-primary-color">
          New Port Richey
        </p>
      </div>
      <div>
        <iframe
          width="100%"
          height="300"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=9661%20Bay%20Pines%20Blvd,%20Seminole,%20FL%2033708+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          areall maps
        </iframe>
        <p className="text-2xl font-semibold mt-2 border-l-4 pl-1 border-primary-color">
          Seminole
        </p>
      </div>
    </div>
  );
};

export default Locations;
