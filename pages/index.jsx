import Button from "@/components/Button";
import Layout from "@/components/Layout";

const index = () => {
  return (
    <Layout>
      <div>
        {/* hero secton */}
        <section className="hero w-full h-[60vh] relative">
          <div className="flex flex-col items-center absolute top-3/4 left-1/4 gap-y-6 rounded-full bg-black">
            <select
              className="w-max px-4 py-2 rounded-full"
              name="service"
              id="service"
            >
              <option value="">Removing Unwanted Hair</option>
              <option value="">Fat Reduction</option>
              <option value="">Muscle Toning</option>
            </select>
            <Button name="Get Started" />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default index;
