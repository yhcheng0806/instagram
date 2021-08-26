import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

import * as API from "../../api";
import Post from "../post";

import { Wrapper } from "./styles";

const PostSkeelton = ({ count }) => {
  const arr = new Array(count).fill(new Date().getTime());
  return (
    <>
      {arr.map((_, index) => {
        return (
          <div key={index} className="mb-6">
            <div className="flex items-center h-14 bg-white px-4">
              <Skeleton circle height={40} width={40} count={1} />
              <div className="flex-1 px-2 h-full flex flex-col justify-center">
                <Skeleton width={120} className="mb-1" height={12} count={1} />
                <Skeleton width={90} height={12} count={1} />
              </div>
            </div>
            <div className="h-60 md:h-96 my-1">
              <Skeleton className="w-full h-full" />
            </div>
            <div className="h-12">
              <Skeleton className="w-full h-full" />
            </div>
          </div>
        );
      })}
    </>
  );
};

const Timeline = ({ history }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await API.getPosts();
      setPosts(
        res.sort((p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt))
      );
    };
    getPosts();
  }, []);
  
  return (
    <Wrapper>
      {!posts.length ? (
        <PostSkeelton count={2} />
      ) : (
        posts.map((post) => (
          <Post key={post._id} post={post} history={history} />
        ))
      )}
    </Wrapper>
  );
};

export default Timeline;
