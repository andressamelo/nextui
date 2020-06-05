import React from "react";
import Link from "next/link";
import Faq from "../components/Faq";
import withFaq from "../components/withFaq";

const LayoutPage = props => (
  <>
    This is the Layout Page
    <Faq {...props} />
    <Link href="/">
      <a>Go to Home Page</a>
    </Link>
  </>
);

export default withFaq(LayoutPage);