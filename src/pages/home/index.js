import React from "react";
import { useSelector } from "react-redux";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Header from "../../components/common/header";

import { Wrapper,Container } from "./styles";

NProgress.start() 
const Home = (props) => {
  const state = useSelector((state) => state);
  console.log(props, state, "--props");
  return (
    <Wrapper>
      <Header />
      <Container></Container>
    </Wrapper>
  );
};

export default Home;
