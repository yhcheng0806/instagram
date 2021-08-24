import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`pl-4`}
`;

export const UserInfo = styled.div`
  ${tw`flex items-center my-4  flex-shrink-0`}
  >div {
    ${tw`flex flex-col px-3 text-sm`}
    strong {
      ${tw`text-black font-semibold	`}
    }
    span {
      ${tw`text-gray-400`}
    }
  }
`;

export const Avatar = styled.img`
  ${tw`w-14 h-14 bg-gray-200 rounded-full object-cover	`}
`;

export const Button = styled.button`
  ${tw`ml-auto text-xs text-blue-400 font-semibold flex-shrink-0`}
  &.gray {
    ${tw`text-gray-700`}
  }
`;

export const Recommend = styled.div``;

export const Title = styled.div`
  ${tw`flex items-center justify-between`}
  span {
    ${tw`text-sm text-gray-400 font-semibold`}
  }
`;

export const ProfileList = styled.div``;

export const ProfileItem = styled.div`
  ${tw`flex items-center py-2  flex-shrink-0`}
  >div {
    ${tw`flex flex-col px-3 text-xs`}
    strong {
      ${tw`text-black font-semibold	`}
    }
    span {
      ${tw`text-gray-400`}
    }
  }
`;

export const ProfileAvatar = styled.div`
  ${tw`w-8 h-8 bg-gray-200 rounded-full	`}
`;
