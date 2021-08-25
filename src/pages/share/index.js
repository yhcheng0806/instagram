import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Image } from "antd";
import { LoadingOutlined, CloseCircleOutlined } from "@ant-design/icons";

import Header from "../../components/common/header";
import Sidebar from "../../components/sidebar";
import Icon from "../../components/common/icon";

import * as API from "../../api";


import {
  Wrapper,
  Container,
  LeftContent,
  ShareWrapper,
  ShareNav,
  Title,
  Button,
  ShareContainer,
  Panel,
  Avatar,
  Textarea,
  MainContent,
  Photo,
  CloseIcon,
  ImgContainer,
  VideoContainer,
  Main,
  ShareOptions,
  ShareOption,
  ShareItem,
  Label,
  ShareBottom,
  SubmitBtn,
  RightContent,
} from "./styles";

const Share = ({ history, ...props }) => {
  const PF = "http://localhost:5000/static/"

  const [formData, setFormData] = useState({
    photos: [],
  });
  const [loading, setLoading] = useState(false);

  const { user } = useSelector((state) => state);
  const textarea = useRef(null);

  const handleData = ({ name, value }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onEdit = (e) => {
    handleData(e.target);

    if (textarea.current.scrollHeight >= textarea.current.offsetHeight) {
      textarea.current.style.height = textarea.current.scrollHeight + "px";
    }
  };

  const uploadFile = async ({ target }) => {
    if (!target.files.length) return;

    const isImg = /\.(png|jpg|gif|jpeg|webp)$/.test(target.value);

    const file = target.files[0];
    const fileName = Date.now() + file.name;
    const data = new FormData();
    data.append("name", fileName);
    data.append("file", file);
    await API.upload(data);
    handleData({
      name: "photos",
      value: [
        ...formData?.photos,
        {
          isImg,
          src: fileName,
        },
      ],
    });
  };

  const deletePhotoItem = (index) => {
    let photos = formData.photos;
    photos.splice(index, 1);
    setFormData({
      ...formData,
      photos,
    });
  };

  const checkData = () => {
    const { desc, photos } = formData;
    return desc && photos.length;
  };

  const submit = async () => {
    if (loading) return;
    if (!checkData()) return;

    setLoading(true);
    try {
      await API.createPost({
        ...formData,
        userId: user._id,
      });
      setLoading(false);
      history.replace("/");
    } catch (error) {}
  };

  return (
    <Wrapper>
      <Header />
      <Container>
        <LeftContent>
          <ShareWrapper>
            <ShareNav>
              <Icon type="icon-arrow-left" onClick={() => history.goBack()} />
              <Title>新帖子</Title>
              <Button className={checkData() && "active"} onClick={submit}>
                {loading ? <LoadingOutlined /> : "分享"}
              </Button>
            </ShareNav>
            <ShareContainer>
              <Panel>
                <Avatar src={user.avatar} />
                <Main>
                  <Textarea
                    placeholder="分享你的趣事"
                    name="desc"
                    onChange={onEdit}
                    ref={textarea}
                  />
                  <MainContent>
                    {formData?.photos.map((photo, index) => (
                      <Photo key={photo.src}>
                        <CloseIcon>
                          <CloseCircleOutlined
                            onClick={() => deletePhotoItem(index)}
                          />
                        </CloseIcon>
                        {photo.isImg ? (
                          <ImgContainer>
                            <Image
                              width="100%"
                              preview={false}
                              src={PF + photo.src}
                            />
                          </ImgContainer>
                        ) : (
                          <VideoContainer>
                            <video src={PF + photo.src} controls></video>
                          </VideoContainer>
                        )}
                      </Photo>
                    ))}
                  </MainContent>
                  <ShareOptions>
                    {/* <ShareOption>
            <Upload status="uploading" name="file" customRequest={uploadFile}>
              <Icon />
              <strong>照片/视频</strong>
            </Upload>
          </ShareOption> */}
                    <ShareOption>
                      <label htmlFor="file">
                        <Icon type="icon-photo" />
                        <strong>照片/视频</strong>
                        <input
                          style={{ display: "none" }}
                          type="file"
                          id="file"
                          accept="image/*,video/*"
                          onChange={(e) => uploadFile(e)}
                        />
                      </label>
                    </ShareOption>

                    <ShareOption>
                      <Icon type="icon-bookmark" />
                      <strong>#标签</strong>
                    </ShareOption>
                    {/* <ShareOption>
                      <Icon />
                      <strong>权限</strong>
                    </ShareOption> */}
                    <ShareOption>
                      <Icon type="icon-emoji" />
                      <strong>表情</strong>
                    </ShareOption>
                  </ShareOptions>
                </Main>
              </Panel>
              <ShareItem>
                <Label>添加地点</Label>
                <Icon type="icon-arrow-right" />
              </ShareItem>
              <ShareItem>
                <Label>标记用户</Label>
                <Icon type="icon-arrow-right" />
              </ShareItem>
            </ShareContainer>
            <ShareBottom>
              <SubmitBtn>分享</SubmitBtn>
            </ShareBottom>
          </ShareWrapper>
        </LeftContent>
        <RightContent>
          <Sidebar history={history} />
        </RightContent>
      </Container>
    </Wrapper>
  );
};

export default Share;
