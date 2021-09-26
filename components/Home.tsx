import Image from "next/dist/client/image";

export const Header = () => {
  return (
    <div className="pb-52 pt-36 bg-gray-800 grid grid-cols-12 justify-items-center items-center">
      <div className=" col-span-12 md:col-span-6 justify-items-center items-center">
        <Image src="/lightining.png" height="400px" width="400px" />
      </div>

      <div className="col-span-12 md:col-span-5 justify-items-center items-center text-white space-y-4">
        <h1 className="text-left font-bold text-5xl mb-3">
          The <span className="text-yellow-500">Bitcoin</span> Video Streaming
          Platform
        </h1>
        <p className="text-lg text-gray-100">
          Creatt is here to support local creators and established influencers
          alike! by using the Lightning network our team provides instant and
          automatic bitcoin transaction on watch time, so that you can get
          exclusive creator content from anywh 🌎.
        </p>
      </div>
    </div>
  );
};
