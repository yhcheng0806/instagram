import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`md:rounded md:border bg-white md:border-gray-300 md:mb-6`}
`;
export const TopContent = styled.div`
  ${tw`h-16 p-4 flex items-center justify-between`}
`;

export const Profile = styled.div`
  ${tw`flex items-center`}
`;
export const Avatar = styled.img`
  ${tw`w-8 h-8 border bg-gray-300 rounded-full object-cover	flex mr-3`}
`;

export const UserInfo = styled.div``;

export const Name = styled.div`
  ${tw`text-base font-medium	 text-black`}
`;
export const Other = styled.div`
  ${tw`text-xs	font-normal text-gray-600`}
`;

export const Icon = styled.div`
  border: 1px solid #000;
`;
export const MainContent = styled.div`
  ${tw`w-full`}
`;

export const Photo = styled.div`
  ${tw`w-full h-60 md:h-96 `}
  img,video {
    ${tw`w-full h-full object-cover`}
  }
`;

export const BottomContent = styled.div``;

export const Actions = styled.div`
  ${tw`px-4 flex items-center justify-between`}
  >span {
    ${tw`text-3xl`}
  }
`;
export const Status = styled.div`
  ${tw`flex items-center h-10 `}
  >span {
    ${tw`text-2xl mr-2`}
  }
`;
export const Likes = styled.div`
  ${tw`px-4 mb-2 text-sm	`}
  span {
    ${tw`mr-1 font-medium	`}
  }
`;
export const ThemeContent = styled.div`
  ${tw`px-4 pb-2`}
`;

export const Body = styled.div`
  ${tw`text-gray-800 text-sm`}
`;
export const Comments = styled.div``;

export const TotalComment = styled.div`
  ${tw`py-2 text-gray-400 text-sm`}
  span {
    ${tw`px-2`}
  }
`;

export const Comment = styled.div`
  ${tw` text-xs mb-1 text-gray-800`}
  strong {
    ${tw`font-medium hover:cursor-pointer`}
  }
  label {
    ${tw`px-1`}
  }
  div {
    ${tw`px-1 inline leading-normal`}
  }
`;

export const Time = styled.div`
  ${tw`text-xs text-gray-500`}
`;

export const Config = styled.div`
  ${tw`hidden h-14 md:flex items-center px-4`}
  >span {
    ${tw`text-xl mr-2`}
  }
`;

export const Input = styled.input`
  ${tw`text-sm w-full bg-transparent focus:outline-none`}
`;

export const AddBtn = styled.div`
  ${tw`flex-shrink-0 ml-auto text-blue-200 text-sm ml-4`}
  &.active {
    ${tw`text-blue-400 hover:cursor-pointer`}
  }
`;
