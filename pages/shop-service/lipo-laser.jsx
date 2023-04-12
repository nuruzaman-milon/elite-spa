import ButtonWithAngle from "@/components/ButtonWithAngle";
import Layout from "@/components/Layout";
import Locations from "@/components/Locations";
import ServiceTopBar from "@/components/ServiceTopBar";
import Image from "next/image";

const lipoLaser = () => {
  return (
    <Layout>
      <div>
        <ServiceTopBar
          title="Lipo Laser"
          desc="The Lipo Laser treatment is gaining worldwide popularity owing to its fast and effective fat reduction results."
        />
      </div>
      <div className="w-4/5 lg:w-2/3 mx-auto">
        {/* section 1 */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-20 items-center border-b border-gray-200 pb-14">
          <div className="order-last lg:order-first">
            <div>
              <h1 className="header-style mb-3">Lipo Laser Treatment</h1>
              <p className="text-style mb-5">
                Need a body contouring but afraid of the painful surgeries? At
                Elite Spa, we offer non-invasive skin and body treatments. Our
                Lipo Laser treatment will enhance your body aesthetics including
                cellulite reduction, collagen growth, skin tightening, and body
                contouring.
              </p>
            </div>
            <Image
              src="/images/lipo-Laser/lipo1.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="w-full"
            />
          </div>
          <div className="bg-teal-300 px-10 py-10 order-first lg:order-last mb-5 lg:mb-0">
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
          <div className="mb-5 lg:mb-0">
            <h2 className="header-style mb-3">What is Lipo Laser Treatment?</h2>
            <p className="text-style mb-4">
              The Lipo Laser treatment is gaining worldwide popularity owing to
              its fast and effective fat reduction results. The treatment uses
              laser energy to effectively breakdown the fat deposits of your
              body. It will help to change the appearance and shape of your body
              without any surgical procedures. The fat is vacuumed out or
              massaged out of your body depending on the amount of fat that you
              want to eliminate. The whole process gets completed within 30
              minutes and requires no general anesthesia. The most common
              treatment areas for Lipo-Laser includes:
            </p>
            <div className="flex gap-x-6 gap-y-3 flex-wrap">
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
            </div>
          </div>
          <Image
            src="/images/lipo-Laser/Pressotherapy-body-2-.jpg"
            alt="My Image"
            width={500}
            height={500}
            className="w-full"
          />
        </div>

        {/* section 3 */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-20 items-center border-b border-gray-200 pb-14">
          <Image
            src="/images/lipo-Laser/lipo-laser-body4.jpg"
            alt="My Image"
            width={500}
            height={500}
            className="w-full lg:h-96 order-last lg:order-first"
          />
          <div className="order-first lg:order-last">
            <h2 className="header-style mb-3">How Does the Lipo-Laser Work?</h2>
            <p className="text-style mb-2">
              Low-level laser beams have been used for years to treat excess
              fats in patients. The Lipo-Laser treatment emits soft levels of
              laser energy via treatment pads. It triggers a powerful chemical
              signal in your fat cells and breaks down the triglycerides. It
              releases glycerol and fatty acids through channels in your cell
              membranes.
            </p>
            <p className="text-style mb-2">
              The Lipo Laser procedure will then transport the fat content to
              the tissues of your body where it can get burned out during
              post-treatment exercise.
            </p>
          </div>
        </div>

        {/* section 4 */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-x-20 items-center border-b border-gray-200 pb-14">
          <div className="mb-5 lg:mb-0">
            <h2 className="header-style mb-3">
              Is Lipo Laser The Ideal Treatment For You?
            </h2>
            <p className="text-style mb-2">
              Laser Lipolysis or Lipo Laser is one of the most invasive
              treatments to eliminate excess fat. The procedure uses a laser to
              cause your body cells to release the extra contents. Most cosmetic
              surgeries leave behind a scar on your body after the completion of
              the body contouring process. Lipo-Laser is a non-surgical light
              therapy that will leave no bruising or scarring.
            </p>
            <p className="text-style mb-2">
              At Elite SPA, you will not only lose weight but also get a
              sculpted body. Our machines will produce low-level, cold laser
              light in the targeted areas to limit the amount of fat. Lipo-Laser
              provides greater precision levels than other procedures. Within a
              minute or two of the treatment, your fat cells will start to
              release glycerol, toxins, and triglycerides.
            </p>
            <p className="text-style mb-2">
              The Lipo Laser procedure will deliver a supercharged metabolism
              and derive energy from the fat released. After the completion of
              the process, these fats get completely removed from the body
              through lymphatic excretion. This nonsurgical treatment will show
              enhanced results when coupled with the right exercise and diet
              plan.
            </p>
            <p className="text-style mb-2">
              Lipo Laser eliminates the bruising, downtime, and pain associated
              with the traditional liposuction procedure. You will be awake
              during the whole process as there is no requirement for surgery or
              drugs. Our non-surgical painless fat reduction procedure will also
              help you with:
            </p>
          </div>
          <div>
            <Image
              src="/images/lipo-Laser/lipo-laser-body3.jpg"
              alt="My Image"
              width={500}
              height={500}
              className="w-full mb-6"
            />
            <div className="flex gap-x-6 gap-y-3 flex-wrap">
              <span className="border px-1 bg-slate-200 rounded-md">
                Tighten Skin
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Eliminate Cellulite
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Fade Stretchmarks
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Lose Inches and Weight
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">Chin</span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Reduce wrinkles
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Improve Circulation
              </span>
              <span className="border px-1 bg-slate-200 rounded-md">
                Stimulate Collagen
              </span>
            </div>
          </div>
        </div>

        {/* why lipo laser  */}
        <h1 className="mt-20 mb-10 text-4xl font-bold">
          Why choose Lipo Laser Treatment at Elite Spa?
        </h1>
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-4">
              <h2 className="header-style">
                One-Stop Solution for a Sculpted Body
              </h2>
              <p className="text-style">
                At Elite SPA, our Lipo-Laser treatment will produce a
                supercharged metabolism that continues even after completion of
                the procedure. It will help to burn fat and remove them without
                harming the cells. We use machines that can adjust power during
                the body contouring procedure. Our specialists are capable of
                adjusting the delay settings, output, and pulse as per the
                varying needs of the patients.
              </p>
              <p className="text-style">
                We use the best technology to deliver noticeable results after
                your first session. At Elite SPA, patients can lose considerable
                fat within one or two treatment sessions. We will allow you to
                quickly reach your body goals!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-4">
              <h2 className="header-style">Pain-Free, Comfortable and Quick</h2>
              <p className="text-style">
                Read, relax or watch a series on your phone while getting the
                treatment done. The Lipo-Laser treatment is comfortable and
                painless. It doesn’t require any drugs or needles during the
                procedure. You can go back to your office or home after the
                completion of the treatment.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-4">
              <h2 className="header-style">Better Body Aesthetics</h2>
              <p className="text-style">
                You will start to see results just after your first Lipo-Laser
                treatment session. The natural shape of your body will be
                revealed further after each treatment session. Our non-invasive
                Lipo-Laser treatment will eliminate pain and downtime while
                allowing your body to heal quickly.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-4">
              <h2 className="header-style">Fast Recovery</h2>
              <p className="text-style">
                The traditional liposuction process was associated with pain,
                scars, and varying levels of discomfort. It also came with a
                minimum downtime of 6 weeks to help you fully recover from the
                pain. However, Lipo-Laser has no downtime allowing you to go
                back to your normal life right after the completion of the
                process.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-4">
              <h2 className="header-style">Experienced and Qualified Staff</h2>
              <p className="text-style">
                Elite SPA employs only professionals who are accustomed to
                innovative technology and body contouring. We ensure that our
                staff has completed the required training process to ensure
                safety and better results. Our fat reduction process is fast and
                painless.
              </p>
            </div>
          </div>
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

export default lipoLaser;
