import React from "react";
import Link from "next/link";
import Faq from "../components/Faq";
import withFaq from "../components/withFaq";
import FullBanner from "../components/FullBanner";
import VideoArea from "../components/VideoArea";

const Home = props => {
  return (
    <>
      This is the Home Page
      <FullBanner />
      <VideoArea />
      
      <Faq {...props} />

      <Link href="/layout">
        <a>Go to Layout Page</a>
      </Link>
    </>
  );
};

export default withFaq(Home);