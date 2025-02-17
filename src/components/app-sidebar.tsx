"use client"

import * as React from "react"
import {
  AudioWaveform,
  BriefcaseBusiness,
  Command,
  GalleryVerticalEnd,
  LayoutDashboard,
  Package,
  Settings2,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import Image from 'next/image'
// This is sample data.
const data = {
  user: {
    name: "shadcn",
    role: "Administrador",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free"
    },
  ],
  navMain: [
    {
      title: "Panel de Control",
      url: "/",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Negocios",
      url: "/business",
      icon: BriefcaseBusiness,
    },
    {
      title: "Productos",
      url: "/products",
      icon: Package,

    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <img src="/SCZ-Alimentos-Logo.svg" alt="Logo" />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
