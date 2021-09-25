import type { NextPage } from "next";
import Head from "next/head";
import Stream from "../components/Stream";

const page2: NextPage = () => {

  
  return (
    <div className="min-h-screen bg-gray-700">
      <Head>
        <title>Creatt | Feed</title>
        <meta charSet="utf-8" />
        <meta name=" author" content="default author" />
        <meta name="description" content=" page 2 description " />
      </Head>
     <Stream/> 
    </div>
  );
};



export default page2;
