import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Navigation";
import Head from "next/head";
import { Auth0Provider } from "@auth0/auth0-react";

const Container = (props) => (
  <div>
    <Head>
      <title>Next.js</title>
    </Head>
    <Navigation />
    <div className="container p-4">{props.children}</div>
  </div>
);

export default Container;