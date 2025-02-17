import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Santa Cruz Alimentos Manager",
  description:
    "Herramienta de gestión integral para Santa Cruz Alimentos. Administra inventarios, pedidos, y procesos de producción de manera eficiente y en tiempo real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <SidebarProvider>
            <AppSidebar />
            <main className="flex flex-1 flex-col gap-4 p-4 pt-0 w-full h-screen">
              <div className="flex gap-3 items-center">
                <SidebarTrigger />
              </div>
              {children}
            </main>
          </SidebarProvider>
      </body>
    </html>
  );
}