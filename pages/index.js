import Head from "next/head";
import { primaryColor } from "/styles/vars.module.sass";
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";

const StyledH2 = styled.h2`
  color: ${primaryColor};
  text-decoration: ${({ tdecorate }) => tdecorate};
`;

const RandomButton = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(0);
  const fetchRand = () => {
    setLoading(true)
    fetch('/api/hello')
      .then((resp) => resp.json())
      .then(json => {
        setValue(json.random)
        setLoading(false)
      });
  };
  return (
    <span>
      <input type="submit" value="hit rand API" onClick={fetchRand} />
      {loading && 'LOADING'}
      {value}
    </span>
  );
};

export default function Home() {
  return (
    <div>
      <Head>
        <title>!title-</title>
      </Head>
      <h1>index</h1>
      <h3>global styled</h3>
      <StyledH2 tdecorate={"underline"}>emotion styled</StyledH2>
      <RandomButton />
    </div>
  );
}
