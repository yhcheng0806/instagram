import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
} from "./styles";

import Header from "../../components/common/header";
import Icon from "../../components/common/icon";
import * as API from "../../api";

const Profile = () => {
  const PF = "/static/";

  const state = useSelector((state) => state);

  const { username } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const getUser = async () => {
      setUser(await API.getUser(username));
      const res = await API.getSelfPosts({ username });
      setPosts(
        res.sort((p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt))
      );
    };
    getUser();
  }, [username]);

  const uploadAvatar = async ({ target }) => {
    const file = target.files[0];
    const fileName = Date.now() + file.name;
    const data = new FormData();
    data.append("name", fileName);
    data.append("file", file);
    await API.upload(data);
    await API.updateUser({ username, avatar: fileName });
    setAvatar(fileName);
  };

  return (
    <Wrapper>
      <Header />
      <Container>
        <TopProFileInfo>
          <label htmlFor="file">
            <Avatar>
              <img src={avatar ? PF + avatar : PF + user?.avatar} alt="" />
            </Avatar>
            {state?.user?.username === user?.username ? (
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept="image/*"
                onChange={(e) => uploadAvatar(e)}
              />
            ) : null}
          </label>

          <InfoBox>
            <Name>
              <span>{user?.username}</span>
              {/* <Button>发消息</Button> */}
              {/* <Button>
                <Icon />
              </Button>
              <Icon /> */}
            </Name>
            <Status>
              <span>
                {posts.length}
                <strong> 篇帖子</strong>
              </span>
              <span>
                {user?.followers.length}
                <strong> 粉丝</strong>
              </span>
              <span>
                <strong>正在关注 </strong> {user?.following.length}
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
            {posts.map((post) => (
              <Photo key={post._id} className="group">
                <Mask>
                  <FuncItem>
                    <Icon type="icon-heart-white" />0
                  </FuncItem>
                  <FuncItem>
                    <Icon type="icon-chat-white" />0{" "}
                  </FuncItem>
                </Mask>
                <img src={PF + post.photos[0].src} alt="" />
              </Photo>
            ))}
          </Photos>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Profile;
