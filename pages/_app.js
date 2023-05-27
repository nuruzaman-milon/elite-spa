import "@/styles/globals.css";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import ScrollTopButton from "@/components/ScrollTopButton";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Component {...pageProps} />
      <ScrollTopButton />
    </div>
  );
}
