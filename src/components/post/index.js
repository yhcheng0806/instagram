import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { Carousel, Dropdown } from "antd";
import { Picker } from "emoji-mart";

import { format } from "timeago.js";

import Icon from "../common/icon";
import defaultAvatar from "../../assets/images/defaultAvatar.png";

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
  CommentMoreBtn,
  Comment,
  Time,
  Config,
  Input,
  AddBtn,
} from "./styles";
import * as API from "../../api";

const Post = ({ history, post, ...props }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useSelector((state) => state);
  const [liked, setLiked] = useState(post.likes.includes(user._id));
  const [likes, setLikes] = useState(post.likes.length);
  const [msgs, setMsgs] = useState([]);
  const [msg, setMsg] = useState("");
  const [moreState, setMoreState] = useState(false);
  const [toInfo, setToInfo] = useState({
    placeholder: "",
    userId: "",
    username: "",
    avatar: "",
  });
  const [postUser, setPostUser] = useState({});
  const [collected, setCollected] = useState(false);

  useEffect(() => {
    const getMsgs = async () => {
      const res = await API.getMsgList(post._id);
      setMsgs(
        res.sort((m1, m2) => new Date(m2.createdAt) - new Date(m1.createdAt))
      );
      setToInfo({
        placeholder: "",
        userId: user._id,
        username: user.username,
        avatar: user.avatar,
      });
    };
    const getUser = async () => {
      const res = await API.getUser(post.userId);
      setPostUser(res);
    };

    getMsgs();
    getUser();
  }, [post, user]);

  const handlLike = async () => {
    await API.likePost(post._id, { userId: user._id });
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const focusMsgInfo = ({ userId, username, name, avatar }) => {
    setToInfo({
      placeholder: userId === user._id ? "" : `回复 ${username}`,
      userId,
      username,
      name,
      avatar,
    });
    setMsg("");
  };

  const send = async () => {
    if (!msg) return;

    const res = await API.sendMsg({
      postId: post._id,
      from: user._id,
      to: toInfo.userId,
      msg,
    });
    const msgItem = {
      ...res,
      from: {
        username: user.username,
        name: user.name,
        userId: user._id,
        avatar: user.avatar,
      },
      to: toInfo,
    };

    setMsgs([msgItem, ...msgs]);

    setMsg("");
    // getMsgs();
  };

  const toProfilePage = (username) => {
    history.push("/p/" + username);
  };

  const toPostPage = () => {
    history.push("/post/" + post._id);
  };

  const addEmoji = (emoji) => {
    console.log(emoji);
    setMsg(msg + emoji.native);
  };

  const menu = (
    <div className="bg-white p-2 grid grid-cols-1 gap-2">
      <div>举报</div>
      <div>停止关注</div>
      <div onClick={toPostPage}>打开帖子</div>
      <div>分享到...</div>
      <div>取消</div>
    </div>
  );

  return (
    <Wrapper>
      <TopContent>
        <Profile>
          <Avatar
            src={postUser.avatar ? PF + postUser.avatar : defaultAvatar}
            onClick={() => history.push("/p/" + postUser.username)}
          />
          <UserInfo>
            <Name>{postUser.name || postUser.username}</Name>
            <Other>Daejeon, South Korea</Other>
          </UserInfo>
        </Profile>
        <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
          <Icon type="icon-more" onClick={(e) => e.preventDefault()} />
        </Dropdown>
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
            {!msgs.length ? null : (
              <>
                <TotalComment>
                  全部<span>{msgs.length}</span>条评论
                </TotalComment>
                {msgs.slice(0, moreState ? msgs.length : 3).map((msg) => (
                  <Comment key={msg._id}>
                    <strong onClick={() => toProfilePage(msg.from.username)}>
                      {msg.from.username}
                    </strong>
                    {msg.from.userId !== msg.to.userId ? (
                      <>
                        <label>回复</label>
                        <strong onClick={() => toProfilePage(msg.to.username)}>
                          {msg.to.username}
                        </strong>
                      </>
                    ) : null}
                    <div
                      onClick={() => {
                        focusMsgInfo(msg.from);
                      }}
                    >
                      {msg.msg}
                    </div>
                    {/* <Icon
                      type={`icon-heart${false ? "-active" : ""}`}
                      onClick={() => setLiked(!liked)}
                    /> */}
                  </Comment>
                ))}
              </>
            )}
          </Comments>
          {msgs.length > 3 ? (
            <CommentMoreBtn onClick={() => setMoreState(!moreState)}>
              {moreState ? "收起" : "查看更多"}
            </CommentMoreBtn>
          ) : null}
          <Time>{format(post.createdAt, "zh_CN")}</Time>
        </ThemeContent>
        <Config>
          <Dropdown
            overlay={<Picker onSelect={addEmoji} sheetSize={32} />}
            placement="bottomRight"
            trigger={["click"]}
          >
            <Icon type="icon-emoji" onClick={(e) => e.preventDefault()} />
          </Dropdown>
          <Input
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
            placeholder={
              toInfo.placeholder ? toInfo.placeholder : "添加评论..."
            }
          />
          <AddBtn className={msg && "active"} onClick={send}>
            发布
          </AddBtn>
        </Config>
      </BottomContent>
    </Wrapper>
  );
};

export default Post;
