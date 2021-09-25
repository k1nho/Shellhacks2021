import type { NextPage } from "next";
import Head from "next/head";
import Stream from "../components/Stream";

const page2: NextPage = () => {

  
  return (
    <div className="min-h-screen ">
      <Head>
        <title>page 2</title>
        <meta charSet="utf-8" />
        <meta name=" author" content="default author" />
        <meta name="description" content=" page 2 description " />
      </Head>
      This is page 2
     <Stream/> 
    </div>
  );
};

export default page2;
