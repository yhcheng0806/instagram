import React from "react";

import Header from "../../components/common/header";
import Timeline from "../../components/timeline";
import Sidebar from "../../components/sidebar";

import { Wrapper, Container, LeftContent, RightContent } from "./styles";

const Home = ({ history, ...props }) => {
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
