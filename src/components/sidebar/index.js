import * as ROUTES from "../../constants/routes";
import { useDispatch } from "react-redux";
import defaultAvatar from "../../assets/images/defaultAvatar.png";

import * as Actions from '../../context/actions/user'

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
  const dispatch = useDispatch()
  // const user = useSelector((state) => state.user);
  // console.log(user, "----user---");
  const logout = () => {
    dispatch(Actions.logout)
  }

  return (
    <Wrapper>
      <UserInfo>
        <Avatar
          src={defaultAvatar}
          onClick={() => history.push(ROUTES.PROFILE)}
        />
        <div>
          <strong>instagram</strong>
          <span>instagram</span>
        </div>
        <Button
          onClick={logout}
        >
          退出
        </Button>
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
