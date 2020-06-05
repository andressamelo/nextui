import React from "react";
import fetch from "isomorphic-unfetch";

const withFaq = WrappedComponent => {
  const FetchStarsData = props =>
    props.questions && props.questions.length > 0 ? (
      <WrappedComponent {...props} />
    ) : props.error ? (
      <div>Fetch error: {props.error} </div>
    ) : (
      <div>Loading...</div>
    );

  FetchStarsData.getInitialProps = async ctx => {
    let questions;
    let error;
    try {
      const res = await fetch("https://fitplayapp.s3.amazonaws.com/production/data/faq.json");
      const data = await res.json();
      questions = data;
    } catch (e) {
      error = e.toString();
    }

    if (WrappedComponent.getInitialProps)
      await WrappedComponent.getInitialProps(ctx);

    return { questions, error };
  };

  return FetchStarsData;
};

export default withFaq;