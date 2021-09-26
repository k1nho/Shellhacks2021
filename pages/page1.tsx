import type { GetServerSideProps, NextPage,InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
// @ts-ignore
import { useEffect, useState } from "react";
import Login from "../components/Login";
import {Upload} from "../components/Upload"

export default function page1({session}: InferGetServerSidePropsType<typeof getServerSideProps>){

  if(!session){
    return <Login/>
  }

  return (
    <div className="min-h-screen bg-gray-800">
      <Head>
        <title>Creatt | Upload</title>
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  //Get user
  const session = await getSession(context);

  return {props : {session}}

};

