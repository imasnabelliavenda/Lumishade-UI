"use client";

import styled, { css, keyframes } from "styled-components";
import { borderRadius, typography, buttons, effects, iconSize } from "../tokens/themes";

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

  background: ${({ $theme }) => $theme === "dark" ? buttons.dark.background : buttons.light.background};
  color: ${({ $theme }) => $theme === "dark" ? buttons.dark.color : buttons.light.color};

  &:hover {
    background: ${({ $theme }) => $theme === "dark" ? buttons.dark.hover : buttons.light.hover};
  }

  &:active {
    background: ${({ $theme }) => $theme === "dark" ? buttons.dark.active : buttons.light.active};
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
