"use client";

import styled from "styled-components";
import { useState, useEffect, useRef } from "react";
import HeaderVariant from "../components/header";
import FooterVariant from "../components/footer";
import SidebarVariant from "../components/sidebar";
import ButtonSection from "./buttonSection";
import CardSection from "./cardSection";
import HeaderSection from "./headerSection";
import FooterSection from "./footerSection";
import SidebarSection from "./sidebarSection";
import ThemeToggle from "../components/themeToggle";
import { useTheme } from "../context/themeContext";
import {
  Home,
  FileText,
  Github,
  MousePointerClick,
  LayoutGrid,
  PanelTop,
  PanelLeft,
  PanelBottom
} from "lucide-react";
import { 
  colors, 
  textColors, 
  spacing, 
  borderRadius, 
  effects, 
  typography,
  gradients 
} from "../tokens/themes";

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ $theme }) => $theme === "dark" ? gradients.dark : gradients.light};
  color: ${({ $theme }) => $theme === "dark" ? textColors.light : textColors.dark};
  font-family: ${typography.fontFamily};
  transition: ${effects.transitionBase};
`;

const StyledHeader = styled.header`
  width: 100%;
  background: ${({ $theme }) => $theme === "dark" ? colors.darkBg1 : colors.lightBg1};
  border-bottom: 1px solid ${({ $theme }) => $theme === "dark" ? colors.mutedDark : colors.mutedLight};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const MainArea = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
`;

const SidebarWrapper = styled.div`
  background: ${({ $theme }) => $theme === "dark" ? colors.darkBg1 : colors.lightBg1};
  border-right: 1px solid ${({ $theme }) => $theme === "dark" ? colors.mutedDark : colors.mutedLight};
  width: 250px;
  min-width: 250px;
  position: sticky;
  top: 0;
  height: calc(100vh - 60px); /* Sesuaikan dengan tinggi header */
  overflow-y: auto;
  padding: ${spacing.lg} 0;
  
  /* Hide scrollbar but keep functionality */
  scrollbar-width: thin;
  scrollbar-color: ${({ $theme }) => $theme === "dark" ? colors.mutedDark : colors.mutedLight} transparent;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${({ $theme }) => $theme === "dark" ? colors.mutedDark : colors.mutedLight};
    border-radius: 3px;
  }
  
  @media (max-width: 768px) {
    position: fixed;
    top: 60px; /* Height of header */
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: auto;
    z-index: 90;
    display: ${({ $isMobileOpen }) => $isMobileOpen ? 'block' : 'none'};
    border-right: none;
    border-bottom: 1px solid ${({ $theme }) => $theme === "dark" ? colors.mutedDark : colors.mutedLight};
  }
`;

const Content = styled.main`
  flex: 1;
  padding: ${spacing.xl};
  padding-bottom: ${spacing.xxl};
  overflow-y: auto;
  background: ${({ $theme }) => $theme === "dark" ? gradients.dark : gradients.light};
  height: calc(100vh - 60px); /* Sesuaikan dengan tinggi header */
  
  @media (max-width: 768px) {
    height: calc(100vh - 120px);
    padding: ${spacing.md};
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

const PageHeader = styled.div`
  margin-bottom: ${spacing.xl};
`;

const PageTitle = styled.h1`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: ${spacing.lg};
  line-height: 1.2;
  font-family: ${typography.fontJudul};
`;

const GradientText = styled.span`
  background: ${gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ContentSection = styled.div`
  background: ${({ $theme }) => $theme === "dark" ? colors.darkBg1 : colors.lightBg1};
  border-radius: ${borderRadius.lg};
  padding: ${spacing.xl};
  border: 1px solid ${({ $theme }) => $theme === "dark" ? colors.mutedDark : colors.mutedLight};
  box-shadow: ${effects.cardShadow};
  transition: ${effects.transitionBase};
  margin-bottom: ${spacing.xl};
`;

const FooterWrapper = styled.footer`
  border-top: 1px solid ${({ $theme }) => $theme === "dark" ? colors.mutedDark : colors.mutedLight};
  background: ${({ $theme }) => $theme === "dark" ? colors.darkBg1 : colors.lightBg1};
`;

const MobileMenuButton = styled.button`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: ${borderRadius.sm};
    background: ${({ $theme }) => $theme === "dark" ? colors.darkBg2 : colors.lightBg2};
    border: 1px solid ${({ $theme }) => $theme === "dark" ? colors.mutedDark : colors.mutedLight};
    color: ${({ $theme }) => $theme === "dark" ? textColors.light : textColors.dark};
    cursor: pointer;
    transition: ${effects.transitionBase};
    position: absolute;
    top: 40px;
    right: ${spacing.lg};
    z-index: 95;
    
    &:hover {
      background: ${colors.primary};
      color: ${textColors.light};
      border-color: ${colors.primary};
    }
    
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const MobileOverlay = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: ${({ $isOpen }) => $isOpen ? 'block' : 'none'};
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 85;
    backdrop-filter: blur(2px);
  }
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

