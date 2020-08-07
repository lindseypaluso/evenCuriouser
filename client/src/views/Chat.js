import React from "react";
import Hero from "../components/Hero";
import Loading from "../components/Loading";
import { withAuthenticationRequired } from "@auth0/auth0-react";

const Chat = () => (
    <Hero />
);

export default withAuthenticationRequired(Chat, {
  onRedirecting: () => <Loading />,
});
