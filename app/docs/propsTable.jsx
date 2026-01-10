"use client";

import styled from "styled-components";
import { spacing, borderRadius, typography, colors, textColors } from "../tokens/themes";

const Wrapper = styled.div`
  margin-top: ${spacing.xl};
  padding: ${spacing.lg};
  background: ${({ $theme }) =>
    $theme === "dark" ? colors.darkBg2 : colors.lightBg2};
  border-radius: ${borderRadius.md};
`;

const Title = styled.h3`
  margin-bottom: ${spacing.md};
  font-size: 1.4rem;
  font-weight: ${typography.fontWeight.semibold};
  color: ${({ $theme }) =>
    $theme === "dark" ? textColors.light : textColors.dark};
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  text-align: left;
  padding: ${spacing.md};
  border-bottom: 2px solid ${colors.primary};
`;

const Td = styled.td`
  padding: ${spacing.md};
  border-bottom: 1px solid
    ${({ $theme }) =>
      $theme === "dark" ? colors.mutedDark : colors.mutedLight};
  vertical-align: top;
`;

const PropRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PropName = styled.span`
  font-weight: ${typography.fontWeight.semibold};
`;

const Meta = styled.span`
  font-size: 0.8rem;
  opacity: 0.75;
`;

const ColorRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
`;

const ColorItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  opacity: 0.8;
`;

const ColorDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  border: 1px solid rgba(0, 0, 0, 0.2);
`;


export default function PropsTable({ title, data, theme = "light" }) {
  return (
    <Wrapper $theme={theme}>
      <Title $theme={theme}>{title}</Title>

      <Table>
        <thead>
          <tr>
            <Th>Props</Th>
            <Th>Deskripsi</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={i}>
              <Td $theme={theme}>
                <PropRow>
                  <PropName>{item.name}</PropName>
                  {item.meta && <Meta>{item.meta}</Meta>}
                </PropRow>
              </Td>
              <Td $theme={theme}>
                {item.description}

                {item.colors && (
                  <ColorRow>
                    {item.colors.map((c, i) => (
                      <ColorItem key={i}>
                        <ColorDot $color={c.value} />
                        {c.name}
                      </ColorItem>
                    ))}
                  </ColorRow>
                )}
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Wrapper>
  );
}
