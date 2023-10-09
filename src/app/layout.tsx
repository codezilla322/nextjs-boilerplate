import "./globals.css";
import type { Metadata } from "next";

import Provider from "./provider";
export const metadata: Metadata = {
  title: "Bill Tracking | StateAffairs",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
