import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`rounded border bg-white border-gray-300 mb-6`}
`;
export const TopContent = styled.div`
  ${tw`h-16 p-4 flex items-center justify-between`}
`;

export const Profile = styled.div`
  ${tw`flex items-center`}
`;
export const Avatar = styled.div`
  ${tw`w-8 h-8 border bg-gray-300 rounded-full	flex mr-3`}
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
  ${tw`bg-gray-400 h-96`}
`;
export const ImageContainer = styled.div``;
export const VideoContainer = styled.div``;

export const BottomContent = styled.div``;

export const Actions = styled.div`
  ${tw`flex items-center justify-between`}
`;
export const Status = styled.div`
  ${tw`flex items-center h-10 px-4`}
  div {
    ${tw`w-6 h-6 mr-4`}
  }
`;
export const Likes = styled.div`
  ${tw`px-4 mb-2 text-sm	`}
  span {
    ${tw`mr-1 font-medium	`}
  }
`;
export const BookMark = styled.div``;
export const ThemeContent = styled.div`
  ${tw`px-4 pb-2`}
`;

export const Body = styled.div`
  ${tw`text-gray-800 text-sm`}
`;
export const Comments = styled.div`

`;

export const TotalComment = styled.div`
  ${tw`py-2 text-gray-400 text-sm`}
  span {
    ${tw`px-2`}
  }
`;

export const Comment = styled.div`
  ${tw`flex justify-between text-xs mb-1 text-gray-800`}
  >div {
    strong {
      ${tw`mr-2 font-medium`}
    }
  }
  >span {
    ${tw`w-3 h-3 bg-gray-200 flex-shrink-0`}
  }
`;

export const Time = styled.div`
${tw`text-xs text-gray-500`}
`;

export const Config = styled.div`
${tw`h-14 flex items-center px-4`}
`;
export const Expression = styled.div`
  ${tw`w-6 h-6 bg-gray-400 mr-4`}
`;

export const Input = styled.input`
${tw`text-sm w-full bg-transparent focus:outline-none`}
`;

export const AddBtn = styled.div`
  ${tw`flex-shrink-0 ml-auto text-blue-200 text-sm ml-4`}
`;
