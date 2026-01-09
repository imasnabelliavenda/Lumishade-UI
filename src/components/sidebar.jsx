"use client";

import styled, { keyframes, css } from "styled-components";
import { spacing, borderRadius, typography, sidebarTheme, effects } from "../tokens/themes.js";

const slideIn = keyframes`
  from { opacity: 0; transform: translateX(-25px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const innerSlide = keyframes`
  from { opacity: 0; transform: translateX(-12px); }
  to   { opacity: 1; transform: translateX(0); }
`;

const SidebarContainer = styled.aside`
  background: ${({ $theme }) => sidebarTheme[$theme].background};
  color: ${({ $theme }) => sidebarTheme[$theme].text};
  padding: ${spacing.lg};
  width: 200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
  font-family: ${typography.fontFamily};

  ${({ $variant }) =>
    $variant === "slide-in" &&
    css`
      animation: ${slideIn} 0.5s ease forwards;
    `}

  ${({ $variant }) =>
    $variant === "inner-slide" &&
    css`
      *:not(:empty) {
        animation: ${innerSlide} 0.45s ease forwards;
        opacity: 0;
      }

      h3 { animation-delay: 0.05s; }
      .profile { animation-delay: 0.15s; }
      .nav-item:nth-child(1) { animation-delay: 0.25s; }
      .nav-item:nth-child(2) { animation-delay: 0.32s; }
      .nav-item:nth-child(3) { animation-delay: 0.39s; }
      .nav-item:nth-child(4) { animation-delay: 0.46s; }
      .nav-item:nth-child(5) { animation-delay: 0.53s; }
      .nav-item:nth-child(6) { animation-delay: 0.60s; }
      .nav-item:nth-child(7) { animation-delay: 0.67s; }
      .nav-item:nth-child(8) { animation-delay: 0.74s; }
      .nav-item:nth-child(9) { animation-delay: 0.81s; }
      .nav-item:nth-child(10) { animation-delay: 0.88s; }
    `}

  h3 {
    font-family: ${typography.fontJudul};
    font-size: ${typography.fontSize.md};
    font-weight: ${typography.fontWeight.bold};
    margin-bottom: ${spacing.md};
  }

  .profile {
    display: flex;
    align-items: center;
    gap: ${spacing.sm};
    margin-bottom: ${spacing.md};

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 2px solid ${({ $theme }) => sidebarTheme[$theme].border};
    }

    .profile-info {
      display: flex;
      flex-direction: column;

      span:first-child {
        font-weight: ${typography.fontWeight.bold};
      }

      span:last-child {
        font-size: ${typography.fontSize.sm};
        opacity: 0.8;
      }
    }
  }

  .nav-item {
    background: transparent;
    color: ${({ $theme }) => sidebarTheme[$theme].text};
    border: none;
    padding: 10px 12px;
    border-radius: ${borderRadius.sm};
    text-align: left;
    cursor: pointer;
    transition: ${effects.transitionBase};
    display: flex;
    align-items: center;
    gap: ${spacing.sm};
    font-size: ${typography.fontSize.sm};
    width: 100%;

    &:hover {
      background: ${({ $theme }) => sidebarTheme[$theme].hover};
      transform: translateX(5px);
    }

    &.active {
      background: ${({ $theme }) => sidebarTheme[$theme].active};
      color: ${({ $theme }) => sidebarTheme[$theme].activeText};
      font-weight: ${typography.fontWeight.medium};
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export default function SidebarVariant(props) {
  const {
    title,
    profile,
    navItems = [],
    activeItem,
    onSelect,
    variant,
    theme = "dark",
  } = props;

  const getItemValue = (item) => {
    if (typeof item === "string") return item;
    return item.value || item.id || item.label;
  };

  const getItemLabel = (item) => {
    if (typeof item === "string") return item;
    return item.label || item.value || item.id;
  };

  const getItemIcon = (item) => {
    if (typeof item === "string") return null;
    return item.icon;
  };

  const isItemActive = (item) => {
    const itemValue = getItemValue(item);
    return activeItem === itemValue;
  };

  const handleItemClick = (item) => {
    const itemValue = getItemValue(item);
    if (onSelect) {
      onSelect(itemValue);
    }
  };

  return (
    <SidebarContainer
      $variant={variant}
      $theme={theme}
    >
      {title && <h3>{title}</h3>}

      {profile && (
        <div className="profile">
          <img src={profile.avatar} alt={profile.name} />
          <div className="profile-info">
            <span>{profile.name}</span>
            <span>{profile.role}</span>
          </div>
        </div>
      )}

      {navItems.map((item, index) => {
        const itemValue = getItemValue(item);
        const itemLabel = getItemLabel(item);
        const itemIcon = getItemIcon(item);
        const isActive = isItemActive(item);

        return (
          <button
            key={itemValue || index}
            className={`nav-item${isActive ? " active" : ""}`}
            onClick={() => handleItemClick(item)}
            aria-current={isActive ? "page" : undefined}
          >
            {itemIcon}
            {itemLabel.charAt(0).toUpperCase() + itemLabel.slice(1)}
          </button>
        );
      })}
    </SidebarContainer>
  );
}