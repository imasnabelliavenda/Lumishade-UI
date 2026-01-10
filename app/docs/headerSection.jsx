"use client"

import ComponentSection from "./componentSection";
import HeaderVariant from "../components/header";
import { Home, User, Settings } from "lucide-react";
import { useState } from "react";
import PropsTable from "./propsTable";
import { useTheme } from "../context/themeContext";
import { colors } from "../tokens/themes";

export default function HeaderSection () {
  const [active, setActive] = useState("dashboard");
  const { theme } = useTheme();

  const NavItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home />, href: "#" },
    { id: "profile", label: "Profile", icon: <User />, href: "#" },
    { id: "settings", label: "Settings", icon: <Settings />, href: "#" }
  ];

  const headerProps = [
    {
      name: "variant",
      meta: "(Required)",
      description:
        "Menentukan jenis header yang digunakan. Tersedia: default, burger, dan slide.",
    },
    {
      name: "theme",
      meta: "(Required)",
      description: "Tema warna header",
      colors: [
        { name: "light", value: colors.lightBg2 },
        { name: "dark", value: colors.darkBg1 },
      ],
    },
    {
      name: "logo",
      meta: "(Optional)",
      description:
        "Teks atau logo yang ditampilkan di sisi kiri header.",
    },
    {
      name: "navItems",
      meta: "(Optional)",
      description:
        "Daftar menu navigasi yang ditampilkan di header atau sidebar.",
    },
    {
      name: "showSearch",
      meta: "(Optional)",
      description:
        "Menampilkan kolom pencarian di header. Default: true.",
    },
    {
      name: "sidebarProps",
      meta: "(Optional)",
      description:
        "Properti tambahan untuk sidebar, dipakai pada variant burger.",
    },
  ];

  return (
    <>
      <ComponentSection
        title="Default Header"
        preview={
          <HeaderVariant 
            variant="default" 
            logo="Lumishade UI" 
            showSearch={true}
            theme="dark"
          />
        }
        code={`"use client";
import { HeaderVariant } from "lumishade-ui";

export default function Header() {
  return (
    <>
      <HeaderVariant 
        variant="default" 
        logo="Lumishade UI" 
        showSearch={true}
        theme="dark"
      />
    </>
  )
}
`}
      />

      <ComponentSection
        title="Header With Burger"
        preview={
          <HeaderVariant
            variant="burger"
            theme="dark"
            logo="Lumishade UI"
            navItems={NavItems}
            sidebarProps={{
              navItems: NavItems,
              activeItem: active,
              onSelect: (item) => setActive(item)
            }}/>
        }
        code={`"use client";
import { HeaderVariant } from "lumishade-ui";

export default function Header() {
  const [active, setActive] = useState("dashboard");

  const NavItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home />, href: "#" },
    { id: "profile", label: "Profile", icon: <User />, href: "#" },
    { id: "settings", label: "Settings", icon: <Settings />, href: "#" }
  ];

  return (
    <>
      <HeaderVariant
        variant="burger"
        theme="dark"
        logo="Lumishade UI"
        navItems={NavItems}
        sidebarProps={{
          navItems: NavItems,
          activeItem: active,
          onSelect: (item) => setActive(item)
        }}
      />
    </>
  )
}
`}
      />

      <ComponentSection
        title="Header With Animation (Slide)"
        preview={
          <HeaderVariant 
            variant="slide"
            theme="dark"
            logo="Lumishade UI"
            navItems={NavItems}
            sidebarProps={{
              navItems: NavItems,
              activeItem: active,
              onSelect: (item) => setActive(item)
            }}
            showSearch={false}
          />
        }
        code={`"use client";
import { HeaderVariant } from "lumishade-ui";

export default function Header() {
  const [active, setActive] = useState("dashboard");

  const NavItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home />, href: "#" },
    { id: "profile", label: "Profile", icon: <User />, href: "#" },
    { id: "settings", label: "Settings", icon: <Settings />, href: "#" }
  ];

  return (
    <>
      <HeaderVariant 
        variant="slide"
        theme="dark"
        logo="Lumishade UI"
        navItems={NavItems}
        sidebarProps={{
          navItems: NavItems,
          activeItem: active,
          onSelect: (item) => setActive(item)
        }}
        showSearch={false}
      />
    </>
  )
}
`}
      />
      <PropsTable 
        title="Header Props" 
        data={headerProps} 
        theme={theme}
      />
    </>
  )
}