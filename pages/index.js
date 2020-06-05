import React from "react";
import Link from "next/link";
import Faq from "../components/Faq";
import withFaq from "../components/withFaq";

const Home = props => {
  return (
    <>
      This is the Home Page
      
      <Faq {...props} />

      <Link href="/layout">
        <a>Go to Layout Page</a>
      </Link>
    </>
  );
};

export default withFaq(Home);