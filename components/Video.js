import { useState, useEffect } from "react";
import Link from "next/dist/client/link";

export function Video({ publicId }) {
  const [videoPublicId, setPublicId] = useState(publicId);
  useEffect(() => {
    setPublicId(publicId);
  }, [publicId]);
  if (videoPublicId.length === 0) {
    return <></>;
  }

  return (
    <div className="">

        <video
          className={`${videoPublicId.length === 0 ? "hidden" : "block m-4"}`}
          controls
          muted
          src={`https://res.cloudinary.com/creatt/video/upload/w_400,h_200,q_auto/vc_auto/creatt/${videoPublicId}`}
        ></video>
            <Link href = {`/video/${videoPublicId}`}>
        <button className=" m-4 px-2 py-2 rounded-md bg-yellow-500 font-bold" >
            
            CreattWatch
            </button>
            </Link>
    </div>

  );
}