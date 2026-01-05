# Lumishade UI

Lumishade UI is a modern, minimal, and customizable **UI component library** for **React & Next.js**, built with **styled-components**.  
Designed for dashboards, landing pages, and admin interfaces with **dark & light theme support**.

---

## Features

- Built for **React & Next.js (App Router ready)**
- Uses **styled-components**
- Dark & Light theme support
- Multiple variants per component
- Clean, modern, and reusable UI
- Lightweight & easy to customize


## Installation

Install Lumishade UI via npm:

```bash
npm install lumishade-ui
# or using yarn
yarn add lumishade-ui
```

Make sure these dependencies are installed in your project:

```bash
npm styled-components babel-plugin-styled-components lucide-react 
```

## Components
### Button
Button component with multiple variants and icon support.
```jsx
import { ButtonVariant } from "lumishade-ui";
import { Search, RefreshCcw } from "lucide-react";

<ButtonVariant
  variant="default"
  label="Submit"
  onClick={() => alert("Submitted")}
 />

<ButtonVariant
  variant="icon"
  theme="dark"
  label="Search"
  icon={<Search />}
/>

<ButtonVariant
  variant="rotate"
  theme="light"
  label="Refresh"
  icon={<RefreshCcw />}
/>
```

### Card
Flexible card component with image, animation, and interaction variants.
```jsx
import { CardVariant } from "lumishade-ui";

<CardVariant
  variant="default"
  theme="dark"
  title="Love In The Clouds"
  desc="Ming Yi disguised herself as a dancer to hide her identity."
  image="https://example.com/image.jpg"
  buttonLabel="Explore"
/>

<CardVariant
  variant="interactive"
  theme="dark"
  title="Love In The Clouds"
  desc="Adapted from the web novel Ru Qing Yun"
  image="https://example.com/image.jpg"
  extra="At the annual Qingyun Conference..."
/>

<CardVariant
  variant="float"
  theme="dark"
  title="Premium"
  desc="Special card with floating animation"
  image="https://example.com/image.jpg"
/>
```

### Header
Responsive header with multiple navigation variants.
```jsx
import { HeaderVariant } from "lumishade-ui";
import { Home, User, Settings, LogOut } from "lucide-react";

<HeaderVariant variant="default" logo="Lumishade UI" />

<HeaderVariant
  variant="burger"
  logo="Lumishade UI"
  sidebarProps={{
    navItems: [
      { label: "Dashboard", icon: <Home />, href: "#" },
      { label: "Profile", icon: <User />, href: "#" },
      { label: "Settings", icon: <Settings />, href: "#" },
      { label: "Logout", icon: <LogOut />, href: "#" }
    ]
  }}
/>

<HeaderVariant
  variant="slide"
  logo="Lumishade UI"
  navItems={["Home", "Services", "Contact"]}
/>
```

### Footer
Footer component with links, social icons, and animation variants.
```jsx
import { FooterVariant } from "lumishade-ui";
import { Facebook, Instagram, Twitter } from "lucide-react";

<FooterVariant
  logo="Lumishade UI"
  links={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" }
  ]}
  copyText="© 2025 Lumishade UI"
  theme="dark"
/>

<FooterVariant
  variant="wave"
  logo="Lumishade UI"
  socials={[
    { name: "Facebook", href: "#", icon: <Facebook /> },
    { name: "Instagram", href: "#", icon: <Instagram /> },
    { name: "Twitter", href: "#", icon: <Twitter /> }
  ]}
  copyText="© 2025 Lumishade UI"
  theme="light"
/>
```

### Sidebar
Sidebar navigation component with animation and profile support.
```jsx
import { SidebarVariant } from "lumishade-ui";
import { Home, User, Settings, LogOut } from "lucide-react";

<SidebarVariant
  variant="default"
  title="Lumishade UI"
  navItems={[
    { label: "Dashboard", icon: <Home /> },
    { label: "Profile", icon: <User /> },
    { label: "Settings", icon: <Settings /> },
    { label: "Logout", icon: <LogOut /> }
  ]}
  profile={{
    avatar: "/avatar.jpg",
    name: "Imas Nabellia",
    role: "Designer"
  }}
/>

<SidebarVariant
  variant="slide-in"
  title="Lumishade UI"
  navItems={[
    { label: "Home", icon: <Home /> },
    { label: "Settings", icon: <Settings /> },
    { label: "Account", icon: <User /> }
  ]}
/>
```

## 🛠 Built With

React
Next.js
styled-components
lucide-react

