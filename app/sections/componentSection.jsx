"use client";

import styled from "styled-components";
import CodeBlock from "../components/code-block";
import { typography } from "../tokens/themes";

const Section = styled.section`
  margin-bottom: 48px;
`;

const Title = styled.h3` 
  font-family: ${typography.fontJudul};
  font-size: ${typography.fontSize.md};
  font-weight: ${typography.fontWeight.bold};
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

const Preview = styled.div`
  background: ${({ theme }) => theme.colors.bgSoft};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 14px;
  padding: 24px;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export default function ComponentSection({ title, preview, code }) {
  return (
    <Section>
      <Title>{title}</Title>
      <Preview>{preview}</Preview>
      <CodeBlock code={code} />
    </Section>
  );
}
