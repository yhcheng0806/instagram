import styled from "styled-components";
import tw from "twin.macro";

export const Wrapper = styled.div.attrs({
  className:
    "flex flex-col h-screen  pt-12  items-center bg-white sm:pt-0 sm:justify-center  transition ease-in",
})``;

export const Container = styled.div`
  ${tw`bg-white rounded p-6 w-full flex flex-col items-center justify-between
    sm:shadow sm:border sm:border-gray-300 sm:w-96 sm:px-10 sm:pt-10
  `}
`;
export const Form = styled.div`
  ${tw`w-full`}
`;

export const Logo = styled.img`
  ${tw`w-full h-14 object-contain mb-8`}
`;

export const FormItem = styled.div`
  ${tw`flex h-10 bg-gray-50 mb-2 p-2 border border-gray-300`}

  span {
    ${tw`absolute`}
  }
`;

export const Input = styled.input`
  ${tw`text-sm w-full bg-transparent focus:outline-none`}
`;

export const Tip = styled.div`
  ${tw`text-right text-sm py-2`}
`;

export const Button = styled.button`
  ${tw`rounded-sm shadow-md bg-blue-200 w-full h-9 text-white  text-sm flex items-center justify-center`}
  &.active {
    ${tw`bg-blue-400`}
  }
`;

export const ErrorTip = styled.div`
${tw`text-center pt-6 text-xs text-red-400`}
`;

export const Bottom = styled.div`
  /* border: 1px solid #000; */
  ${tw`py-6`}
  strong {
    ${tw`text-sm font-light	text-gray-400`}
  }
  span {
    ${tw`text-sm  text-blue-400 hover:cursor-pointer`}
  }
`;
