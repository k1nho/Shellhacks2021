import { useState, useEffect } from "react";
import Link from "next/dist/client/link";
import VideoThumbnail from "react-video-thumbnail";

export function Video({ publicId }) {
  const [videoPublicId, setPublicId] = useState(publicId);
  useEffect(() => {
    setPublicId(publicId);
  }, [publicId]);
  if (videoPublicId.length === 0) {
    return <></>;
  }
  return (
    <Link href={`/video/${videoPublicId}`}>
      <div className="">
        <VideoThumbnail
          videoUrl={`https://res.cloudinary.com/creatt/video/upload/w_400,h_200,q_auto/vc_auto/creatt/${videoPublicId}`}
          className="min-w-full"
        />
        <div className="flex items-center mt-4">
          <div className="rounded-full h-12 w-12 mr-4 flex items-center justify-center bg-green-500 text-green-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-50">
              Awesome Stunts Video
            </p>
            <p className="text-gray-400">Ehtesham Siddiqui</p>
          </div>
        </div>
        <div className="flex justify-end mt-3">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            0.05 SATS/sec
          </button>
        </div>
      </div>
    </Link>
  );
}

//  <Link href = {`/video/${videoPublicId}`}></Link>
{
  /* <video
  className={`${
    videoPublicId.length === 0 ? "hidden" : "block m-4"
  } w-full m-0 mb-4`}
  controls
  muted
  src={`https://res.cloudinary.com/creatt/video/upload/w_400,h_200,q_auto/vc_auto/creatt/${videoPublicId}`}
></video>; */
}
