"use client";

import styled, { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./tokens/themes";
import HeaderVariant from "./components/header";
import FooterVariant from "./components/footer";
import SidebarVariant from "./components/sidebar";
import HomePage from "./sections/homepage";
import ButtonSection from "./sections/buttonSection";
import CardSection from "./sections/cardSection";
import HeaderSection from "./sections/headerSection";
import FooterSection from "./sections/footerSection";
import SidebarSection from "./sections/sidebarSection";

const AppLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-family: "Inter", sans-serif;
`;

const StyledHeader = styled.header`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const LogoCenter = styled.div`
  .header__logo {
    margin: 0 auto;
  }
`;

const ThemeToggle = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 20px;
  padding: 6px;
  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.text};

  &:hover {
    opacity: 0.8;
  }
`;

const MainArea = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  overflow: hidden;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const SidebarWrapper = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  height: 100vh;
  display: flex;
  flex-direction: column;
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

const Content = styled.main`
  padding: 2rem 3.5rem;
  padding-bottom:90px;
  overflow-y: auto;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
`;

const FooterWrapper = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export default function Page() {
  const [active, setActive] = useState("home");
  const [mode, setMode] = useState("dark");

  const isMobile = useIsMobile();
  const desktopSidebarProps = {
    navItems: [
      { label: "home" },
      { label: "button" },
      { label: "card" },
      { label: "header" },
      { label: "sidebar" },
      { label: "footer" }
    ],
    activeItem: active,
    onSelect: (item) => setActive(item),
    title: "Components",
    theme: mode,
  };

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <AppLayout>
        <StyledHeader>
          <LogoCenter>
            <HeaderVariant 
              variant="burger" 
              logo="Lumishade UI"
              showNav={false}
              showSearch={false}
              rightAction={
                <ThemeToggle onClick={toggleTheme}>
                  {mode === "dark" ? "☀️" : "🌙"}
                </ThemeToggle>}
              theme={mode}
              sidebarProps={{
                    navItems:[
                      { id: "home", label: "home" },
                      { id: "button", label: "button" },
                      { id: "card", label: "card" },
                      { id: "header", label: "header" },
                      { id: "sidebar", label: "sidebar" },
                      { id: "footer", label: "footer" }
                    ],
                    activeItem: active,
                    onSelect: (item) => setActive(item)}} 
            />
          </LogoCenter>
        </StyledHeader>

        <MainArea>
          {!isMobile && (
            <SidebarWrapper>
              <SidebarVariant {...desktopSidebarProps} />
            </SidebarWrapper>
          )}

          <Content>
            {active === "home" && <HomePage theme={mode} />}

            {active === "button" && <ButtonSection /> }

            {active === "card" && <CardSection />}

            {active === "header" && <HeaderSection />}

            {active === "sidebar" && <SidebarSection />}    

            {active === "footer" && <FooterSection />}
          </Content>
        </MainArea>
      
        <FooterWrapper>
          <FooterVariant copyText="© 2025 Imas Nabellia" theme={mode} />
        </FooterWrapper>
        
      </AppLayout>
    </ThemeProvider>
  );
}
