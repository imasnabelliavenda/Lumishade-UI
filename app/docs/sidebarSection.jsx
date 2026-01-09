"use client"

import ComponentSection from "./componentSection";
import SidebarVariant from "../components/sidebar";
import { Home, Settings, User, LogOut } from "lucide-react";
import { useState } from "react";

export default function SidebarSection () {
    const [active, setActive] = useState("dashboard");

    return (
        <>
            <ComponentSection
                title="Default Sidebar"
                preview={
                    <SidebarVariant
                        variant="default"
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
        </>
    )
}