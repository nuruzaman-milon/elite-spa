import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import ScrollTopButton from "@/components/ScrollTopButton";

export default function App({ Component, pageProps }) {
  // const router = useRouter();
  // const allRoute = router.pathname.split("/");
  // const lastRoute = allRoute[allRoute.length - 1];

  // useEffect(() => {
  //   document.title = `Elite Spa - ${
  //     lastRoute != ""
  //       ? lastRoute.toLowerCase().replace(/\b[a-z]/g, function (e) {
  //           return e.toUpperCase();
  //         })
  //       : "Home"
  //   }`;
  //   AOS.init();
  // }, [lastRoute]);
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      {/* <Head>
        <meta name="description" content="This is my app description." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head> */}
      <Component {...pageProps} />
      <ScrollTopButton />
    </div>
  );
}
