import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const params = useParams();
  console.log(params);
  return <h1>Contact {params.contactId}</h1>;
};

export default Contact;
