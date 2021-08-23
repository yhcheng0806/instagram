import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div`
  ${tw`h-screen	w-screen overflow-hidden`}
`;

export const Container = styled.div`
  ${tw`w-full flex md:w-4/5 2xl:max-w-screen-lg mx-auto h-full`}
`;

export const LeftContent = styled.div`
  ${tw`flex-1 overflow-y-auto	h-full  pb-32`}
`;

export const RightContent = styled.div`
  ${tw`hidden sm:block w-1/3`}
`;
