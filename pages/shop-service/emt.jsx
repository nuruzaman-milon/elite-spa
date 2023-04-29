import ButtonWithAngle from "@/components/ButtonWithAngle";
import Layout from "@/components/Layout";
import Locations from "@/components/Locations";
import ServiceTopBar from "@/components/ServiceTopBar";
import Head from "next/head";
import Image from "next/image";

const emt = () => {
  return (
    <Layout>
      <Head>
        <title>EMS Slimming Machine - Elite Spa</title>
      </Head>
      <div>
        <ServiceTopBar
          title="EMS Slimming Machine"
          desc="The EMS Slimming Machine treatment is gaining worldwide popularity owing to its fast and effective results."
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
              <h1 className="header-style mb-3">EMS Slimming Machine</h1>
              <p className="text-style mb-5">
                The procedure is no less than a revolution for the cosmetic
                surgery industry. It is hailed as a non-invasive and
                non-surgical treatment that helps build muscles and burn body
                fat without any surgery or injections. The advantages of the
                procedure have rightfully caught public attention. Request an
                Appointment Name PhoneNo Message There is no downtime required
                for the treatment. Patients receiving the treatment can go back
                to their normal lifestyle right after the treatment.
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
            <h2 className="header-style mb-3">How does it work?</h2>
            <p className="text-style mb-4">
              The procedure uses electromagnetic energy to cause the muscles to
              contract. As already mentioned above, it is much like how we
              contract our muscles, but the difference is our body can only
              contract the muscles to a certain extent. The device put much
              stronger pressure on the muscles which takes the contraction to
              the maximum level, which is also called super maximal
              contractions.
            </p>
            <p className="text-style mb-4">
              When this happens, under such high pressure our body is forced to
              adapt to the changes causing our inner body structure to remodel
              itself which in itself results in fat burning and muscle building.
              You achieve a perfectly toned body in a matter of a few hours.
            </p>
            <p className="text-style mb-4">
              The procedure reportedly causes 20,000 supramaximal contractions,
              which experts say can be compared to 20,000 crunches or squats.
              While it may take you months and an intensive workout routine to
              attain the toned figure, you can attain your dream body shape with
              just one procedure.
            </p>
          </div>
          <Image
            data-aos="fade-left"
            data-aos-duration="1000"
            src="/images/emt2_598x531.jpeg"
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
            src="/images/emt2_598x531.jpeg"
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
            <h2 className="header-style mb-3">
              How long does the procedure take?
            </h2>
            <p className="text-style mb-2">
              Unlike other body toning treatments, EMS Slimming Machine does not
              require a huge time commitment. The procedure usually takes around
              30 minutes for a single body part. If you are going to do an EMT
              on your tummy, it will take 30 mins but if you wish to do the
              treatment to your thighs, it will take an hour, 30 minutes each.
            </p>
            <p className="text-style mb-2">
              EMS Slimming Machine in total requires around four sessions to
              achieve the desired results. The sessions are scheduled two or
              three days apart from each other.
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
              How long will the results last?
            </h2>
            <p className="text-style mb-2">
              EMS Slimming Machine will result in 15%-20% fat reduction and
              muscle building. Patients reportedly start seeing results right
              after the first session. After two sessions, you will see the
              specific body part of your body that received the treatment to be
              more toned than usual. You are likely to see abs if you continue
              to exercise regularly and follow a strict diet.
            </p>
            <p className="text-style mb-2">
              The results can last for quite a long time depending on your
              lifestyle. If you plan to have an active lifestyle, with lots of
              workouts and a strict diet, the results will last for a very long
              time. Experts say that you might never need another treatment at
              all because the change will be permanent for you. More than half
              of the patients who receive EMS Slimming Machine have been able to
              maintain their new body shape, without requiring any additional
              treatment.
            </p>
            <p className="text-style mb-2">
              If you plan to live a sedentary lifestyle after receiving the
              treatment, you will see the muscle disappearing and the fat coming
              back. You will need to visit your aesthetician for further
              treatments. Patients who require additional treatment usually need
              it only once a month or a year.
            </p>
          </div>
          <div>
            <Image
              data-aos="fade-left"
              data-aos-duration="1000"
              src="/images/emt2_598x531.jpeg"
              alt="My Image"
              width={500}
              height={500}
              className="w-full mb-6"
            />
          </div>
        </div>

        {/* why lipo laser  */}
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="mt-10 mb-4 text-4xl font-bold">
            Are there any side effects to the procedure?
          </h1>
          <p>
            Although, few patients have complained of feeling a bit sore and
            tired after the treatment. The feeling is exactly how one feels
            after a long harsh workout. The lactic acid builds up in the muscles
            causes’ one to feel sore. EMS Slimming Machine procedure helps clear
            this lactic acid buildup in the muscles, thus making sure that one
            does not feel too sore.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <h1 className="mt-10 mb-4 text-4xl font-bold">
            How much does the treatment cost?
          </h1>
          <p>
            The treatment cost can vary depending on the aesthetician you are
            consulting, but the treatment usually costs around $159 for each EMS
            Slimming Machine session.
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

export default emt;
