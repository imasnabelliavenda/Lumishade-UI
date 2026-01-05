"use client";

import styled from "styled-components";
import { typography } from "../tokens/themes";
import CodeBlock from "../components/code-block";

const HomeWrapper = styled.div`
  font-family: ${typography.fontJudul};
  color: ${({ theme }) => theme.colors.text};
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: ${typography.fontSize.lg};
  ${typography.fontWeight.bold};
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: ${typography.fontSize.lg};
  font-weight: ${typography.fontWeight.bold};
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: ${typography.fontSize.md};
`;

const List = styled.ul`
  padding-left: 1.25rem;
  list-style: disc;
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: ${typography.fontSize.md};
`;


export default function HomePage() {
  return (
    <HomeWrapper>
      <Section>
        <Title>Lumishade UI</Title>
        <Paragraph>
          Lumishade UI adalah library komponen <strong>UI modern, minimalis, dan dapat disesuaikan</strong> untuk <strong>React & Next.js</strong>, dibangun dengan <strong>styled-components</strong>. Cocok untuk dashboard, landing page, dan antarmuka admin dengan dukungan tema <strong>gelap & terang</strong>.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>Fitur</Subtitle>
        <List>
          <li>Dibangun menggunakan React & Next.js</li>
          <li>Menggunakan styled-components</li>
          <li>Dukungan tema Gelap & Terang</li>
          <li>Beberapa varian untuk setiap komponen</li>
          <li>Bersih, modern, dan reusable</li>
          <li>Ringan & mudah disesuaikan</li>
        </List>
      </Section>

      <Section>
        <Subtitle>Instalasi</Subtitle>
        <Paragraph>Install Lumishade UI menggunakan npm atau yarn:</Paragraph>
        <CodeBlock
  code={`npm install lumishade-ui
yarn add lumishade-ui`}
/>

        <Paragraph>Pastikan dependencies ini juga terpasang:</Paragraph>
        <CodeBlock
  code={`npm install styled-components
npm install babel-plugin-styled-components
npm install lucide-react`}
/>
      </Section>

      <Section>
        <Subtitle>Komponen</Subtitle>
        <List>
          <li><strong>Button:</strong> Tombol dengan berbagai varian dan dukungan ikon</li>
          <li><strong>Card:</strong> Card fleksibel dengan image dan animasi</li>
          <li><strong>Header:</strong> Header responsif dengan beberapa varian navigasi</li>
          <li><strong>Sidebar:</strong> Sidebar navigasi dengan animasi dan profil pengguna</li>
          <li><strong>Footer:</strong> Footer dengan link, sosial media, dan animasi</li>
        </List>
      </Section>
    </HomeWrapper>
  );
}
