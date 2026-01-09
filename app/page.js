"use client"

import { useTheme } from "./context/themeContext";
import { useState } from "react";
import HeaderVariant from "./components/header";
import FooterVariant from "./components/footer";
import { 
  Home, 
  Code, 
  FileText,
  ChevronRight,
  Github,
  Download,
  Eye,
  Zap,
} from "lucide-react";
import styled from "styled-components";
import ThemeToggle from "./components/themeToggle";
import { 
  colors, 
  textColors, 
  spacing, 
  borderRadius, 
  effects, 
  typography,
  gradients,
  buttons,
} from "./tokens/themes";

export default function Homepage() {
  const [active, setActive] = useState("home");

  const navItems = [
    { id: "home", label: "Beranda", icon: <Home />, href: "#home" },
    { id: "components", label: "Komponen", icon: <Code />, href: "#components" },
    { id: "docs", label: "Dokumentasi", icon: <FileText />, href: "/docs" }
  ];

  const components = [
    { title: "Button", color: "#FF6B6B" },
    { title: "Card", color: "#4ECDC4" },
    { title: "Header", color: "#FFD166" },
    { title: "Footer", color: "#06D6A0" },
    { title: "Sidebar", color: "#118AB2" }
  ];

  return (
    <HomepageContent 
      active={active}
      setActive={setActive}
      navItems={navItems}
      components={components}
    />
  );
}

const PageContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['theme', 'textcolor'].includes(prop),
})`
  min-height: 100vh;
  background: ${({ theme }) => theme === "dark" ? gradients.dark : gradients.light};
  color: ${({ textcolor }) => textcolor};
  font-family: ${typography.fontFamily};
  transition: ${effects.transitionBase};
`;

const Section = styled.section.withConfig({
  shouldForwardProp: (prop) => !['padding', 'background'].includes(prop),
})`
  padding: ${({ padding }) => padding || `${spacing.xl} ${spacing.md}`};
  background: ${({ background }) => background || "transparent"};
`;

const Container = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'centerText',
})`
  max-width: 1200px;
  margin: 0 auto;
  ${({ centerText }) => centerText && `
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;

const Badge = styled.div.withConfig({
  shouldForwardProp: (prop) => !['bgcolor', 'color'].includes(prop),
})`
  display: inline-flex;
  align-items: center;
  gap: ${spacing.xs};
  padding: ${spacing.xs} ${spacing.lg};
  border-radius: ${borderRadius.pill};
  background: ${({ bgcolor }) => bgcolor};
  color: ${({ color }) => color};
  font-size: ${typography.fontSize.sm};
  font-weight: ${typography.fontWeight.medium};
  margin-bottom: ${spacing.lg};
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: ${spacing.lg};
  line-height: 1.2;
  font-family: ${typography.fontJudul};
  max-width: 800px;
  text-align: center;
`;

const GradientText = styled.span`
  background: ${gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p.withConfig({
  shouldForwardProp: (prop) => prop !== 'color',
})`
  font-size: ${typography.fontSize.lg};
  color: ${({ color }) => color};
  margin-bottom: ${spacing.xl};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  line-height: ${typography.lineHeight.relaxed};
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.md};
  margin-bottom: ${spacing.xl};
  width: 100%;
  max-width: 300px;
`;

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.lg} ${spacing.xs};
  background: ${gradients.primary};
  color: ${buttons.primary.color};
  font-weight: ${typography.fontWeight.medium};
  border-radius: ${borderRadius.md};
  text-decoration: none;
  transition: ${effects.transitionBase};
  box-shadow: ${effects.cardShadow};
  border: none;
  cursor: pointer;
  width: 100%;
  text-align: center;

  &:hover {
    opacity: 0.9;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled.a.withConfig({
  shouldForwardProp: (prop) => !['bordercolor', 'color', 'hoverbg', 'hoverbordercolor'].includes(prop),
})`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.lg} ${spacing.xl};
  border: 2px solid ${({ bordercolor }) => bordercolor};
  color: ${({ color }) => color};
  font-weight: ${typography.fontWeight.medium};
  border-radius: ${borderRadius.md};
  text-decoration: none;
  transition: ${effects.transitionBase};
  background: transparent;
  cursor: pointer;
  width: 75%;
  text-align: center;

  &:hover {
    background: ${({ hoverbg }) => hoverbg};
    border-color: ${({ hoverbordercolor }) => hoverbordercolor};
  }
