import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const ICON_STYLE = {
  small: {
    size: 16,
    stroke: 1,
  },
  large: {
    size: 24,
    stroke: 2,
  },
};

const INPUT_STYLE = {
  small: {
    padding: 4,
    paddingLeft: 24,
    borderWidth: 1,
    fontSize: 14,
    lineHeight: 16,
  },
  large: {
    padding: 7,
    paddingLeft: 36,
    borderWidth: 2,
    fontSize: 18,
    lineHeight: 21,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  console.log(size);

  const iconStyle = ICON_STYLE[size];
  const inputStyle = INPUT_STYLE[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{
          "--size": iconStyle.size + "px",
        }}
      >
        <Icon
          id={icon}
          strokeWidth={iconStyle.stroke}
          size={iconStyle.size}
        ></Icon>
      </IconWrapper>
      <CustomInput
        type="text"
        placeholder={placeholder}
        style={{
          "--padding": inputStyle.padding + "px",
          "--paddingLeft": inputStyle.paddingLeft + "px",
          "--width": width + "px",
          "--borderWidth": inputStyle.borderWidth + "px",
          "--fontSize": inputStyle.fontSize / 16 + "rem",
          "--lineHeight": inputStyle.lineHeight + "px",
        }}
      ></CustomInput>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: var(--size);
  height: var(--size);
  margin: auto;
`;

const CustomInput = styled.input`
  border: 0;
  padding: var(--padding);
  padding-left: var(--paddingLeft);
  width: var(--width);
  border-bottom-width: var(--borderWidth);
  border-style: solid;
  outline-offset: 2px;
  font-weight: 700;
  font-size: var(--fontSize);
  line-height: var(--lineHeight);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
