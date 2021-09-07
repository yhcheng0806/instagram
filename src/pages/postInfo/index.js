import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import PullToRefresh from 'rmc-pull-updown-to-refresh';

import { format } from "timeago.js";
import { Carousel, Dropdown } from "antd";
import { Picker } from "emoji-mart";

import Header from "../../components/common/header";
import Icon from "../../components/common/icon";
import defaultAvatar from "../../assets/images/defaultAvatar.png";

import {
  Wrapper,
  Container,
  PostWrapper,
  PostLeft,
  Photo,
  PostRight,
  TopContent,
  Profile,
  Avatar,
  UserInfo,
  Name,
  Other,
  MainContent,
  BottomContent,
  Actions,
  Status,
  Likes,
  Comments,
  Comment,
  CommentBody,
  CommentText,
  CommentStatus,
  Time,
  Config,
  Input,
  AddBtn,
} from "./styles";
import * as API from "../../api";

const PostInfo = ({ history }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { postId } = useParams();
  const { user } = useSelector((state) => state);
  const [liked, setLiked] = useState(0);
  const [likes, setLikes] = useState(0);
  const [post, setPost] = useState({});
  const [msgContent, setMsgContent] = useState("");
  const [toInfo, setToInfo] = useState({
    placeholder: "",
    _id: "",
  });
  const [collected, setCollected] = useState(false);

  const getPost = async () => {
    const result = await API.getPost(postId);
    result.msgList.sort(
      (p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt)
    );

    setPost(result);
    setLiked(result.likes.includes(user?._id));
    setLikes(result.likes.length);
  };

  useEffect(() => {
    getPost();
  }, [postId]);

  const handlLike = async () => {
    await API.likePost(post._id, { userId: user?._id });
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const focusMsgInfo = ({ _id, username }) => {
    console.log(user?._id, _id);
    setToInfo({
      placeholder: _id === user?._id ? "" : `回复 ${username}`,
      _id,
    });
    setMsgContent("");
  };

  const send = async () => {
    if (!msgContent) return;

    const msgItem = await API.sendMsg({
      postId: post._id,
      from: user?._id,
      to: toInfo._id || user?._id,
      msg: msgContent,
    });

    setPost({
      ...post,
      msgList: [msgItem, ...post.msgList],
    });

    setMsgContent("");
    setToInfo({ placeholder: "", _id: "" });
    // getMsgs();
  };

  const toProfilePage = (username) => {
    history.push("/p/" + username);
  };

  const addEmoji = (emoji) => {
    console.log(emoji);
    setMsgContent(msgContent + emoji.native);
  };

  const handleItemLike = async (item) => {
    await API.likeMsg(item._id, { userId: user?._id });
    getPost();
  };

  const menu = (
    <div className="bg-white p-2 grid grid-cols-1 gap-2">
      <div>举报</div>
      <div>停止关注</div>
      <div>分享到...</div>
      <div>取消</div>
    </div>
  );

  const onPullUp = () => { }

  const onPullDown = () => {
    getPost()
  }

  return (
    <Wrapper>
      <Header />
      <Container>
        <PullToRefresh onPullDown={onPullDown} onPullUp={onPullUp}>
          <PostWrapper>
            <PostLeft>
              <Carousel>
                {post.photos?.map((photo) => (
                  <Photo key={photo.src}>
                    {photo.isImg ? (
                      <img src={PF + photo.src} alt="" />
                    ) : (
                      <video src={PF + photo.src} controls></video>
                    )}
                  </Photo>
                ))}
              </Carousel>
            </PostLeft>
            <PostRight>
              <TopContent>
                <Profile>
                  <Avatar
                    src={
                      post.userInfo?.avatar
                        ? PF + post.userInfo.avatar
                        : defaultAvatar
                    }
                    onClick={() => history.push("/p/" + post.userInfo.username)}
                  />
                  <UserInfo>
                    <Name>{post.userInfo?.name || post.userInfo?.username}</Name>
                    <Other>Daejeon, South Korea</Other>
                  </UserInfo>
                </Profile>
                <Dropdown
                  overlay={menu}
                  placement="bottomRight"
                  trigger={["click"]}
                >
                  <Icon type="icon-more" onClick={(e) => e.preventDefault()} />
                </Dropdown>
              </TopContent>
              <MainContent>
                <Comments>
                  <Comment>
                    <Avatar
                      src={
                        post.userInfo?.avatar
                          ? PF + post.userInfo?.avatar
                          : defaultAvatar
                      }
                    ></Avatar>
                    <CommentBody>
                      <CommentText>
                        <strong>{post.userInfo?.username}</strong>
                        <span onClick={() => focusMsgInfo(post.userInfo)}>{post.desc}</span>
                      </CommentText>
                    </CommentBody>
                  </Comment>
                  {post.msgList?.map((msg) => (
                    <Comment key={msg._id}>
                      <Avatar
                        onClick={() =>
                          toProfilePage(msg?.fromUser?.username)
                        }
                        src={
                          msg.fromUser?.avatar
                            ? PF + msg.fromUser.avatar
                            : defaultAvatar
                        }
                      ></Avatar>
                      <CommentBody>
                        <CommentText>
                          <strong onClick={() =>
                            toProfilePage(msg?.fromUser?.username)
                          }>{msg.fromUser.username}</strong>
                          {msg.fromUser._id !== msg.toUser._id ? (
                            <>
                              <label>回复</label>
                              <strong
                                onClick={() =>
                                  toProfilePage(msg?.toUser?.username)
                                }
                              >
                                {msg?.toUser?.username}
                              </strong>
                            </>
                          ) : null}
                          <span onClick={() => focusMsgInfo(msg.fromUser)}>
                            {msg.msg}
                          </span>
                        </CommentText>
                        <CommentStatus>
                          <div>{format(msg.createdAt, "zh_CN")}</div>
                          <div>
                            <span>{msg.likes.length}</span>次赞
                          </div>
                          <div onClick={() => focusMsgInfo(msg.fromUser)}>
                            回复
                          </div>
                        </CommentStatus>
                      </CommentBody>
                      <Icon
                        type={`icon-heart${msg.likes.includes(user?._id) ? "-active" : ""
                          }`}
                        onClick={() => handleItemLike(msg)}
                      />
                    </Comment>
                  ))}
                </Comments>
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
                <Time>{format(post.createdAt, "zh_CN")}</Time>
                <Config>
                  <Dropdown
                    overlay={<Picker onSelect={addEmoji} sheetSize={32} />}
                    placement="bottomRight"
                    trigger={["click"]}
                  >
                    <Icon type="icon-emoji" onClick={(e) => e.preventDefault()} />
                  </Dropdown>
                  <Input
                    value={msgContent}
                    onChange={(e) => setMsgContent(e.target.value)}
                    placeholder={
                      toInfo.placeholder ? toInfo.placeholder : "添加评论..."
                    }
                  />
                  <AddBtn className={msgContent && "active"} onClick={send}>
                    发布
                  </AddBtn>
                </Config>
              </BottomContent>
            </PostRight>
          </PostWrapper>
        </PullToRefresh>
      </Container>
    </Wrapper>
  );
};

export default PostInfo;
