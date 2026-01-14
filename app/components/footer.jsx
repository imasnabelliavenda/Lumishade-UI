"use client";

import styled, { css, keyframes } from "styled-components";
import ButtonVariant from "./button";
import { colors, textColors, borderRadius, typography, spacing, red } from "../tokens/themes";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const wave = keyframes`
  0% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const StyledFooter = styled.footer`
  position: relative;
  overflow: hidden;
  padding: 14px 28px;
  box-sizing: border-box;
  font-family: ${typography.fontFamily};
  transition: background 0.3s ease, color 0.3s ease;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: ${({ $activeCount }) =>
  $activeCount <= 1 ? "center" : "space-between"};
  gap: ${({ $activeCount }) => ($activeCount > 1 ? spacing.md : 0)};
 
  background: ${({ $theme }) => ({
    dark: colors.darkBg1,
    light: colors.lightBg2,
    red: red.primary,
  })[$theme]};

  color: ${({ $theme }) => ({
    dark: textColors.light,
    light: textColors.dark,
    red: textColors.light,
  })[$theme]};

  width: 100%;
  overflow-x: hidden;

  .footer__logo {
    font-family: ${typography.fontLogo};
    font-size: 22px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .footer__links {
    display: flex;
    gap: 18px;

    &-item {
      color: inherit;
      text-decoration: none;
      opacity: 0.8;
      transition: opacity 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }

  .footer__socials {
    display: flex;
    gap: ${spacing.md};

    svg {
      width: 28px;
      height: 28px;
      color: ${({ $theme }) =>
      $theme === "dark" || $theme === "red"
        ? textColors.light
        : textColors.dark};
      opacity: 0.85;
      transition: 0.3s ease;

      &:hover {
        color: #c5b6ff;
        transform: scale(1.1);
        opacity: 1;
      }
    }
  }

  .newsletter-form {
    display: flex;
    gap: 10px;

    input {
      padding: 10px 14px;
      border-radius: ${borderRadius.md};
      border: 1px solid rgba(255, 255, 255, 0.3);
      background: rgba(255, 255, 255, 0.08);
      color: ${textColors.light};
      outline: none;
      width: 240px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
    }

    @media (max-width: 768px) {
      flex-direction: column;
      width: 100%;

      input {
        width: 100%;
      }

      button {
        width: 100%;
      }
    }
  }

  .footer__copy {
    font-size: 14px;
    opacity: 0.7;
  }

  ${({ $variant }) => {
    switch ($variant) {
      case "fadeIn":
        return css`
          .footer__logo,
          .footer__copy,
          .footer__links,
          .footer__socials,
          .newsletter-form {
            animation: ${fadeIn} 1s ease forwards;
          }
        `;
      case "wave":
        return css`
          &::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 0;
            opacity: ${({ $variant }) => ($variant === "wave" ? 1 : 0)};
            transition: opacity 0.3s ease;

            background: ${({ $theme }) => ({
              dark: `
                linear-gradient(
                  90deg,
                  ${colors.darkBg1},
                  ${colors.darkBg2},
                  ${colors.mutedDark},
                  ${colors.darkBg2},
                  ${colors.darkBg1}
                )
              `,
              light: `
                linear-gradient(
                  90deg,
                  ${colors.lightBg1},
                  ${colors.lightBg2},
                  ${colors.mutedLight},
                  ${colors.lightBg2},
                  ${colors.lightBg1}
                )
              `,
              red: `
                linear-gradient(
                  90deg,
                 #a94747,
                 #a94747,
                  ${red.primary},
                  ${red.primary},
                 #a94747,
                 #a94747
                )
              `,
            })[$theme]};

            background-size: 400% 400%;
            animation: ${wave} 13s linear infinite;
            transition: opacity 0.3s ease;
          }

          .footer__logo,
          .footer__copy,
          .footer__links,
          .footer__socials,
          .newsletter-form {
            animation: ${fadeIn} 1s ease forwards;
          }
        `;
      default:
        return css``;
    }
  }}

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    text-align: center;
    justify-content: center !important;
  }
`;

export default function FooterVariant(props) {
  const {
    variant,
    logo,
    links,
    socials,
    newsletter,
    copyText,
    theme = "dark",
  } = props || {};

  const activeCount = [logo, socials?.length > 0, newsletter, links?.length > 0, copyText]
    .filter(Boolean).length;

  return (
    <StyledFooter $variant={variant} $theme={theme} $activeCount={activeCount}>
      {logo && <div className="footer__logo">{logo}</div>}

      {links?.length > 0 && (
        <div className="footer__links">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="footer__links-item">
              {link.label}
            </a>
          ))}
        </div>
      )}

      {socials?.length > 0 && (
        <div className="footer__socials">
          {socials.map((item) => (
            <a key={item.name} href={item.href} target="_blank" rel="noreferrer">
              {item.icon}
            </a>
          ))}
        </div>
      )}

      {newsletter && (
        <form className="newsletter-form">
          <input type="email" placeholder="Masukkan email kamu" />
          <ButtonVariant type="submit" label="Subscribe" />
        </form>
      )}

      {copyText && <div className="footer__copy">{copyText}</div>}
    </StyledFooter>
  );
}