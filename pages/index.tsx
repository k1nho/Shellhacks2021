import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";
import {Header} from "../components/Home"
import { InfoContainer } from "../components/InfoContainer";
import { FooterContainer } from "../components/FooterContainer";
import { getSession } from "next-auth/client";
import {validate} from "../authlib/validate";
import {db} from "../firebase"

const Home: NextPage = () => {
  return (
    <div className="min-h-screen ">
      <Head>
        <title>Home</title>
        <meta charSet="utf-8" />
        <meta name=" author" content="author" />
        <meta
          name="google-signin-client_id"
          content={`${process.env.GOOGLE_CLIENT_ID}`}
        />
        <meta name="description" content=" Page description " />
      </Head>
      <Header/>
      <InfoContainer/>
      <FooterContainer/>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  //Get user
  const session = await getSession(context);

  if (session != null) {
    const name = session?.user?.name;
    const email = session?.user?.email;
    var docData = {
      name,
      email,
    };

    const addtodb = await validate(email);

    if (addtodb) {
      db.collection("users")
        .doc()
        .set(docData)
        .then(() => {
          console.log("Document successfully written!");
        });
    }
  }

  return {
    props: {
      session,
    },
  };

  };
export default Home;
