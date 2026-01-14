"use client"

import ComponentSection from "../componentSection";
import SidebarVariant from "../../components/sidebar";
import { Home, Settings, User, LogOut } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../../context/themeContext";
import { colors, red } from "../../tokens/themes";
import PropsTable from "../propsTable";

export default function SidebarSection () {
  const [active, setActive] = useState("dashboard");

  const { theme } = useTheme();

  const sidebarProps = [
    {
      name: "variant",
      meta: "(Required)",
      description:
        "Menentukan tampilan sidebar. Bisa pakai: default, slide-in, atau inner-slide.",
    },
    {
      name: "theme",
      meta: "(Required)",
      description: "Tema warna sidebar",
      colors: [
        { name: "light", value: colors.lightBg2 },
        { name: "dark", value: colors.darkBg1 },
        { name: "red", value: red.soft },
      ],
    },
    {
      name: "navItems",
      meta: "(Required)",
      description:
        "Daftar menu navigasi yang ditampilkan di sidebar. Biasanya berisi label dan icon.",
    },
    {
      name: "profile",
      meta: "(Optional)",
      description:
        "Data profil user yang ditampilkan di bagian atas sidebar, seperti avatar, nama, dan role.",
    },
    {
      name: "activeItem",
      meta: "(Optional)",
      description:
        "Menandai menu yang sedang aktif. Cocok dipakai kalau sidebar-nya interaktif.",
    },
    {
      name: "onSelect",
      meta: "(Optional)",
      description:
        "Callback yang dipanggil saat menu diklik. Biasanya dipakai buat update activeItem.",
    },
    {
      name: "title",
      meta: "(Optional)",
      description:
        "Judul atau nama aplikasi yang ditampilkan di sidebar.",
    },
  ];

  return (
    <>
      <ComponentSection
        title="Default Sidebar"
        preview={
          <SidebarVariant
            variant="default"
            theme="dark"
            navItems={[
            { label: "Dashboard", icon: <Home />, href: "#" },
            { label: "Profile", icon: <User />, href: "#" },
            { label: "Settings", icon: <Settings />, href: "#" },
            { label: "Logout", icon: <LogOut />, href: "#" }
            ]}
            profile={{
            avatar: "https://images.unsplash.com/photo-1500389723459-ca24a5564899?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            name: "Imas Nabellia",
            role: "Designer"
            }}
            activeItem={active}
            onSelect={(item) => setActive(item)}
            title="Lumishade UI"
          />
        }
        code={`"use client";
import { SidebarVariant } from "lumishade-ui";

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");

  return (
    <>
      <SidebarVariant
        variant="default"
        theme="dark"
        navItems={[
          { label: "Dashboard", icon: <Home />, href: "#" },
          { label: "Profile", icon: <User />, href: "#" },
          { label: "Settings", icon: <Settings />, href: "#" },
          { label: "Logout", icon: <LogOut />, href: "#" }
        ]}
        profile={{
          avatar: "https://images.unsplash.com/photo-1500389723459-ca24a5564899?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Imas Nabellia",
          role: "Designer"
        }}
        activeItem={active}
        onSelect={(item) => setActive(item)}
        title="Lumishade UI"
      />
    </>
  )
}`}
      />

      <ComponentSection
        title="Slide-in Sidebar"
        preview={
          <SidebarVariant
            variant="slide-in"
            theme="dark"
            profile={{
              avatar: "https://images.unsplash.com/photo-1500389723459-ca24a5564899?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Imas Nabellia",
              role: "Designer"
            }}
            navItems={[
              { label: "home", icon: <Home /> },
              { label: "settings", icon: <Settings /> },
              { label: "account", icon: <User /> },
            ]}
            title="Lumishade UI"
          />
        }
        code={`"use client";
import { SidebarVariant } from "lumishade-ui";

export default function Sidebar() {
  return (
    <>
      <SidebarVariant
        theme="dark"
        variant="slide-in"
        profile={{
          avatar: "https://images.unsplash.com/photo-1500389723459-ca24a5564899?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Imas Nabellia",
          role: "Designer"
        }}
        navItems={[
          { label: "home", icon: <Home /> },
          { label: "settings", icon: <Settings /> },
          { label: "account", icon: <User /> },
        ]}
        title="Lumishade UI"
      />
    </>
  )
}
`}
      />

      <ComponentSection
        title="Inner Slide Sidebar"
        preview={
          <SidebarVariant
            variant="inner-slide"
            theme="dark"
            profile={{
              avatar: "https://images.unsplash.com/photo-1500389723459-ca24a5564899?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Imas Nabellia",
              role: "Designer"
            }}
            navItems={[
              { label: "home", icon: <Home /> },
              { label: "settings", icon: <Settings /> },
              { label: "account", icon: <User /> },
            ]}
            title="Lumishade-UI"
          />
        }
        code={`"use client";
import { SidebarVariant } from "lumishade-ui";

export default function Sidebar() {
  return (
    <>
      <SidebarVariant
        theme="dark"
        variant="inner-slide"
        profile={{
          avatar: "https://images.unsplash.com/photo-1500389723459-ca24a5564899?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          name: "Imas Nabellia",
          role: "Designer"
        }}
        navItems={[
          { label: "home", icon: <Home /> },
          { label: "settings", icon: <Settings /> },
          { label: "account", icon: <User /> },
        ]}
        title="Lumishade-UI"
      />
    </>
  )
}
`}
      />
      <PropsTable 
        title="Sidebar Props" 
        data={sidebarProps} 
        theme={theme}
      />
    </>
  )
}