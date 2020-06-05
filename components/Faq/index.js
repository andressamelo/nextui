import React from "react";

const Faq = ({ questions }) =>
questions.map(({ id, question, answer }) => (
    <div key={id}>
      <span style={{ fontSize: 26, marginRight: 5 }}>{question}</span>
      <span style={{ fontSize: 20 }}>({answer})</span>
    </div>
  ));

export default Faq;