`;

const SectionTitle = styled.h2`
  font-size: ${typography.fontSize.xl};
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: ${spacing.xl};
  font-family: ${typography.fontJudul};
  text-align: center;
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${spacing.md};
  margin-bottom: ${spacing.xl};
`;

const ComponentCard = styled.div.withConfig({
  shouldForwardProp: (prop) => !['bgcolor', 'color', 'bordercolor', 'hovercolor', 'hoverbg'].includes(prop),
})`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${spacing.md} ${spacing.lg};
  background: ${({ bgcolor }) => bgcolor};
  border-radius: ${borderRadius.lg};
  color: ${({ color }) => color};
  transition: ${effects.transitionBase};
  border: 1px solid ${({ bordercolor }) => bordercolor};
  cursor: pointer;
  text-align: center;
  min-height: 40px;
  font-weight: ${typography.fontWeight.medium};
  font-size: ${typography.fontSize.lg};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${effects.cardShadow};
    border-color: ${({ hovercolor }) => hovercolor};
    background: ${({ hoverbg }) => hoverbg};
  }
`;

const CtaSection = styled.div.withConfig({
  shouldForwardProp: (prop) => !['bgcolor', 'bordercolor'].includes(prop),
})`
  background: ${({ bgcolor }) => bgcolor};
  border-radius: ${borderRadius.lg};
  padding: ${spacing.xl};
  box-shadow: ${effects.cardShadow};
  border: 1px solid ${({ bordercolor }) => bordercolor};
  max-width: 800px;
  margin: 0 auto;
`;

const IconCircle = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: ${gradients.primary};
  color: ${textColors.light};
  margin-bottom: ${spacing.md};
  margin-left: auto;
  margin-right: auto;
`;

const InstallCode = styled.div.withConfig({
  shouldForwardProp: (prop) => !['bgcolor', 'bordercolor', 'color'].includes(prop),
})`
  background: ${({ bgcolor }) => bgcolor};
  border-radius: ${borderRadius.md};
  padding: ${spacing.lg};
  margin-bottom: ${spacing.lg};
  text-align: left;
  border: 1px solid ${({ bordercolor }) => bordercolor};
  font-family: monospace;
  font-size: ${typography.fontSize.sm};
  color: ${({ color }) => color};
`;

const InstallContent = styled.div`
  text-align: left;
`;

const InstallCodeLabel = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'themecolors',
})`
  font-size: ${typography.fontSize.sm};
  color: ${({ themecolors }) => themecolors.mutedTextColor};
  margin-bottom: ${spacing.sm};
  font-weight: ${typography.fontWeight.light};
`;

const CtaContainer = styled.div`
  text-align: center;
  margin-top: ${spacing.xl};
`;

const ViewAllButton = styled(SecondaryButton)`
  width: auto;
  padding: ${spacing.md} ${spacing.xl};

  &:hover {
    color: ${textColors.light};
  }
`;

const ComponentsHeader = styled.div`
  text-align: center;
  margin-bottom: ${spacing.xl};
`;

