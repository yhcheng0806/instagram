import { Wrapper, TopContent, Profile, Avatar, UserInfo, Name, Other, Icon, MainContent, ImageContainer, VideoContainer, BottomContent, Actions, Status, BookMark, ThemeContent, Body, Comments, Comment, Time, Config, Expression, Input, AddBtn } from './styles'

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
        <ThemeContent>
          <Body></Body>
        </ThemeContent>
        <Comments>
          <Comment>
            <div>
              <strong></strong>
              <span></span>
            </div>
            <Icon></Icon>
          </Comment>
        </Comments>
        <Time></Time>
        <Config>
          <Expression />
          <Input />
          <AddBtn>发布</AddBtn>
        </Config>
      </BottomContent>
    </Wrapper>
  )
}

export default Post