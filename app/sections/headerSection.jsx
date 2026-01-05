"use client"

import ComponentSection from "./componentSection";
import HeaderVariant from "../components/header";
import { Home, User, Settings } from "lucide-react";
import { useState } from "react";

export default function HeaderSection () {
  const [active, setActive] = useState("dashboard");

  const NavItems = [
    { id: "dashboard", label: "Dashboard", icon: <Home />, href: "#" },
    { id: "profile", label: "Profile", icon: <User />, href: "#" },
    { id: "settings", label: "Settings", icon: <Settings />, href: "#" }
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
import { Home, User, Settings } from "lucide-react";
import { useState } from "react";

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
import { useState } from "react";

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
    </>
  )
}