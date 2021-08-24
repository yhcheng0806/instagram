import Post from "../post";

import { Wrapper } from "./styles";

const Timeline = ({ history }) => {
  return (
    <Wrapper>
      <Post history={history} />
      <Post />
      <Post />
      <Post />
    </Wrapper>
  );
};

export default Timeline;
