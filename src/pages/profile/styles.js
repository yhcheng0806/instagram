import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`h-screen`}
`;
export const Container = styled.div`
  ${tw`w-full sm:w-4/5 2xl:max-w-screen-lg mx-auto h-full sm:px-5 sm:pt-6`}
`;

export const TopProFileInfo = styled.div`
  ${tw`
    p-4 flex 
    sm:grid sm:grid-cols-3 sm:p-0 sm:gap-7 sm:justify-between sm:items-center sm:mb-11
  `}
`;

export const Avatar = styled.div`
  ${tw`sm:col-span-1 sm:h-full sm:flex sm:items-center sm:justify-center `}
  img {
    ${tw`w-20 h-20 sm:w-40 sm:h-40 bg-gray-200 rounded-full flex-shrink-0`}
  }
`;

export const InfoBox = styled.div`
  ${tw`
  pl-2
  sm:col-span-2 sm:pl-0 h-full
  `}
`;

export const Name = styled.div`
  ${tw`flex items-center`}
  >span {
    ${tw`text-xl sm:text-3xl font-extralight`}
  }
`;

export const Button = styled.div``;

export const Icon = styled.div``;

export const Status = styled.div`
  ${tw` my-1 sm:my-5 text-sm `}
  >span {
    ${tw`mr-4 sm:mr-10 font-bold`}
    &:last-child {
      ${tw`mr-0`}
    }
  }
  strong {
    ${tw`font-normal`}
  }
`;

export const Account = styled.div`
  ${tw`text-sm sm:text-base`}
`;

export const TabList = styled.div`
  border-top: 1px solid #dbdbdb;
  ${tw`h-14 flex items-center justify-center text-sm`}
`;

export const Tab = styled.div`
  ${tw`mr-4 sm:mr-20 flex items-center`}
  &:last-child {
    ${tw`mr-0`}
  }
  > div {
    ${tw`w-3 h-3 bg-gray-200 flex-shrink-0 mr-2`}
  }
`;

export const Main = styled.div``;

export const Photos = styled.div`
  ${tw`grid grid-cols-3 gap-1 md:gap-6 `}
`;

export const Photo = styled.div`
  ${tw`relative bg-blue-300 h-40 sm:h-72`}
`;

export const Mask = styled.div`
  ${tw`
    absolute w-full h-full z-10 hidden items-center justify-center bg-gray-900 bg-opacity-50 
    group-hover:flex hover:cursor-pointer
  `}
`;

export const FuncItem = styled.div`
  ${tw`mr-2 sm:mr-8 text-white flex items-center text-sm sm:text-lg`}
  &:last-child {
    ${tw`mr-0`}
  }
  > div {
    ${tw`w-3 h-3 sm:w-5 sm:h-5 bg-white mr-2`}
  }
`;

export const ImgContainer = styled.div``;
