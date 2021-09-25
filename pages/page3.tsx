// @ts-ignore
import { Post } from ".prisma/client";
import Head from "next/head";

export default function page3({
  feed,
}: {
  feed: (Post & {
    author: {
      name: string | null;
    } | null;
  })[];
}) {
  return (
    <div className="min-h-screen ">
      <Head>
        <title>page 3</title>
        <meta charSet="utf-8" />
        <meta name=" author" content="default author" />
        <meta name="description" content=" page 3 description " />
      </Head>
    </div>
  );
}
