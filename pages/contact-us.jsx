import ButtonWithAngle from "@/components/ButtonWithAngle";
import Layout from "@/components/Layout";
import Locations from "@/components/Locations";
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
          <div className="lg:flex items-center">
            <div className="lg:w-1/3 flex flex-col gap-y-4 items-center lg:items-start">
              <h2 className="text-4xl font-bold border-b-2 lg:w-max text-center lg:text-start mt-4 lg:mt-0">
                Business Hours
              </h2>
              <p className="text-2xl font-semibold">Monday: 10am – 5pm</p>
              <p className="text-2xl font-semibold">Tuesday: 10am – 5pm</p>
              <p className="text-2xl font-semibold"> Wednesday: 10am – 5pm</p>
              <p className="text-2xl font-semibold">Thursday: 10am – 5pm</p>
              <p className="text-2xl font-semibold">Friday: 10am – 5pm</p>
              <p className="text-2xl font-semibold">Saturday: 10am – 5pm</p>
              <p className="text-2xl font-semibold">Sunday: Off</p>
            </div>
            <div className="lg:w-2/3 flex flex-col items-center">
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
              <form action="#" className="space-y-8 w-5/6 my-10">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-semibold"
                  >
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
            </div>
          </div>
          <h2 className="text-3xl font-bold mt-10 mb-6 text-center">
            Our Locations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
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
          </div>
          <div>
            <Locations />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default contactUs;
