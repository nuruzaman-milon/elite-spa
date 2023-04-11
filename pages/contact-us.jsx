import ButtonWithAngle from "@/components/ButtonWithAngle";
import Layout from "@/components/Layout";
import React from "react";

const contactUs = () => {
  return (
    <Layout>
      <div>
        <div className="top-navbar h-96 flex items-center relative">
          {/* <h2 className="text-3xl font-bold absolute left-1/4">Get In Touch</h2> */}
          <div className="absolute left-1/4">
            <ButtonWithAngle name="Get In Touch" />
          </div>
        </div>
        <div className="w-2/3 mx-auto">
          <div className="text-center ">
            <h2 className="text-3xl font-bold mt-10 mb-4">
              HAVE SOME QUESTIONS?
            </h2>
            <p>
              The NFC hype isn’t what it once was, but it’s still a handy
              feature you should take
            </p>
            <p>advantage of or at least get to know. The NFC hype isn’t</p>
          </div>
          <form action="#" className="space-y-8 w-4/6 mx-auto my-10">
            <div>
              <label for="email" className="block mb-2 text-sm font-semibold">
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm dark:text-gray-300 font-semibold"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-semibold dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <ButtonWithAngle name="Send Message" />
            </div>
          </form>
          <h2 className="text-3xl font-bold mt-10 mb-6 text-center">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <div className="flex flex-col gap-y-2 shadow-lg rounded-lg text-center p-2">
              <h2 className="text-xl font-bold">St. Petersburg</h2>
              <p>9609 Bay Pines Blvd, St. Petersburg, FL 33708</p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                elitespaFL@hotmail.com
              </p>
              <p>
                <span className="font-semibold">Phone:</span> (727)-505-4997
              </p>
            </div>
            <div className="flex flex-col gap-y-2 shadow-lg text-center p-2 rounded-lg">
              <h2 className="text-xl font-bold">Tampa</h2>
              <p>10347 Cross Creek Blvd, Suite D, Tampa, FL 33647-2992</p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                elitespaFL@hotmail.com
              </p>
              <p>
                <span className="font-semibold">Phone:</span> (727)-505-4997
              </p>
            </div>
            <div className="flex flex-col gap-y-2 shadow-lg text-center p-2 rounded-lg">
              <h2 className="text-xl font-bold">New Port Richey</h2>
              <p>8807 River Crossing, New Port Richey, FL 34655</p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                elitespaFL@hotmail.com
              </p>
              <p>
                <span className="font-semibold">Phone:</span> (727)-505-4997
              </p>
            </div>
            <div className="flex flex-col gap-y-2 shadow-lg text-center p-2 rounded-lg">
              <h2 className="text-xl font-bold">Seminole</h2>
              <p>9661 Bay Pines Blvd, Seminole, FL 33708</p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                elitespaFL@hotmail.com
              </p>
              <p>
                <span className="font-semibold">Phone:</span> (727)-505-4991
              </p>
            </div>
            <div className="flex flex-col gap-y-2 shadow-lg text-center p-2 rounded-lg">
              <h2 className="text-xl font-bold">New York</h2>
              <p>2632 E 21st Street, Suite 1, Brooklyn, NY 11235</p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                elitespaFL@hotmail.com
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +1 (347) 258-0925
              </p>
            </div>
          </div>
          <div className="my-10">
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
          </div>
          <div className="my-10">
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
          </div>
          <div className="my-10">
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contactUs;
