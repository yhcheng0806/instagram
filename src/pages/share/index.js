import React from "react";
import { useSelector } from "react-redux";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

import Header from "../../components/common/header";
import Sidebar from "../../components/sidebar";
import Icon from "../../components/common/icon";

import {
  Wrapper,
  Container,
  LeftContent,
  ShareWrapper,
  ShareNav,
  Title,
  Button,
  ShareContainer,
  Panel,
  Avatar,
  Textarea,
  ImageContainer,
  CloseCircleFilled,
  Image,
  Main,
  ShareOptions,
  ShareOption,
  ShareItem,
  Label,
  ShareBottom,
  SubmitBtn,
  RightContent,
} from "./styles";

NProgress.start();
const Share = ({ history, ...props }) => {
  const state = useSelector((state) => state);
  console.log(history, props, state, "--props");
  return (
    <Wrapper>
      <Header />
      <Container>
        <LeftContent>
          <ShareWrapper>
            <ShareNav>
              <Icon type="icon-arrow-left" onClick={() => history.goBack()} />
              <Title>新帖子</Title>
              <Button>分享</Button>
            </ShareNav>
            <ShareContainer>
              <Panel>
                <Avatar />
                <Main>
                  <Textarea placeholder="分享你的趣事" />
                  <ImageContainer>
                    <CloseCircleFilled></CloseCircleFilled>
                    <Image />
                  </ImageContainer>
                  <ShareOptions>
                    {/* <ShareOption>
            <Upload status="uploading" name="file" customRequest={uploadFile}>
              <Icon />
              <strong>照片/视频</strong>
            </Upload>
          </ShareOption> */}
                    <ShareOption>
                      <label htmlFor="file">
                        <Icon type="icon-photo" />
                        <strong>照片/视频</strong>
                        <input
                          style={{ display: "none" }}
                          type="file"
                          id="file"
                          accept=".png,.jpeg,.jpg"
                        />
                      </label>
                    </ShareOption>

                    <ShareOption>
                      <Icon type="icon-bookmark" />
                      <strong>#标签</strong>
                    </ShareOption>
                    {/* <ShareOption>
                      <Icon />
                      <strong>权限</strong>
                    </ShareOption> */}
                    <ShareOption>
                      <Icon type="icon-emoji" />
                      <strong>表情</strong>
                    </ShareOption>
                  </ShareOptions>
                </Main>
              </Panel>
              <ShareItem>
                <Label>添加地点</Label>
                <Icon type="icon-arrow-right" />
              </ShareItem>
              <ShareItem>
                <Label>标记用户</Label>
                <Icon type="icon-arrow-right" />
              </ShareItem>
            </ShareContainer>
            <ShareBottom>
              <SubmitBtn>分享</SubmitBtn>
            </ShareBottom>
          </ShareWrapper>
        </LeftContent>
        <RightContent>
          <Sidebar history={history} />
        </RightContent>
      </Container>
    </Wrapper>
  );
};

export default Share;
