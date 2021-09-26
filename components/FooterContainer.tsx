import Image from "next/dist/client/image";
import { CreatorSvg } from "./CreatorSvg";

export const FooterContainer = () => {
  return (
    <>
      <div className="pt-28 pb-20 bg-gray-800 grid grid-cols-12 justify-items-center items-center">
        <div className=" col-span-12 md:col-span-6 justify-items-center items-cente rounded-full p-5">
          <Image src="/eye-glasses.png" height="500px" width="500px" />
        </div>
        <div className="col-span-12 md:col-span-5 justify-items-center items-center text-white space-y-4">
          <h1 className="text-5xl text-left font-bold">
            For Creators by Creators
          </h1>
          <p className="text-lg text-left text-gray-500">
            Creatt is here to support local creators and established influencers
            alike! by using the Lightning network our team provides instant
            bitcoin transaction on watch time, so that you can get exclusive
            creator content from anywhere in the world 🌎
          </p>
        </div>
      </div>
      <div className="bg-gray-800 py-8">
        <div className="flex w-10/12 justify-center items-end mx-auto">
          <p className="text-3xl text-gray-400 mr-3">powered by</p>
          <p className="text-4xl text-pink-600 font-bold">
            Lightning Network ⚡
          </p>
        </div>
      </div>
    </>
  );
};
