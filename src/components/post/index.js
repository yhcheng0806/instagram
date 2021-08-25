import { useState } from "react";
import { useSelector } from "react-redux";

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
import * as API from "../../api";

const Post = ({ history, post }) => {
  const PF = "http://localhost:5000/static/";
  const { user } = useSelector((state) => state);
  const [liked, setLiked] = useState(post.likes.includes(user._id));
  const [likes, setLikes] = useState(post.likes.length);
  const [collected, setCollected] = useState(false);

  const handlLike = async () => {
    await API.likePost(post._id, { userId: user._id });
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <Wrapper>
      <TopContent>
        <Profile>
          <Avatar
            src={PF + post.avatar}
            onClick={() => history.push('/p/'+post.username)}
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
              onClick={handlLike}
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
          <span>{likes}</span>次赞
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
                type={`icon-heart${false ? "-active" : ""}`}
                onClick={() => setLiked(!liked)}
              />
            </Comment>
            <Comment>
              <div>
                <strong>用户b</strong>
                <span>聊天内容内容</span>
              </div>
              <Icon
                type={`icon-heart${false ? "-active" : ""}`}
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
