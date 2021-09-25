import type { NextPage } from "next";
import Head from "next/head";
// @ts-ignore
import { useEffect, useState } from "react";
import {Upload} from "../components/Upload"
import {Video} from "../components/Video"

const page1: NextPage = () => {

  return (
    <div className="min-h-screen ">
      <Head>
        <title>page 1</title>
        <meta charSet="utf-8" />
        <meta name=" author" content="default author" />
        <meta name="description" content=" page 1 description " />
      </Head>
    <main className="flex h-screen justify-center items-center text-white ">
        <div className="text-center bg-yellow-500 p-10 rounded-lg shadow-2xl">
          <h1 className="text-3xl font-bold">
            Creatt Video Upload
          </h1>
          <Upload />
        </div>
      </main> 
    </div>
  );
};

export default page1;
