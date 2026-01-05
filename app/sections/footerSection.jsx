"use client"

import ComponentSection from "./componentSection";
import FooterVariant from "../components/footer";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function FooterSection () {
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
import { Facebook, Instagram, Twitter } from "lucide-react";

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
import { Facebook, Instagram, Twitter } from "lucide-react";

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
        </>
    )
}