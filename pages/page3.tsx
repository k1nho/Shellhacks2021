// @ts-ignore
import { Post } from ".prisma/client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { CertsForm } from "../components/CertsForm";
import Login from "../components/Login";

export default function page3({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!session) {
    return <Login />;
  }

  return (
    <div className="min-h-screen ">
      <Head>
        <title>Creatt | Dashboard</title>
        <meta charSet="utf-8" />
        <meta name=" author" content="default author" />
        <meta name="description" content=" page 3 description " />
      </Head>
      <CertsForm email = {session.user.email}/>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  //Get user
  const session = await getSession(context);

  return { props: { session } };
};
