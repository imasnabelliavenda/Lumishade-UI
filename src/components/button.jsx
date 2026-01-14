"use client";

import styled, { css, keyframes } from "styled-components";
import { borderRadius, typography, buttons, effects, iconSize } from "../tokens/themes.js";

const pressDown = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(0.94); }
`;

const scaleUp = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.07); }
`;

const rotateFull = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const buttonTheme = {
  dark: buttons.dark,
  light: buttons.light,
  red: buttons.redPrimary,
};

const StyledButton = styled.button`
  font-family: ${typography.fontFamily};
  font-size: ${typography.fontSize.md};
  padding: 10px 18px;
  border-radius: ${borderRadius.md};
  border: none;
  cursor: pointer;
  transition: ${effects.transitionBase};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  background: ${({ $theme }) =>
  buttonTheme[$theme]?.background || buttonTheme.dark.background};

  color: ${({ $theme }) =>
    buttonTheme[$theme]?.color || buttonTheme.dark.color};

  &:hover {
    background: ${({ $theme }) =>
      buttonTheme[$theme]?.hover || buttonTheme.dark.hover};
  }

  &:active {
    background: ${({ $theme }) =>
      buttonTheme[$theme]?.active || buttonTheme.dark.active};
  }

  ${({ $variant }) => {
    switch ($variant) {
      case "icon":
        return css`
          padding: 8px 14px;
          svg {
            width: ${iconSize.md};
            height: ${iconSize.md};
          }
        `;

      case "rotate":
        return css`
          svg {
            transition: transform 0.4s ease;
          }

          &:hover {
            animation: ${scaleUp} 0.25s forwards;
          }

          &:hover svg {
            animation: ${rotateFull} 0.45s ease forwards;
          }

          &:active {
            animation: ${pressDown} 0.18s forwards;
          }
        `;

      default:
        return css`
          font-size: ${typography.fontSize.sm};
          padding: 8px 14px;
          border-radius: ${borderRadius.sm};
        `;
    }
  }}
`;

export default function ButtonVariant({ theme="dark", variant, label, icon, onClick, ...props }) {

  const handleClick = (e) => {
    if (onClick) onClick(e); 
  };

  return (
    <StyledButton
      $theme={theme}
      $variant={variant}
      onClick={handleClick}
      {...props}
    >
      {icon && icon}
      {label && <span>{label}</span>}
    </StyledButton>
  );
}
