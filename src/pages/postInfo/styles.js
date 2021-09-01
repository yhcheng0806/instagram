import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`h-screen bg-gray-50`}
`;
export const Container = styled.div`
  ${tw`w-full md:w-4/5 2xl:max-w-screen-lg mx-auto h-full md:pt-6`}
`;

export const PostWrapper = styled.div`
  ${tw`h-full	md:h-2/3 flex flex-col md:flex-row md:shadow md:border md:border-gray-300 `}
`;

export const PostLeft = styled.div`
  ${tw`md:w-3/5`}
`;

export const Photo = styled.div`
  ${tw`w-full h-96 md:h-full  bg-blue-200`}
  img,video {
    ${tw`w-full h-full object-cover`}
  }
`;

export const PostRight = styled.div`
  ${tw`md:w-2/5 bg-white flex flex-col`}
`;

export const TopContent = styled.div`
  ${tw`h-16 p-4 flex items-center justify-between`}
`;

export const Profile = styled.div`
  ${tw`flex items-center`}
`;
export const Avatar = styled.img`
  ${tw`w-8 h-8  bg-gray-300 rounded-full object-cover	flex mr-3 flex-shrink-0`}
`;

export const UserInfo = styled.div``;

export const Name = styled.div`
  ${tw`text-base font-medium	 text-black`}
`;
export const Other = styled.div`
  ${tw`text-xs	font-normal text-gray-600`}
`;

export const MainContent = styled.div`
  ${tw` px-4 pb-52 md:pb-0`}
`;

export const Comments = styled.div`
  ${tw`flex flex-col md:h-96 md:overflow-auto`}
`;

export const Comment = styled.div`
  ${tw`flex text-xs mb-1 text-gray-800 mt-2`}
  >span {
    ${tw`flex mt-2 mr-1`}
  }
`;

export const CommentBody = styled.div`
  ${tw`flex-1 pt-1`}
`;

export const CommentText = styled.div`
  strong {
    ${tw`font-medium text-sm hover:cursor-pointer`}
  }
  label {
    ${tw`px-1`}
  }
  span {
    ${tw` cursor-pointer px-1 inline leading-normal hover:opacity-75`}
  }
`;
export const CommentStatus = styled.div`
  ${tw`pt-2 flex items-center `}
  >div {
    ${tw`mr-3`}
    &:last-child {
      ${tw`mr-0 cursor-pointer`}
    }
    span {
      ${tw`pr-1`}
    }
  }
`;

export const BottomContent = styled.div`
  ${tw`fixed left-0 bottom-0 bg-white z-50 w-full md:relative`}
`;

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
  ${tw`px-4 mb-2 text-sm font-medium	`}
  span {
    ${tw`mr-1 	`}
  }
`;
export const Time = styled.div`
  ${tw`px-4 mb-2 text-sm font-medium text-xs text-gray-500	`}
`;

export const Config = styled.div`
  ${tw`relative h-14 flex items-center px-4`}

  >span {
    ${tw`flex items-center justify-center text-2xl mr-2`}
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
