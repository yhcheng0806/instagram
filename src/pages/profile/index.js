import React from "react";
import { useParams } from "react-router-dom";
import defaultAvatar from "../../assets/images/defaultAvatar.png";

import {
  Wrapper,
  Container,
  TopProFileInfo,
  Avatar,
  InfoBox,
  Name,
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
import Icon from "../../components/common/icon";

const Profile = (props) => {
  const params = useParams();
  return (
    <Wrapper>
      <Header />
      <Container>
        <TopProFileInfo>
          <Avatar>
            <img src={defaultAvatar} alt="" />
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
            <Account>instagram</Account>
          </InfoBox>
        </TopProFileInfo>
        <TabList>
          <Tab>
            <Icon type="icon-layout3" />
            帖子
          </Tab>
          <Tab>
            <Icon type="icon-tv" />
            IGTV
          </Tab>
          <Tab>
            <Icon type="icon-bookmark" />
            收藏夹
          </Tab>
          <Tab>
            <Icon type="icon-frame" />
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
