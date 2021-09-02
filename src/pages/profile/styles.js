import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`h-screen bg-gray-50`}
`;
export const Container = styled.div`
  ${tw`w-full md:w-4/5 2xl:max-w-screen-lg mx-auto h-full md:px-5 md:pt-6`}
`;

export const TopProFileInfo = styled.div`
  ${tw`
    p-2 flex 
    md:grid md:grid-cols-3 md:p-0 md:gap-7 md:justify-between md:items-center md:mb-11
  `}
`;

export const Avatar = styled.div`
  ${tw`md:col-span-1 md:h-full md:flex md:items-center md:justify-center `}
  >div {
    ${tw`w-20 h-20 md:w-40 md:h-40 rounded-full flex-shrink-0 overflow-hidden`}
    img {
      ${tw`w-full h-full object-cover`}
    }
  }
`;

export const InfoBox = styled.div`
  ${tw`
  pl-2
  md:col-span-2 md:pl-0 h-full
  `}
`;

export const Name = styled.div`
  ${tw`flex items-center`}
  >span {
    ${tw`text-xl md:text-3xl font-extralight`}
  }
`;

export const Button = styled.div`
  ${tw`cursor-pointer tracking-widest	text-base ml-5 w-20 h-8 rounded-sm shadow-md bg-blue-400 text-white  flex items-center justify-center`}
  &.empty {
    ${tw`shadow-none	 border border-gray-400 bg-transparent text-black`}
  }
`;

export const Icon = styled.div``;

export const Status = styled.div`
  ${tw` my-1 md:my-5 text-sm `}
  >span {
    ${tw`mr-4 md:mr-10 font-bold`}
    &:last-child {
      ${tw`mr-0`}
    }
  }
  strong {
    ${tw`font-normal`}
  }
`;

export const Account = styled.div`
  ${tw`text-sm md:text-base`}
`;

export const TabList = styled.div`
  ${tw`border-t border-gray-300 h-14 flex justify-center text-sm`}
`;

export const Tab = styled.div`
  ${tw`mr-4 md:mr-20 flex items-center text-sm`}
  &:last-child {
    ${tw`mr-0`}
  }
  > span {
    ${tw`text-xl flex items-center md:text-2xl mr-1`}
  }
`;

export const Main = styled.div``;

export const Photos = styled.div`
  ${tw`grid grid-cols-3 gap-1 md:gap-6 `}
`;

export const Photo = styled.div`
  ${tw`relative  h-40 md:h-72`}
  img {
    ${tw`w-full h-full object-cover`}
  }
`;

export const Mask = styled.div`
  ${tw`
    absolute w-full h-full z-10 hidden items-center justify-center bg-gray-900 bg-opacity-50 
    group-hover:flex hover:cursor-pointer
  `}
`;

export const FuncItem = styled.div`
  ${tw`mr-2  md:mr-8 text-white flex items-center text-sm md:text-lg`}
  &:last-child {
    ${tw`mr-0`}
  }
  > span {
    ${tw`text-sm md:text-xl flex items-center mr-2`}
  }
`;
