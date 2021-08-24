import { createFromIconfontCN } from "@ant-design/icons";

const IconFont = createFromIconfontCN({
  scriptUrl: ["//at.alicdn.com/t/font_2765586_uhgzmcjidhj.js"],
});

const Icon = ({ type, ...props }) => {
  return (
    <>
      <IconFont {...{ ...props, type }} />
    </>
  );
};

export default Icon;
