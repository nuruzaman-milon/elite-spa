import ButtonWithAngle from "@/components/ButtonWithAngle";
import Layout from "@/components/Layout";
import Locations from "@/components/Locations";
import ServiceTopBar from "@/components/ServiceTopBar";
import { useState } from "react";
import { send } from "emailjs-com";
import Swal from "sweetalert2";

const ContactUs = () => {
  const [emailForm, setEmailForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const SendMail = (e) => {
    e.preventDefault();
    send("service_177fntc", "template_z1zi563", emailForm, "5sinj9_ycQVFwcKmK")
      .then((response) => {
        console.log("response", response);
        Swal.fire({
          icon: "success",
          text: "Thanks for being awesome! We have received your message and would like to thank you for writing to us.",
        }).then(() => {
          setEmailForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        });
      })
      .catch((err) => {
        console.log("err", err);
        Swal.fire({
          icon: "error",
          text: "Something went wrong!",
        }).then(() => {
          setEmailForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        });
      });
  };
  return (
    <Layout>
      <div>
        <ServiceTopBar
          title="Contact Us"
          desc="Feel free to connect with us for any kind of service. We will be proud if we can connect with you."
        />
        <div className="container">
          <div className="lg:flex items-center">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              className="lg:w-1/3 flex flex-col gap-y-4 items-center lg:items-start"
            >
              <h2 className="text-4xl font-bold lg:w-max text-center lg:text-start mt-4 lg:mt-0 border-b-4 border-primary-color pb-1">
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
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              className="lg:w-2/3 flex flex-col items-center"
            >
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
              <form onSubmit={SendMail} className="space-y-8 w-5/6 my-10">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-semibold"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={emailForm.name}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        name: event.target.value,
                      });
                    }}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-semibold"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={emailForm.email}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        email: event.target.value,
                      });
                    }}
                    className="shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="name@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-2 text-sm dark:text-gray-300 font-semibold"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={emailForm.subject}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        subject: event.target.value,
                      });
                    }}
                    className="block p-3 w-full text-sm bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                    placeholder="Let us know how we can help you"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-semibold dark:text-gray-400"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    value={emailForm.message}
                    onChange={(event) => {
                      setEmailForm({
                        ...emailForm,
                        message: event.target.value,
                      });
                    }}
                    rows="6"
                    className="block p-2.5 w-full text-sm bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Leave a comment..."
                  ></textarea>
                </div>
                <div type="submit" className="flex justify-center">
                  <ButtonWithAngle name="Send Message" />
                </div>
                {/* <button type="submit">Send</button> */}
              </form>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex justify-center"
          >
            <h2 className="text-4xl font-bold mt-10 mb-8 text-center border-b-4 border-primary-color pb-1 w-max">
              Our Locations
            </h2>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4"
          >
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

export default ContactUs;
