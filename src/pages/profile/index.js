import React from "react";
import { useParams } from "react-router-dom";
import {
  Wrapper,
  Container,
  TopProFileInfo,
  Avatar,
  InfoBox,
  Name,
  Button,
  Icon,
  Status,
  Account,
  TabList,
  Tab,
  Main,
  Photos,
  Photo,
  Mask,
  FuncItem,
  ImgContainer,
} from "./styles";

import Header from "../../components/common/header";

const Profile = (props) => {
  const params = useParams();
  console.log(props, params, "--props");
  return (
    <Wrapper>
      <Header />
      <Container>
        <TopProFileInfo>
          <Avatar>
            <img src="" alt="" />
          </Avatar>
          <InfoBox>
            <Name>
              <span>{params?.username}</span>
              {/* <Button>发消息</Button> */}
              {/* <Button>
                <Icon />
              </Button>
              <Icon /> */}
            </Name>
            <Status>
              <span>
                0<strong> 篇帖子</strong>
              </span>
              <span>
                0<strong> 粉丝</strong>
              </span>
              <span>
                <strong>正在关注 </strong>0
              </span>
            </Status>
            <Account>yhcheng</Account>
          </InfoBox>
        </TopProFileInfo>
        <TabList>
          <Tab>
            <Icon />
            帖子
          </Tab>
          <Tab>
            <Icon />
            IGTV
          </Tab>
          <Tab>
            <Icon />
            收藏夹
          </Tab>
          <Tab>
            <Icon />
            已标记
          </Tab>
        </TabList>
        <Main>
          <Photos>
            <Photo className="group">
              <Mask>
                <FuncItem>
                  <Icon />0
                </FuncItem>
                <FuncItem>
                  <Icon />0
                </FuncItem>
              </Mask>
              <ImgContainer />
            </Photo>
            <Photo>
              <Mask>
                <FuncItem>
                  <Icon />0
                </FuncItem>
                <FuncItem>
                  <Icon />0
                </FuncItem>
              </Mask>
              <ImgContainer />
            </Photo>
            <Photo>
              <Mask>
                <FuncItem>
                  <Icon />0
                </FuncItem>
                <FuncItem>
                  <Icon />0
                </FuncItem>
              </Mask>
              <ImgContainer />
            </Photo>
            <Photo>
              <Mask>
                <FuncItem>
                  <Icon />0
                </FuncItem>
                <FuncItem>
                  <Icon />0
                </FuncItem>
              </Mask>
              <ImgContainer />
            </Photo>
            <Photo>
              <Mask>
                <FuncItem>
                  <Icon />0
                </FuncItem>
                <FuncItem>
                  <Icon />0
                </FuncItem>
              </Mask>
              <ImgContainer />
            </Photo>
            <Photo>
              <Mask>
                <FuncItem>
                  <Icon />0
                </FuncItem>
                <FuncItem>
                  <Icon />0
                </FuncItem>
              </Mask>
              <ImgContainer />
            </Photo>
          </Photos>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Profile;
