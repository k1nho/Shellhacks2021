import type { NextPage } from "next";
import Head from "next/head";
import { Container2 } from "../components/Container2";

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
      <Container2 />
    </div>
  );
};

export default Home;
