import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { validate } from "../authlib/validate";
import { Container2 } from "../components/Container2";
import { Container3 } from "../components/Container3";
import { db } from "../firebase";

const Home: NextPage = ({
  session,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  if (!session) {
    return <></>;
  }
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
      <Container3 />
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
