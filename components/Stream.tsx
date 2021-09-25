import React from "react";
import Image from "next/image";

const Stream = () => {
  return (
    <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
      <Image
        className="object-cover"
        src="/1807321.jpg"
        alt="thumbnail"
        width="100%"
        height="50%"
        layout="responsive"
      />
      <div className="p-6">
        <div>
          <p className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white">
            I Built A Successful Blog In One Year
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
            parturient et sem ipsum volutpat vel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stream;
