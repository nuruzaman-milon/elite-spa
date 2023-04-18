import ButtonWithAngle from "@/components/ButtonWithAngle";
import Layout from "@/components/Layout";
import Locations from "@/components/Locations";
import ServiceTopBar from "@/components/ServiceTopBar";
import Image from "next/image";

const Hifu7d = () => {
  return (
    <Layout>
      <div>
        <ServiceTopBar
          title="7D HIFU System"
          desc="The 7D HIFU System treatment is gaining worldwide popularity owing to its fast and effective results."
        />
      </div>
      <div className="container">
        {/* section 1 */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 items-center border-b border-gray-200 pb-14">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="order-last lg:order-first"
          >
            <div>
              <h1 className="text-4xl font-bold mb-3">7D HIFU System</h1>
              <h2 className="text-3xl font-bold mb-3">
                Facelift Wrinkle Removal Solution
              </h2>
              <p className="text-style mb-5">
                As soon as we cross into our 30s, we experience sagging skin and
                wrinkles. Wrinkles are the signs of aging. A majority of the
                women spend their time and money on anti-aging creams and more
                invasive procedures like facelifts. Although facelifts do solve
                the problem of the skin losing elasticity, they are extremely
                painful and require downtime. But there is a new skin tightening
                procedure in the market – a 7D HIFU system.
              </p>
            </div>
            <Image
              src="/images/7dhifu/4d-hifu-banner.jpg"
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
              7D HIFU for Facelift Wrinkle Removal
            </h2>
            <p className="text-style mb-4">
              The procedure has gained a lot of popularity ever since it was
              first used for aesthetic purposes back in 2008. The procedure does
              not require surgery and hence is considered to be comparatively
              safer than other skin tightening treatments. The treatment is also
              pain-free.
            </p>
            <p className="text-style mb-4">
              HIFU was mainly used to treat tumors, but then the possibility of
              using the system for the cosmetic purpose was realized, and hence
              soon it received approval from the FDA for brow lifts. Recently,
              in 2014, the device was further used to treat wrinkles, along the
              upper chest and neckline. Although the device has still not been
              approved by the FDA for use on the face, the device is deemed to
              be safe and hence is used by various aestheticians to perform
              wrinkle removal procedures on patients.
            </p>
            <p className="text-style mb-4">
              The procedure is quite effective for younger people, especially.
              People in their 30s or 40s have reportedly seen very good results
              after a session.
            </p>
          </div>
          <Image
            data-aos="fade-left"
            data-aos-duration="1000"
            src="/images/7dhifu/hifu-body-4-768x520.jpg"
            alt="My Image"
            width={500}
            height={500}
            className="w-full"
          />
        </div>

        {/* section 3 */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-20 items-center border-b border-gray-200 pb-14">
          <div data-aos="fade-right" data-aos-duration="1000">
            <Image
              src="/images/7dhifu/hifu-body-2-768x931.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="w-full lg:h-96 order-last lg:order-first"
            />
            <Image
              src="/images/7dhifu/hifu-body-3-768x566.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="w-full lg:h-96 order-last lg:order-first"
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="order-first lg:order-last"
          >
            <h2 className="header-style mb-3">What to expect?</h2>
            <p className="text-style mb-2">
              When you go for a HIFU wrinkle removal treatment, you should first
              clear your face of all makeup. The treatment is done on bare skin.
              Here is what to expect when you go for your first treatment.
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
              The session will be over after nearly 30 minutes. If you are
              treating a large area, it will take around 90 minutes. The
              treatment is considered to be painless, but you can feel some heat
              and have a prickly sensation. You might also feel slight pain, and
              in that case, your doctor can recommend you to take some pain
              drugs like ibuprofen before the procedure takes place. After the
              session is over, you are free to resume your daily activities.
              There is no restriction on diet or any such thing. You may have
              some swelling or redness around the area that was treated, but it
              will soon go down
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
              How much does the treatment cost?
            </h2>
            <p className="text-style mb-2">
              The procedure costs around $500 but this will vary a lot depending
              on who you are getting the treatment from and how many sessions
              are needed to attain the results.
            </p>
            <p className="text-style mb-2">
              The cost is not as high when compared to the cost of facelifts,
              which has a whopping price of $7500! HIFU treatment will not burn
              a hole through your pocket if you choose to get it.
            </p>
          </div>
          <div>
            <Image
              data-aos="fade-left"
              data-aos-duration="1000"
              src="/images/7dhifu/hifu-body1.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="w-full mb-6"
            />
          </div>
        </div>

        {/* why lipo laser  */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="mt-20 mb-6 text-4xl font-bold">
            Is the procedure right for you?
          </h1>
          <p className="text-lg">
            If you are in your 30s or younger than that, this procedure will
            work for you. The procedure will not work on people that have
            damaged skin from ultraviolet rays or have extremely saggy skin.
            More than one session is needed to treat such skin.
          </p>
          <p className="text-lg mt-4">
            Old people with extremely sagging skin should also look for other
            alternatives as this procedure will not be effective. The treatment
            will not be safe for people having skin infections or open wounds.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="mt-20 mb-6 text-4xl font-bold">
            Are there any side effects?
          </h1>
          <p className="text-lg">
            There are no side effects to this treatment. No one has reported any
            bad side effects which affected their lifestyle. The procedure is
            safe if done by a trained professional.
          </p>
          <p className="text-lg mt-4">
            Patients have only reported slight swelling in the treatment area
            but the redness usually subsides within a few weeks. If it gets any
            worse, all you will experience is a bruise, but that is not any
            reason to worry either because it will go away sooner than you can
            expect.
          </p>
        </div>
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

export default Hifu7d;
