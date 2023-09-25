"use client";
import Topnav from "@/components/Topnav";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <Topnav />
        <main>{children}</main>
      </body>
    </html>
  );
}
