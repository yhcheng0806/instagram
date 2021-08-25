import { useState } from "react";
import { Carousel } from "antd";
import { format } from "timeago.js";

import * as ROUTES from "../../constants/routes";
import Icon from "../common/icon";

import {
  Wrapper,
  TopContent,
  Profile,
  Avatar,
  UserInfo,
  Name,
  Other,
  MainContent,
  Photo,
  BottomContent,
  Actions,
  Status,
  Likes,
  ThemeContent,
  Body,
  Comments,
  TotalComment,
  Comment,
  Time,
  Config,
  Input,
  AddBtn,
} from "./styles";

const Post = ({ history, post }) => {
  const PF = ""
  const [liked, setLiked] = useState(false);
  const [collected, setCollected] = useState(false);

  return (
    <Wrapper>
      <TopContent>
        <Profile>
          <Avatar
            src={PF + post.avatar}
            onClick={() => history.push(ROUTES.PROFILE)}
          />
          <UserInfo>
            <Name>{post.name || post.username}</Name>
            <Other>Daejeon, South Korea</Other>
          </UserInfo>
        </Profile>
        <Icon type="icon-more" />
      </TopContent>
      <MainContent>
        <Carousel>
          {post.photos.map((photo) => (
            <Photo key={photo.src}>
              {photo.isImg ? (
                <img src={PF + photo.src} alt="" />
              ) : (
                <video src={PF + photo.src} controls></video>
              )}
            </Photo>
          ))}
        </Carousel>
      </MainContent>
      <BottomContent>
        <Actions>
          <Status>
            <Icon
              type={`icon-heart${liked ? "-active" : ""}`}
              onClick={() => setLiked(!liked)}
            />
            <Icon type="icon-chat" />
            <Icon type="icon-plane" />
          </Status>
          <Icon
            type={`icon-bookmark${collected ? "-active" : ""}`}
            onClick={() => setCollected(!collected)}
          />
        </Actions>
        <Likes>
          <span>{post.likes.length}</span>次赞
        </Likes>
        <ThemeContent>
          <Body>{post.desc}</Body>
          <Comments>
            <TotalComment>
              全部<span>0</span>条评论
            </TotalComment>
            <Comment>
              <div>
                <strong>用户a</strong>
                <span>聊天内容内容</span>
              </div>
              <Icon
                type={`icon-heart${liked ? "-active" : ""}`}
                onClick={() => setLiked(!liked)}
              />
            </Comment>
            <Comment>
              <div>
                <strong>用户b</strong>
                <span>聊天内容内容</span>
              </div>
              <Icon
                type={`icon-heart${liked ? "-active" : ""}`}
                onClick={() => setLiked(!liked)}
              />
            </Comment>
          </Comments>
          <Time>{format(post.createdAt, "zh_CN")}</Time>
        </ThemeContent>
        <Config>
          <Icon type="icon-emoji" />
          <Input placeholder="添加评论..." />
          <AddBtn>发布</AddBtn>
        </Config>
      </BottomContent>
    </Wrapper>
  );
};

export default Post;
