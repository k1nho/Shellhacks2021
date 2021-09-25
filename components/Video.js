import { useState, useEffect } from "react";

export function Video({ publicId }) {
  const [videoPublicId, setPublicId] = useState(publicId);
  useEffect(() => {
    setPublicId(publicId);
  }, [publicId]);
  if (videoPublicId.length === 0) {
    return <></>;
  }
  return (
    <video
      className={`${videoPublicId.length === 0 ? "hidden" : "block m-4"}`}
      autoPlay
      controls
      muted
      src={`https://res.cloudinary.com/creatt/video/upload/vc_auto/creatt/${videoPublicId}`}
    ></video>
  );
}