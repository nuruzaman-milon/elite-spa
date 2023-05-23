import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => router.back(), 4000);
  }, [router]);

  return (
    <div className="loading-page">
      <div className="flex flex-col gap-y-4 justify-center items-center h-screen">
        <h1 className="text-4xl font-bold">Sorry, Page not found!</h1>
        <p className="text-xl font-semibold">
          Page you are requested for is corrently unavailable.
        </p>
        <button
          onClick={() => router.back()}
          className="bg-primary-color text-white px-4 py-2 rounded-lg"
        >
          BACK
        </button>
      </div>
    </div>
  );
};

export default NotFound;
