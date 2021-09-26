import type { NextPage } from "next";
import Head from "next/head";
import Login from "../components/Login";
import {Header} from "../components/Home"
import { InfoContainer } from "../components/InfoContainer";
import { FooterContainer } from "../components/FooterContainer";

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

export default Home;
