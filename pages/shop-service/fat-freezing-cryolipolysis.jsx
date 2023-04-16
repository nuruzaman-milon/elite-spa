import ButtonWithAngle from "@/components/ButtonWithAngle";
import Layout from "@/components/Layout";
import Locations from "@/components/Locations";
import ServiceTopBar from "@/components/ServiceTopBar";
import Image from "next/image";

const fatFreezingCryolipolysis = () => {
  return (
    <Layout>
      <div>
        <ServiceTopBar
          title="Fat Freezing Cryolipolysis"
          desc="The Fat Freezing Cryolipolysis treatment is gaining worldwide popularity owing to its fast and effective fat reduction results."
        />
      </div>
      <div className="w-4/5 lg:w-2/3 mx-auto">
        {/* section 1 */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 items-center border-b border-gray-200 pb-14">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="order-last lg:order-first"
          >
            <div>
              <h1 className="header-style mb-3">Fat Freeze Cryolipolysis</h1>
              <p className="text-style mb-5">
                Elite Spa offers you a variety of relaxing spa treatments. One
                of our specialties is Fat Freezing Cryolipolysis or
                CoolSculpting technology. Our service helps you to find an easy
                and simple method for fat deposit removal in your body.
              </p>
            </div>
            <Image
              src="/images/fat-freezing/Fat-Freeze-Banner-3.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="bg-teal-300 px-10 py-10 order-first lg:order-last mb-5 lg:mb-0"
          >
            <h1 className="header-style text-center mb-6">
              Request An Appointment
            </h1>
            <div>
              <form action="#" className="space-y-4">
                <div>
                  <input
                    type="text"
                    id="name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="phone"
                    className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Your Phone Number"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <ButtonWithAngle name="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-20 items-center border-b border-gray-200 pb-14">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="mb-5 lg:mb-0"
          >
            <h2 className="header-style mb-3">
              What is Elite Fat Freeze Cryolipolysis?
            </h2>
            <p className="text-style mb-4">
              Our spa treatment is powered by CoolSculpting technology, which is
              a known name for freezing fat and getting it out of your body. Our
              professionals are trained to help you reduce fat deposits from
              your body. The method is also called cryolipolysis, and has shown
              impressive results when it comes to reducing or eliminating
              stubborn fat from your body. This method concentrates on
              understanding how and when the body fat freezes, before removing
              it. Utilizing the concept of fat freezing during frostbite,
              wherein fat freezes at a higher temperature than your
              skincryolipolysis cools the fat in the body to a level where the
              elimination of the same would not hurt your body or tissues.
            </p>
            {/* <div className="flex gap-x-6 gap-y-3 flex-wrap">
              <span className="border px-1 bg-slate-200 rounded-md">
                Upper Arms
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Stomach
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Upper thighs
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Back thighs
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">Chin</span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Lower and upper abdomen
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Outer or front thighs
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Love Handles
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Bra Line
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Chest area for Men
              </span>
            </div> */}
          </div>
          <Image
            data-aos="fade-left"
            data-aos-duration="1000"
            src="/images/fat-freezing/fat-freeze-florida.jpg"
            alt="My Image"
            width={500}
            height={500}
            className="w-full"
          />
        </div>

        {/* section 3 */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-20 items-center border-b border-gray-200 pb-14">
          <Image
            data-aos="fade-right"
            data-aos-duration="1000"
            src="/images/fat-freezing/fat-freeze-florida-2.jpg"
            alt="My Image"
            width={500}
            height={500}
            className="w-full order-last lg:order-first"
          />
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="order-first lg:order-last"
          >
            <h2 className="header-style mb-3">The CoolScultpting Procedure</h2>
            <p className="text-style mb-2">
              Wondering how we, at Elite Spa, help you to reduce stubborn fat
              without harming your body? Here is the procedure of CoolSculpting:
            </p>
            <ul className="ml-2 flex flex-col gap-y-3 ">
              <li className="text-gray-400">
                The procedure is not surgery and does not require any operation
                with needles. You can rest assured, you won’t have to go through
                any drastic changes for this procedure.
              </li>
              <li className="text-gray-400">
                The process would include two paddles and a doctor, who would
                use the paddles to target an area. The Elite Spa professional
                would choose an area where the stubborn fat needs to be
                eliminated and put the paddles.
              </li>
              <li className="text-gray-400">
                These paddles would cool the fat in the area. The paddles would
                be left for thirty minutes to one hour fifteen minutes,
                depending on the type of fat. During the time these paddles are
                left, the process would remove about 20 to 25% of the fat cells.
              </li>
            </ul>
            <p className="text-style mb-2 mt-2">
              In this process, you won’t see any instant results. Our
              professionals would help you through the process and give you a
              roundabout of the procedure.
            </p>
          </div>
        </div>

        {/* section 4 */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-20 items-center border-b border-gray-200 pb-14">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="mb-5 lg:mb-0"
          >
            <h2 className="header-style mb-3">
              When will you see the results?
            </h2>
            <p className="text-style mb-2">
              At Elite Spa, we help you to find results that last. Our
              CoolScultpting process is simple and gives you long-lasting relief
              from stubborn fat. Once you go through the process, here is how
              you’d see the results:
            </p>
            <ul className="ml-2 flex flex-col gap-y-3 ">
              <li className="text-gray-400">
                The procedure is not surgery and does not require any operation
                with needles. You can rest assured, you won’t have to go through
                any drastic changes for this procedure.
              </li>
              <li className="text-gray-400">
                The process would include two paddles and a doctor, who would
                use the paddles to target an area. The Elite Spa professional
                would choose an area where the stubborn fat needs to be
                eliminated and put the paddles.
              </li>
              <li className="text-gray-400">
                These paddles would cool the fat in the area. The paddles would
                be left for thirty minutes to one hour fifteen minutes,
                depending on the type of fat. During the time these paddles are
                left, the process would remove about 20 to 25% of the fat cells.
              </li>
            </ul>
            <p className="text-style mb-2 mt-2">
              Furthermore, our professionals would help you to find out the best
              way to reduce fat cells in your body. You can make use of our fat
              freeze spa treatment to kill fat cells in the following areas:
            </p>
            <div className="flex gap-x-6 gap-y-3 flex-wrap">
              <span className="border px-1 bg-slate-200 rounded-md">
                Under the chin and the jawline
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Upper Arm
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">Belly</span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Thighs
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">Chin</span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Back and sides
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Along the bra line.
              </span>
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000">
            <Image
              src="/images/fat-freezing/home-banner-3-768x576.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="w-full mb-6"
            />
          </div>
        </div>

        {/* why lipo laser  */}
        <h1
          data-aos="fade-down"
          data-aos-duration="1000"
          className="mt-20 mb-10 text-4xl font-bold"
        >
          Why choose Fat Freezing Cryolipolysis at Elite Spa?
        </h1>
        <p data-aos="fade-down" data-aos-duration="1000" className="text-lg">
          At Elite Spa, we help you to find the perfect means to reduce body
          fat. Fat Freezing Cryolipolysis treatment is known for proven results
          and helps in speeding up the body metabolism. This process offers
          great results for stubborn fat that is diet or exercise resistant.
          Above all, fat reduction through our Fat Freeze Cryolipolysis provides
          results that are long-lasting for you. Our trained professionals’ help
          will aid the fat reduction process and calming, precisely reduce the
          fat under your skin. We will direct you through the entire process and
          will be with you along every step of the process. Even after the
          treatment has been performed, our professionals will guide you through
          the process and eliminate any worries. Book a consultation with us or
          call (727)-505-4997.
        </p>
        <div>
          <h1 className="text-4xl font-bold mb-10 mt-20 text-center">
            Our Locations
          </h1>
          <Locations />
        </div>
      </div>
    </Layout>
  );
};

export default fatFreezingCryolipolysis;
