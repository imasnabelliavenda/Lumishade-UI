"use client";

import styled from "styled-components";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const Wrapper = styled.div`
  position: relative;
`;

const Pre = styled.pre`
  background: ${({ theme }) => theme.colors.bgSoft};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.codeText};
  white-space: pre-wrap;
  padding: 18px;
  border-radius: 12px;
  font-family: "JetBrains Mono", monospace;
  font-size: 12.5px;
  line-height: 1.7;
  transition: all 0.25s ease;
`;

const CopyButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.colors.codeButtonBorder};
  border-radius: 8px;
  padding: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #f8f8f8;
  }
`;

export default function CodeBlock({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <Wrapper>
      <CopyButton onClick={handleCopy} aria-label="Copy code">
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </CopyButton>
      <Pre>{code}</Pre>
    </Wrapper>
  );
}
