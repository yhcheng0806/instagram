import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`h-screen	w-screen overflow-hidden bg-gray-50`}
`;

export const Container = styled.div`
  ${tw`w-full flex md:w-4/5 2xl:max-w-screen-lg mx-auto h-full`}
`;

export const LeftContent = styled.div`
  ${tw`flex-1 overflow-y-auto	h-full  pb-32`}
`;

export const ShareWrapper = styled.div``;

export const ShareNav = styled.div`
  ${tw`flex bg-white px-4 h-11  items-center 
justify-between  sm:flex`}
  >span {
    ${tw`text-xl font-semibold`}
  }
`;

export const Icon = styled.div`
  ${tw`w-6 h-6 bg-gray-300`}
`;

export const Title = styled.div`
  ${tw`text-sm font-medium`}
`;

export const Button = styled.div`
  ${tw`text-sm text-blue-400 font-medium`}
`;

export const ShareContainer = styled.div`
  > div {
    ${tw`bg-white text-xs sm:text-sm  flex justify-between border-b border-t border-gray-300 mb-3`}
  }
`;

export const Panel = styled.div`
  ${tw`p-4`}
`;

export const Main = styled.div`
  ${tw`flex-1 px-3 relative flex flex-col`}
`;
export const Avatar = styled.div`
  ${tw`w-8 h-8 bg-gray-200 rounded-full`}
`;

export const Textarea = styled.textarea`
  ${tw`flex-1  h-12 max-h-48	 focus:outline-none`}
`;

export const ImageContainer = styled.div`
  ${tw`relative`}
`;

export const CloseCircleFilled = styled.div`
  ${tw`absolute`}
`;

export const Image = styled.img``;

export const ShareOptions = styled.div`
  ${tw`flex mt-2`}
`;

export const ShareOption = styled.div`
  ${tw`flex items-center mr-4`}
  >* {
    ${tw`flex items-center`}
  }
  
  strong {
    ${tw`pl-1 flex-shrink-0 font-medium text-gray-600`}
  }
`;

export const ShareItem = styled.div`
  ${tw`px-4 py-3 flex items-center justify-between`}
`;

export const Label = styled.div``;

export const ShareBottom = styled.div`
  ${tw`hidden justify-end px-4 py-3 bg-white sm:hidden`}
`;

export const SubmitBtn = styled.button`
  ${tw`text-center  py-1    text-blue-400 font-medium hover:text-blue-300`}
`;

export const RightContent = styled.div`
  ${tw`hidden sm:block w-1/3`}
`;
