import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`h-14 w-full bg-white sticky top-0 shadow border-b 
  border-gray-100 `}
`;
export const Container = styled.div`
  ${tw`w-full px-2 sm:px-0 md:w-4/5 2xl:max-w-screen-lg mx-auto h-full flex items-center`}
`;

export const Logo = styled.img`
  ${tw`object-contain h-8`}
`;

export const Search = styled.div`
  ${tw`sm:block hidden w-52 mx-auto	 h-7 bg-gray-50 border border-gray-300`}
`;

export const Icon = styled.div``;

export const Input = styled.div``;

export const Menus = styled.div`
  ${tw`flex ml-auto sm:ml-0`}
`;

export const MenuItem = styled.div`
  ${tw`w-6 h-6 bg-gray-400 m-1 rounded-full`}
`;
