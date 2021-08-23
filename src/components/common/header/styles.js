import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`h-14 w-full bg-white sticky top-0 shadow border-b 
  border-gray-100 `}
`;
export const Container = styled.div`
  ${tw`w-full md:w-4/5 2xl:max-w-screen-lg mx-auto h-full flex items-center `}

  *{
    border: 1px solid #000;
    flex：1;
  }
`;

export const Logo = styled.div`
  ${tw`flex-1 `}
`;

export const Search = styled.div`
  ${tw`flex-1 h-7 bg-gray-50 border border-gray-300`}
`;

export const Icon = styled.div``;

export const Input = styled.div``;

export const Menus = styled.div`
  ${tw`flex flex-1 bg-gray-400`}
`;

export const MenuItem = styled.div`
  ${tw`flex-1 bg-gray-400 m-2 rounded-full`}
`;
