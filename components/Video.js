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
        <div className="mt-3">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Watch at 0.05 SATS/sec
          </button>
        </div>
      </div>
    </Link>
  );
}