const CenterContainer = styled(Container)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
`;

function HomepageContent({ active, setActive, navItems, components }) {
  const { theme } = useTheme();

  const themeStyles = {
    background: theme === "dark" ? gradients.dark : gradients.light,
    textColor: theme === "dark" ? textColors.light : textColors.dark,
    mutedTextColor: theme === "dark" ? textColors.mutedLight : textColors.mutedDark,
    bgColor1: theme === "dark" ? colors.darkBg1 : colors.lightBg1,
    bgColor2: theme === "dark" ? colors.darkBg2 : colors.lightBg2,
    borderColor: theme === "dark" ? colors.mutedDark : colors.mutedLight,
    primaryColor: colors.primary,
    secondaryColor: colors.secondary
  };

  return (
    <PageContainer theme={theme} textcolor={themeStyles.textColor}>
      <HeaderVariant
        variant="slide"
        theme={theme}
        logo="Lumishade UI"
        navItems={navItems}
        sidebarProps={{
          navItems: navItems,
          activeItem: active,
          onSelect: (item) => setActive(item),
          theme: theme
        }}
        showNav={true}
        showSearch={false}
        rightAction={<ThemeToggle />}
      />

      <Section id="home" padding={`100px ${spacing.md} ${spacing.xl}`}>
        <Container centerText={true}>
          <Badge 
            bgcolor={themeStyles.bgColor2} 
            color={themeStyles.secondaryColor}
          >
            <Zap style={{ width: "14px", height: "14px" }} />
            UI Kit Next.js yang bikin project makin kece
          </Badge>
          
          <Title>
            Bikin Website <GradientText>Gak Pake Ribet</GradientText>
          </Title>
          
          <Subtitle color={themeStyles.mutedTextColor}>
            Komponen UI yang siap pakai untuk React & Next.js. 
            Tinggal copy-paste, gak perlu pusing styling lagi!
          </Subtitle>
          
          <ButtonGroup>
            <PrimaryButton href="#components">
              <Eye style={{ width: "20px", height: "20px", marginRight: spacing.xs }} />
              Lihat Komponen yang Tersedia
              <ChevronRight style={{ width: "20px", height: "20px", marginLeft: spacing.sm }} />
            </PrimaryButton>
            
            <SecondaryButton 
              href="/docs"
              bordercolor={themeStyles.borderColor}
              color={themeStyles.textColor}
              hoverbg={themeStyles.bgColor2}
              hoverbordercolor={themeStyles.primaryColor}
            >
              <FileText style={{ width: "20px", height: "20px", marginRight: spacing.sm }} />
              Pelajari Cara Pemakaiannya
            </SecondaryButton>
          </ButtonGroup>
        </Container>
      </Section>

      {/* Components Section */}
      <Section 
        id="components" 
        background={themeStyles.bgColor2}
        padding={`${spacing.xl} ${spacing.md}`}
      >
        <Container>
          <ComponentsHeader>
            <SectionTitle>Komponen Tersedia</SectionTitle>
            <Subtitle color={themeStyles.mutedTextColor}>
              Pilih aja yang di butuhin, tinggal ambil!
            </Subtitle>
          </ComponentsHeader>

          <ComponentGrid>
            {components.map((component, index) => (
              <ComponentCard 
                key={index}
                bgcolor={themeStyles.bgColor1}
                color={themeStyles.textColor}
                bordercolor={themeStyles.borderColor}
                hovercolor={component.color}
                hoverbg={themeStyles.bgColor2}
              >
                {component.title}
              </ComponentCard>
            ))}
          </ComponentGrid>

          <CtaContainer>
            <ViewAllButton
              href="/docs"
              bordercolor={themeStyles.primaryColor}
              color={themeStyles.textColor}
              hoverbg={themeStyles.primaryColor}
              hoverbordercolor={themeStyles.primaryColor}
            >
              Lihat Cara Pemakaian
              <ChevronRight style={{ width: "20px", height: "20px", marginLeft: spacing.sm }} />
            </ViewAllButton>
          </CtaContainer>
        </Container>
      </Section>

      {/* Installation - Disatukan */}
      <Section background={theme === "dark" ? gradients.dark : gradients.light}>
        <CenterContainer>
          <CtaSection 
            bgcolor={themeStyles.bgColor2}
            bordercolor={themeStyles.borderColor}
          >
            <IconCircle>
              <Download style={{ width: "32px", height: "32px" }} />
            </IconCircle>
            
            <SectionTitle>Install Lumishade-UI</SectionTitle>
            

            <InstallContent>
              {/* Langkah 1: Install */}
              <InstallCodeLabel themecolors={themeStyles}>
                Langkah 1: Install package
              </InstallCodeLabel>
              <InstallCode 
                bgcolor={themeStyles.bgColor1}
                bordercolor={themeStyles.borderColor}
                color={themeStyles.textColor}
              >
                npm install lumishade-ui
              </InstallCode>

              {/* Langkah 2: Konfigurasi */}
              <InstallCodeLabel themecolors={themeStyles}>
                Langkah 2: Tambahkan di <code>next.config.mjs</code>
              </InstallCodeLabel>
              <InstallCode 
                bgcolor={themeStyles.bgColor1}
                bordercolor={themeStyles.borderColor}
                color={themeStyles.textColor}
              >
                {`
const nextConfig = {
  transpilePackages: ["lumishade-ui"],
};

export default nextConfig;`}
              </InstallCode>
            </InstallContent>
          </CtaSection>
        </CenterContainer>
      </Section>

      <FooterVariant
        variant="fadeIn"
        logo="Lumishade UI"
        copyText="© 2025 Lumishade UI-Nbllve. Dibuat dengan ❤️ developer."
        theme={theme}
        socials={[
          { name: "GitHub", href: "https://github.com/imasnabelliavenda/Lumishade-UI", icon: <Github /> }
        ]}
      />
    </PageContainer>
  );
}