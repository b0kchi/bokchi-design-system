import React, { ReactNode } from "react";
import styled from "styled-components";
import "../styles/button.css";
import { createColorToken } from "../tokens/colors";
import baseColorToken from "../tokens/tokens.json";

interface IButtonProps {
  type?: "primary" | "default" | "link";
  icononly?: boolean | string;
  size?: "small" | "medium" | "large";
  children?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  classNames?: string;
  icon?: ReactNode | unknown;
}

const colorChip = createColorToken();
const baseColorChip = baseColorToken;

const StyledButton = styled.button<IButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 32px;
  font-size: 0.875rem;
  background-color: ${baseColorChip.colors.background.colorBgBase.$value};
  border: 1px solid;
  border-color: ${baseColorChip.colors.border.colorBorder.$value};
  border-radius: 5px;
  gap: 8px;
  line-height: 1;
  justify-content: space-between;
  padding: 0 16px;
  img,
  svg {
    width: 16px;
  }

  &:hover {
    border-color: ${colorChip.colorPrimaryBgHover};
    background-color: ${baseColorChip.colors.background.colorBgBase};
    color: ${colorChip.colorPrimaryTextHover};
  }

  &[data-icononly="true"] {
    gap: 0;
    padding: 8px;
    justify-content: center;
    &[data-size="small"] {
      padding: 4px;
    }
    &[data-size="large"] {
      padding: 11px;
      svg {
        width: 18px;
      }
    }
  }

  &[data-size="large"] {
    height: 40px;
    font-size: 1rem;
    img,
    svg {
      width: 18px;
    }
  }
  &[data-size="small"] {
    height: 26px;
    padding: 0 12px;
    img,
    svg {
      width: 14px;
    }
  }

  &[data-type="primary"] {
    background: #aedf;
    border-color: ${colorChip.colorPrimary};
    background-color: ${colorChip.colorPrimary};
    color: ${baseColorChip.colors.text.colorTextLight.$value};
    &:hover {
      border-color: ${colorChip.colorPrimaryBgHover};
      background-color: ${colorChip.colorPrimaryBgHover};
      color: ${colorChip.colorPrimaryTextActive};
    }
  }
  &[data-type="link"] {
    border-color: transparent;
    background-color: transparent;
    color: ${colorChip.colorPrimary};
    &:hover {
      color: ${colorChip.colorPrimaryTextHover};
    }
  }

  &:disabled,
  &:disabled:hover {
    cursor: default;
    border-color: #d9d9d9;
    background-color: #f5f5f5;
    color: ${baseColorChip.colors.text.colorTextQuarternary.$value};
  }
`;

export default function Button({
  size = "medium",
  icononly = false,
  type = "default",
  children,
  onClick,
  disabled = false,
  classNames,
  icon,
}: IButtonProps) {
  return (
    <StyledButton
      data-type={type}
      data-icononly={`${icononly}`}
      data-size={size}
      onClick={onClick}
      disabled={disabled}
      className={classNames}
    >
      {icononly ? (
        <>{icon}</>
      ) : (
        <>
          {icon}
          <p className="text">{children}</p>
        </>
      )}
    </StyledButton>
  );
}
