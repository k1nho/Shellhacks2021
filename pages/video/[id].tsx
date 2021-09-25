import { GetServerSideProps } from "next";
import Link from "next/dist/client/link";

export default function post({videoID}: {videoID : string}) {
  return <div className =" min-h-screen grid grid-cols-12 justify-items-center items-center bg-gray-800">
      <video
          className= "col-span-12 bg-gray-200 p-5 rounded-md"
          autoPlay
          controls
          muted
          src={`https://res.cloudinary.com/creatt/video/upload/w_1000,h_500/vc_auto/creatt/${videoID}`}
        ></video>
        <button className= "rounded-md bg-yellow-500 hover:yellow-400 p-2 col-span-6">
          <Link href ="/page2">

          Back to Feed
          </Link>
          </button>
          <div className="col-span-6 bg-gray-200 p-4 text-lgi rounded-md">
            <h1>BTC support rate: 0.05sats/sec</h1>
          </div>
  </div>;
}

export const getServerSideProps:GetServerSideProps = async({params}) => {
    const videoID = params?.id;

    return {props : {videoID}}
}