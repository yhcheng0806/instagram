import React, { useState, useEffect } from "react";
import * as API from "../../api";
import Post from "../post";

import { Wrapper } from "./styles";

const Timeline = ({ history }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await API.getPosts();
      setPosts(res);
    };
    getPosts();
  }, []);
  return (
    <Wrapper>
      {posts?.map((post) => (
        <Post key={post._id} post={post} history={history} />
      ))}
    </Wrapper>
  );
};

export default Timeline;
