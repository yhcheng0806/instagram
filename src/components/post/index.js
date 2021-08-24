import { useState } from "react";
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
  ImageContainer,
  VideoContainer,
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

const Post = ({ history }) => {
  const [liked, setLiked] = useState(false);
  const [collected, setCollected] = useState(false);

  return (
    <Wrapper>
      <TopContent>
        <Profile>
          <Avatar onClick={() => history.push(ROUTES.PROFILE)} />
          <UserInfo>
            <Name>instagram</Name>
            <Other>Daejeon, South Korea</Other>
          </UserInfo>
        </Profile>
        <Icon type="icon-more" />
      </TopContent>
      <MainContent>
        <ImageContainer></ImageContainer>
        <VideoContainer></VideoContainer>
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
          <span>0</span>次赞
        </Likes>
        <ThemeContent>
          <Body>标题内容标题内容</Body>
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
          <Time>1天前</Time>
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
