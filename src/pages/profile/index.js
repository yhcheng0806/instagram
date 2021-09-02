import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  Wrapper,
  Container,
  TopProFileInfo,
  Avatar,
  InfoBox,
  Name,
  Button,
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
import * as ACTION from "../../context/actions/user";
import defaultAvatar from "../../assets/images/defaultAvatar.png";

const Profile = () => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { username } = useParams();
  const [profileInfo, setProfileInfo] = useState(null);
  const [posts, setPosts] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [followState,setFollowState] = useState(false)

  useEffect(() => {
    const getUser = async () => {
      const userRes = await API.getUser(username)
      setProfileInfo(userRes);
      const res = await API.getSelfPosts({ username });
      setPosts(
        res.sort((p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt))
      );

      setFollowState(user.following?.includes(userRes._id))
    };
    getUser();
  }, [username]);

  const uploadAvatar = async ({ target }) => {
    if (!target.files.length) return;

    const file = target.files[0];
    const fileName = Date.now() + file.name;
    const data = new FormData();
    data.append("name", fileName);
    data.append("file", file);
    await API.upload(data);
    await API.updateUser({ username, avatar: fileName });
    setAvatar(fileName);
    dispatch(ACTION.modifyUserInfo({ avatar: fileName }));
  };

  const handleFollow = async () => {
    await API[followState? 'unfollowUser':'followUser'](profileInfo._id,{userId:user._id})
    dispatch(ACTION[followState? 'unfollowUser':'followUser'](profileInfo._id))
    setFollowState(!followState)
  }

  return (
    <Wrapper>
      <Header />
      <Container>
        <TopProFileInfo>
          <label htmlFor="file">
            <Avatar>
              <div>
                {!profileInfo ? (
                  <Skeleton circle className="w-full h-full" />
                ) : (
                  <img
                    src={
                      avatar
                        ? PF + avatar
                        : profileInfo?.avatar
                          ? PF + profileInfo.avatar
                          : defaultAvatar
                    }
                    alt=""
                  />
                )}
              </div>
            </Avatar>
            {user?.username === profileInfo?.username ? (
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
              <span>{profileInfo?.username}</span>
              {
                profileInfo?.username !== user?.username ? <Button className={followState && 'empty'} onClick={handleFollow}>{followState ? '取关':'关注'}</Button> : null
              }
              {/* <Button className="empty">取关</Button> */}
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
                {profileInfo?.followers.length}
                <strong> 粉丝</strong>
              </span>
              <span>
                <strong>正在关注 </strong> {profileInfo?.following.length}
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
            {!posts.length ? (
              <Photo>
                <Skeleton className="w-full h-full" />
              </Photo>
            ) : (
              posts.map((post) => (
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
              ))
            )}
          </Photos>
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Profile;
