"use client"

import ComponentSection from "../componentSection";
import FooterVariant from "../../components/footer";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useTheme } from "../../context/themeContext";
import { colors, red } from "../../tokens/themes";
import PropsTable from "../propsTable";

export default function FooterSection () {
  const { theme } = useTheme();

  const footerProps = [
    {
      name: "variant",
      meta: "(Required)",
      description:
        "Menentukan tampilan footer. Bisa default, wave, atau fadeIn.",
    },
    {
      name: "theme",
      meta: "(Required)",
      description:
        "Tema warna footer, light atau dark.",
      colors: [
        { name: "light", value: colors.lightBg2 },
        { name: "dark", value: colors.darkBg1 },
        { name: "red", value:  red.primary, },
      ],
    },
    {
      name: "logo",
      meta: "(Optional)",
      description:
        "Teks atau logo yang ditampilkan di bagian footer.",
    },
    {
      name: "links",
      meta: "(Optional)",
      description:
        "Daftar link navigasi yang ditampilkan di footer.",
    },
    {
      name: "socials",
      meta: "(Optional)",
      description:
        "Daftar ikon media sosial beserta link-nya.",
    },
    {
      name: "copyText",
      meta: "(Optional)",
      description:
        "Teks copyright yang muncul di bagian bawah footer.",
    },
  ];

  return (
    <>
      <ComponentSection
        title="Default Footer"
        preview={
          <FooterVariant
            logo="Lumishade UI"
            links={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
            ]}
            copyText="© 2025 Lumishade UI. All rights reserved."
            theme="dark"
          />
        }
        code={`"use client";
import { FooterVariant } from "lumishade-ui";

export default function Footer() {
  return (
    <>
      <FooterVariant
        logo="Lumishade UI"
        links={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        copyText="© 2025 Lumishade UI. All rights reserved."
        theme="dark"
      />
    </>
  )
}
`}
      />

      <ComponentSection
        title="Footer Wave Variant"
        preview={
          <FooterVariant
            variant="wave"
            logo="Lumishade UI"
            socials={[
            { name: "Facebook", href: "https://facebook.com", icon: <Facebook /> },
            { name: "Instagram", href: "https://instagram.com", icon: <Instagram /> },
            { name: "Twitter", href: "https://twitter.com", icon: <Twitter /> },
            ]}
            copyText="© 2025 Lumishade UI. All rights reserved."
            theme="light"
          />
          }
          code={`"use client";
import { FooterVariant } from "lumishade-ui";

export default function Footer() {
  return (
    <>
      <FooterVariant
        variant="wave"
        logo="Lumishade UI"
        socials={[
          { name: "Facebook", href: "https://facebook.com", icon: <Facebook /> },
          { name: "Instagram", href: "https://instagram.com", icon: <Instagram /> },
          { name: "Twitter", href: "https://twitter.com", icon: <Twitter /> },
        ]}
        copyText="© 2025 Lumishade UI. All rights reserved."
        theme="light"
      />
    </>
  )
}
`}
      />

      <ComponentSection
        title="Footer Fade In Variant"
        preview={
          <FooterVariant
            variant="fadeIn"
            logo="Lumishade UI"
            copyText="© 2025 Lumishade UI"
            theme="dark"
            links={[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ]}
            socials={[
              { name: "Facebook", href: "https://facebook.com", icon: <Facebook /> },
              { name: "Instagram", href: "https://instagram.com", icon: <Instagram /> },
              { name: "Twitter", href: "https://twitter.com", icon: <Twitter /> },
            ]}
          />
        }
        code={`"use client";
import { FooterVariant } from "lumishade-ui";

export default function Footer() {
  return (
    <>
      <FooterVariant
        variant="fadeIn"
        logo="Lumishade UI"
        copyText="© 2025 Lumishade UI"
        theme="dark"
        links={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ]}
        socials={[
          { name: "Facebook", href: "https://facebook.com", icon: <Facebook /> },
          { name: "Instagram", href: "https://instagram.com", icon: <Instagram /> },
          { name: "Twitter", href: "https://twitter.com", icon: <Twitter /> },
        ]}
      />
    </>
  )
}
`}
      />
      <PropsTable 
        title="Footer Props" 
        data={footerProps} 
        theme={theme}
      />
    </>
  )
}