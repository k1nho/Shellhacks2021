import { GetServerSideProps } from "next";
import { getSession, session } from "next-auth/client";
import Link from "next/dist/client/link";
import { createInvoice } from "../../backend/api-helper";
import { db } from "../../firebase";

export default function post({ videoID }: { videoID: string }) {
  return (
    <div className=" min-h-screen justify-items-center items-center bg-gray-800">
      <div className="w-8/12 mx-auto">
        <div className="flex justify-between py-10">
          <Link href="/page2">
            <button className="flex items-center rounded-md bg-green-500 hover:green-400 p-0 px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>{" "}
              <p>Back to Feed</p>
            </button>
          </Link>
          <div className="col-span-6 bg-blue-500 p-4 text-lgi rounded-md">
            <h1>BTC support rate: 0.05sats/sec</h1>
          </div>
        </div>
        <video
          className="col-span-12rounded-md mx-auto"
          autoPlay
          controls
          muted
          src={`https://res.cloudinary.com/creatt/video/upload/w_1000,h_500/vc_auto/creatt/${videoID}`}
        ></video>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const videoID = params?.id;

  return { props: { videoID } };
};

         