export default function Page() {
  const [active, setActive] = useState("button");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const { theme } = useTheme();
  const contentRef = useRef(null);

  const handleSelectComponent = (componentId) => {
    console.log("Selected component:", componentId);
    setActive(componentId);
    
    // Tutup mobile menu jika terbuka
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    // Scroll ke atas konten
    if (contentRef.current) {
      contentRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { id: "home", label: "Beranda", icon: <Home />, href: "/" },
    { id: "docs", label: "Dokumentasi", icon: <FileText />, href: "/docs" }
  ];

  const sidebarItems = [
  {
    label: "Button",
    value: "button",
    icon: <MousePointerClick size={16} />
  },
  {
    label: "Card",
    value: "card",
    icon: <LayoutGrid size={16} />
  },
  {
    label: "Header",
    value: "header",
    icon: <PanelTop size={16} />
  },
  {
    label: "Sidebar",
    value: "sidebar",
    icon: <PanelLeft size={16} />
  },
  {
    label: "Footer",
    value: "footer",
    icon: <PanelBottom size={16} />
  }
];


  const pageHeaders = {
    button: {
      title: "Button",
      highlight: "Variant"
    },
    card: {
      title: "Card",
      highlight: "Variant"
    },
    header: {
      title: "Header",
      highlight: "Variant"
    },
    sidebar: {
      title: "Sidebar",
      highlight: "Variant"
    },
    footer: {
      title: "Footer",
      highlight: "Variant"
    }
  };

  return (
    <AppLayout $theme={theme}>
      <StyledHeader $theme={theme}>
        <HeaderVariant
          variant="slide"
          logo="Lumishade UI"
          navItems={navItems}
          showNav={true}
          showSearch={false}
          theme={theme}
          sidebarProps={{
            navItems: navItems,
            activeItem: active,
            onSelect: handleSelectComponent,
            theme: theme
          }}
          rightAction={<ThemeToggle />}
        />
      </StyledHeader>

      <MainArea>
        {/* Mobile Menu Button */}
        {isMobile && (
          <MobileMenuButton 
            onClick={toggleMobileMenu}
            $theme={theme}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </MobileMenuButton>
        )}

        {/* Mobile Overlay */}
        {isMobile && (
          <MobileOverlay 
            $isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar - Hanya muncul di desktop atau saat mobile menu terbuka */}
        {(!isMobile || isMobileMenuOpen) && (
          <SidebarWrapper 
            $theme={theme}
            $isMobileOpen={isMobileMenuOpen}
          >
            <SidebarVariant
              title="Components"
              navItems={sidebarItems}
              activeItem={active}
              onSelect={handleSelectComponent}
              theme={theme}
            />
          </SidebarWrapper>
        )}

        <Content 
          ref={contentRef} 
          $theme={theme}
          onClick={() => isMobileMenuOpen && setIsMobileMenuOpen(false)}
        >
          <ContentWrapper>
            <PageHeader>
              <PageTitle>
                {pageHeaders[active].title}
                <GradientText>
                  {" "}{pageHeaders[active].highlight}
                </GradientText>
              </PageTitle>
            </PageHeader>

            <ContentSection $theme={theme}>
              {active === "button" && <ButtonSection />}
              {active === "card" && <CardSection />}
              {active === "header" && <HeaderSection />}
              {active === "sidebar" && <SidebarSection />}
              {active === "footer" && <FooterSection />}
            </ContentSection>

          </ContentWrapper>
        </Content>
      </MainArea>

      <FooterWrapper $theme={theme}>
        <FooterVariant
          variant="fadeIn"
          logo="Lumishade UI"
          copyText="© 2025 Lumishade UI. All rights reserved."
          theme={theme}
          socials={[
            { name: "GitHub", href: "https://github.com/imasnabelliavenda/Lumishade-UI", icon: <Github /> }
          ]}
        />
      </FooterWrapper>
    </AppLayout>
  );
}