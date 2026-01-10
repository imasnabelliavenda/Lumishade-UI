"use client";

import { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { colors, textColors, borderRadius, typography } from "../tokens/themes.js";
import SidebarVariant from "./sidebar.jsx";

const slideDown = keyframes`
  0% { transform: translateY(-25px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const StyledHeader = styled.header`
  width: 100%;
  box-sizing: border-box;
  padding: 14px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${typography.fontFamily};
  position: sticky;
  top: 0;
  z-index: 50;
  transition: background 0.25s ease, color 0.25s ease;

  background: ${({ $theme }) =>
    $theme === "dark" ? colors.darkBg1 : colors.lightBg2};

  color: ${({ $theme }) =>
    $theme === "dark" ? textColors.light : textColors.dark};

  ${({ variant }) =>
    variant === "slide" &&
    css`
      animation: ${slideDown} 0.8s ease forwards;
    `}

  .header__logo {
    font-family: ${typography.fontLogo};
    font-size: 22px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  }

  .header__nav {
    display: flex;
    gap: 18px;
    align-items: center;
  }

  .header__nav-item {
    padding: 6px 8px;
    text-decoration: none;
    color: inherit;
    border-radius: ${borderRadius.sm};
    transition: background 0.15s ease;

    &:hover {
      background: ${({ $theme }) =>
        $theme === "dark"
          ? "rgba(255,255,255,0.08)"
          : "rgba(0,0,0,0.06)"};
    }
  }

  .header__actions {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .header__search {
    padding: 6px 12px;
    border-radius: ${borderRadius.md};
    font-size: 14px;
    min-width: 200px;
    outline: none;

    background: ${({ $theme }) =>
      $theme === "dark"
        ? "rgba(255,255,255,0.05)"
        : "rgba(0,0,0,0.05)"};

    border: ${({ $theme }) =>
      $theme === "dark"
        ? "1px solid rgba(255,255,255,0.12)"
        : "1px solid rgba(0,0,0,0.15)"};

    color: inherit;
  }

  .header__menu-button {
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 22px;
    padding: 6px;
    color: inherit;
  }

  @media (max-width: 768px) {
    .header__nav {
      display: none;
    }
  }
`;

const Overlay = styled.div`
  display: ${({ $open }) => ($open ? "block" : "none")};
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(2px);
  z-index: 990;
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 200px;
  transform: translateX(${({ $open }) => ($open ? "0" : "100%")});
  transition: transform 0.28s cubic-bezier(0.2, 0.9, 0.2, 1);
  z-index: 995;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  box-shadow: -6px 0 30px rgba(0, 0, 0, 0.5);
`;

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
}

export default function HeaderVariant({
  variant,
  theme = "dark",
  logo,
  navItems = [],
  sidebarProps = {},
  showNav = true,
  showSearch = true,
  rightAction,
}) {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => setOpen((s) => !s);

  const isMobile = useIsMobile();
  const showMenuButton = isMobile && variant === "burger";

  const desktopNavItems = navItems;

  return (
    <>
      <StyledHeader variant={variant} $theme={theme}>
        <div className="header__logo">{logo}</div>

        {showNav && desktopNavItems.length > 0 && !isMobile && (
          <nav className="header__nav">
            {desktopNavItems.map((item) => (
              <a key={item.id} className="header__nav-item" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        )}

        <div className="header__actions">
          {showSearch && (
            <input className="header__search" placeholder="Search..." />
          )}

          {rightAction}

          {/* Tombol burger: hanya tampil di mobile dan variant burger */}
          {showMenuButton && (
            <button className="header__menu-button" onClick={toggleMenu}>
              {open ? "✖" : "☰"}
            </button>
          )}
        </div>

      </StyledHeader>

      {isMobile && variant === "burger" && (
        <>
          <Overlay $open={open} onClick={toggleMenu} />
          <SidebarContainer $open={open}>
            <SidebarVariant
              open={open}
              onClose={toggleMenu}
              {...sidebarProps}
            />
          </SidebarContainer>
        </>
      )}
    </>
  );
}