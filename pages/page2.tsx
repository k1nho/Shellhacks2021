import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { Authenticate } from "../components/Authenticate";
import Login from "../components/Login";
import {Stream} from "../components/Stream";

export default function page2({session}: InferGetServerSidePropsType<typeof getServerSideProps>) {

  if(!session){
    return <Authenticate/>
  }

  return (
    <div className="min-h-screen bg-gray-700">
      <Head>
        <title>Creatt | Feed</title>
        <meta charSet="utf-8" />
        <meta name=" author" content="default author" />
        <meta name="description" content=" page 2 description " />
      </Head>
      <div className="w-10/12 mx-auto">
             <Stream userEmail = {session.user.email}/> 
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //Get user
  const session = await getSession(context);

  return { props: { session } };
};
