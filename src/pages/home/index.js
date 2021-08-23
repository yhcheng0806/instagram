import React from "react";
import { useSelector } from "react-redux";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import Header from "../../components/common/header";
import Timeline from "../../components/timeline";
import Sidebar from "../../components/sidebar";

import { Wrapper, Container, LeftContent, RightContent } from "./styles";

NProgress.start();
const Home = ({ history, ...props }) => {
  const state = useSelector((state) => state);
  console.log(props, state, "--props");
  return (
    <Wrapper>
      <Header />
      <Container>
        <LeftContent>
          <Timeline history={history} />
        </LeftContent>
        <RightContent>
          <Sidebar history={history} />
        </RightContent>
      </Container>
    </Wrapper>
  );
};

export default Home;
