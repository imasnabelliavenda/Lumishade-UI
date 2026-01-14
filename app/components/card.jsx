"use client";

import styled, { css, keyframes } from "styled-components";
import ButtonVariant from "./button.jsx";
import { textColors, borderRadius, typography, effects, gradients, red } from "../tokens/themes.js";

const floatingCard = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const StyledCard = styled.div`
  width: 100%;
  max-width: 270px;
  border-radius: ${borderRadius.lg};
  padding: 20px;
  box-sizing: border-box;
  font-family: ${typography.fontFamily};
  transition: ${effects.transitionBase};

  box-shadow:
  0 1px 2px rgba(0, 0, 0, 0.06),
  0 4px 12px rgba(0, 0, 0, 0.08);

  background: ${({ $theme }) =>
  $theme === "red"
    ? red.soft
    : $theme === "light"
    ? gradients.light
    : gradients.dark};

  color: ${({ $theme }) =>
    $theme === "red"
      ? red.textDark
      : $theme === "light"
      ? textColors.dark
      : textColors.light};

  .card__title {
    font-family: ${typography.fontLogo};
    font-size: ${typography.fontSize.md};
    margin-bottom: 8px;
  }

  .card__desc {
    font-size: ${typography.fontSize.md};
    opacity: 0.85;
    margin-bottom: 16px;
  }

  .card__image {
    width: 100%;
    height: 160px;
    border-radius: ${borderRadius.md};
    background-size: cover;
    background-position: center;
    margin-bottom: 12px;
  }

  ${({ $variant }) => {
    switch ($variant) {
      case "interactive":
        return css`
          overflow: hidden;
          position: relative;
          cursor: pointer;

          .card__image {
            transition: transform 0.3s ease;
          }

          &:hover .card__image {
            transform: scale(1.05);
          }

          .card__content {
            transition: transform 0.3s ease;
          }

          &:hover .card__content {
            transform: translateY(-4px);
          }

          .card__extra {
            opacity: 0;
            max-height: 0;
            overflow: hidden;
            transition: all 0.3s ease;
          }

          &:hover .card__extra {
            opacity: 1;
            max-height: 800px;
            margin-top: 8px;
          }
        `;

      case "float":
        return css`
          box-shadow: ${effects.cardShadow};
          animation: ${floatingCard} 3s ease-in-out infinite;

          &:hover {
            transform: scale(1.03);
            box-shadow: 0 10px 20px rgba(0,0,0,0.25);
          }
        `;
      
      default:
        return css`
        `;
    }
  }}
`;

export default function CardVariant(props) {
  const { variant, theme = "dark", title, desc, buttonLabel, image, extra } = props || {};

  return (
    <StyledCard $variant={variant} $theme={theme} className={`card${variant ? ` card--${variant}` : ""}`}>
      
      <div className="card__image" style={{ backgroundImage: `url(${image})` }} />

      <div className={variant === "interactive" ? "card__content" : ""}>
        {title && <div className="card__title">{title}</div>}
        {desc && <div className="card__desc">{desc}</div>}

        {variant === "interactive" && extra && (
          <div className="card__extra">
            <p style={{ fontSize: "14px", opacity: 0.85 }}>{extra}</p>
          </div>
        )}

        {(variant !== "interactive" && buttonLabel) && (
          <div className="card__footer">
            <ButtonVariant label={buttonLabel} theme={theme} />
          </div>
        )}
      </div>
    </StyledCard>
  );
}
