import { useDispatch, useSelector } from "react-redux";

import * as Actions from "../../context/actions/user";
import defaultAvatar from "../../assets/images/defaultAvatar.png";

import {
  Wrapper,
  UserInfo,
  Avatar,
  Button,
  Recommend,
  Title,
  ProfileList,
  ProfileItem,
  ProfileAvatar,
} from "./styles";

const Sidebar = ({ history }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state);
  const logout = () => {
    dispatch(Actions.logout(history));
  };

  return (
    <Wrapper>
      <UserInfo>
        <Avatar
        src={user.avatar ? PF + user.avatar : defaultAvatar} 
          onClick={() => history.push("/p/" + user.username)}
        />
        <div>
          <strong>{user.username}</strong>
          <span>instagram</span>
        </div>
        <Button onClick={logout}>退出</Button>
      </UserInfo>
      <Recommend>
        <Title>
          <span>为你推荐</span>
          <Button className="gray">查看全部</Button>
        </Title>
        <ProfileList>
          <ProfileItem>
            <ProfileAvatar />
            <div>
              <strong>instagram</strong>
              <span>tip</span>
            </div>
            <Button>关注</Button>
          </ProfileItem>
          <ProfileItem>
            <ProfileAvatar />
            <div>
              <strong>instagram</strong>
              <span>tip</span>
            </div>
            <Button>关注</Button>
          </ProfileItem>
          <ProfileItem>
            <ProfileAvatar />
            <div>
              <strong>instagram</strong>
              <span>tip</span>
            </div>
            <Button>关注</Button>
          </ProfileItem>
        </ProfileList>
      </Recommend>
    </Wrapper>
  );
};

export default Sidebar;
