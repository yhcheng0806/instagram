import React from "react";
import { useSelector } from "react-redux";
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import Header from "../../components/common/header";
import Timeline from '../../components/timeline'
import Sidebar from '../../components/sidebar'

import { Wrapper, Container, LeftContent, RightContent } from "./styles";

NProgress.start()
const Home = (props) => {
  const state = useSelector((state) => state);
  console.log(props, state, "--props");
  return (
    <Wrapper>
      <Header />
      <Container>
        <LeftContent>
          <Timeline />
        </LeftContent>
        <RightContent>
          <Sidebar />
        </RightContent>
      </Container>
    </Wrapper>
  );
};

export default Home;
