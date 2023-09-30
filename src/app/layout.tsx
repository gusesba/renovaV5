"use client";
import Topnav from "@/components/Topnav";
import "bootstrap/dist/css/bootstrap.min.css";
import { QueryClient, QueryClientProvider } from "react-query";
import "./globals.css";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <html lang="pt">
        <body>
          <Topnav />
          <main>{children}</main>
        </body>
      </html>
    </QueryClientProvider>
  );
}
