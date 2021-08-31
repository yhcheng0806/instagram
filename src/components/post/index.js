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
  const [msgContent, setMsgContent] = useState("");
  const [moreState, setMoreState] = useState(false);
  const [toInfo, setToInfo] = useState({
    placeholder: "",
    _id: "",
  });
  const [collected, setCollected] = useState(false);

  useEffect(() => {
    setMsgs(post.msgList);
  }, [post]);

  const handlLike = async () => {
    await API.likePost(post._id, { userId: user._id });
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const focusMsgInfo = ({ _id, username }) => {
    console.log(user._id, _id);
    setToInfo({
      placeholder: _id === user._id ? "" : `回复 ${username}`,
      _id,
    });
    setMsgContent("");
  };

  const send = async () => {
    if (!msgContent) return;

    const msgItem = await API.sendMsg({
      postId: post._id,
      from: user._id,
      to: toInfo._id || user._id,
      msg:msgContent,
    });

    setMsgs([msgItem, ...msgs]);

    setMsgContent("");
    setToInfo({ placeholder: "", _id: "" });
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
    setMsgContent(msgContent + emoji.native);
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
            src={post.userInfo.avatar ? PF + post.userInfo.avatar : defaultAvatar}
            onClick={() => history.push("/p/" + post.userInfo.username)}
          />
          <UserInfo>
            <Name>{post.userInfo.name || post.userInfo.username}</Name>
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
                {msgs.slice(0, moreState ? msgs.length : 3).map((msg,i) => (
                  <Comment key={i}>
                    <strong
                      onClick={() => toProfilePage(msg?.fromUser?.username)}
                    >
                      {msg?.fromUser?.username}
                    </strong>
                    {msg.fromUser._id !== msg.toUser._id ? (
                      <>
                        <label>回复</label>
                        <strong
                          onClick={() => toProfilePage(msg?.toUser?.username)}
                        >
                          {msg?.toUser?.username}
                        </strong>
                      </>
                    ) : null}
                    <div
                      onClick={() => {
                        focusMsgInfo(msg.fromUser);
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
    </Wrapper>
  );
};

export default Post;
