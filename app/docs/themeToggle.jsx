"use client";

import styled from "styled-components";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/themeContext";
import { 
  colors, 
  textColors, 
  borderRadius, 
  effects 
} from "../tokens/themes";

const SimpleToggleButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${borderRadius.pill};
  border: 1px solid ${({ $isDark }) => $isDark 
    ? colors.mutedDark 
    : colors.mutedLight};
  background: ${({ $isDark }) => $isDark 
    ? colors.darkBg2 
    : colors.lightBg2};
  color: ${({ $isDark }) => $isDark 
    ? textColors.light 
    : textColors.dark};
  cursor: pointer;
  transition: ${effects.transitionBase};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${colors.primary};
    color: ${textColors.light};
    border-color: ${colors.primary};
    transform: scale(1.05);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <SimpleToggleButton 
      onClick={toggleTheme}
      $isDark={isDark}
      aria-label="Toggle theme"
    >
      {isDark ? <Sun /> : <Moon />}
    </SimpleToggleButton>
  );
}