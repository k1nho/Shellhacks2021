import React, { useEffect } from "react";
import Image from "next/dist/client/image";
import { useSession } from "next-auth/client";

const Profile = (image: string) => {
  const [session] = useSession();
  console.log(session);

  return (
    <div className="flex justify-center mt-20 mb-10 pb-5 border-b border-gray-600">
      <div className="px-7">
        {session && (
          <Image src={session.user.image} alt="" height="300px" width="300px" />
        )}
      </div>
      <div className="px-7">
        <h1 className="font-black text-5xl mb-1">
          {session ? session.user.name : "John Doe"}
        </h1>
        <h3 className="text-2xl text-gray-400">
          {session ? session.user.email : "John Doe"}
        </h3>
      </div>
    </div>
  );
};

export default Profile;
