import {
  Wrapper,
  TopContent,
  Profile,
  Avatar,
  UserInfo,
  Name,
  Other,
  Icon,
  MainContent,
  ImageContainer,
  VideoContainer,
  BottomContent,
  Actions,
  Status,
  Likes,
  BookMark,
  ThemeContent,
  Body,
  Comments,
  TotalComment,
  Comment,
  Time,
  Config,
  Expression,
  Input,
  AddBtn,
} from "./styles";

const Post = () => {
  return (
    <Wrapper>
      <TopContent>
        <Profile>
          <Avatar />
          <UserInfo>
            <Name>instagram</Name>
            <Other>Daejeon, South Korea</Other>
          </UserInfo>
        </Profile>
        <Icon />
      </TopContent>
      <MainContent>
        <ImageContainer></ImageContainer>
        <VideoContainer></VideoContainer>
      </MainContent>
      <BottomContent>
        <Actions>
          <Status>
            <Icon />
            <Icon />
            <Icon />
          </Status>
          <BookMark>
            <Icon />
          </BookMark>
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
              <span></span>
              {/* <Icon></Icon> */}
            </Comment>
            <Comment>
              <div>
                <strong>用户b</strong>
                <span>聊天内容内容</span>
              </div>
              <span></span>
            </Comment>
          </Comments>
          <Time>1天前</Time>
        </ThemeContent>
        <Config>
          <Expression />
          <Input placeholder='添加评论...' />
          <AddBtn>发布</AddBtn>
        </Config>
      </BottomContent>
    </Wrapper>
  );
};

export default Post;
