import Head from "next/head";
import { Form, Layout } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashtoon Comic Generator</title>
        <meta name="description" content="Best Comic Generator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.png" />
      </Head>
     
      <Layout>
      <h1><strong><u>DASHTOON</u></strong></h1>
        <Form />
      </Layout>
    </>
  );
}

