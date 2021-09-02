import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`h-14 w-full bg-white sticky top-0 shadow border-b 
  border-gray-100 z-50 `}
`;
export const Container = styled.div`
  ${tw`w-full px-2 md:px-0 md:w-4/5 2xl:max-w-screen-lg mx-auto h-full flex items-center`}
`;

export const Logo = styled.img`
  ${tw`object-contain h-8`}
`;

export const Search = styled.div`
  ${tw`md:flex hidden w-52 mx-auto text-sm text-gray-600 items-center justify-center	 h-7 bg-gray-50 border border-gray-300`}
  >span {
    ${tw`mr-2`}
  }
`;
export const Input = styled.div``;

export const Menus = styled.div`
  ${tw` fixed z-50 left-0 bottom-0 w-full bg-white py-1 justify-around md:py-0 md:w-auto md:justify-start md:relative flex ml-auto md:ml-0`}
`;

export const MenuItem = styled.div`
  ${tw`w-6 h-6 flex items-center justify-center  m-2 hover:cursor-pointer`}
  >span {
    ${tw`text-2xl`}
  }
`;

export const Avatar = styled.img`
  ${tw`w-6 h-6 rounded-full object-cover flex-shrink-0`}
`;
