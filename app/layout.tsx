import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";

import { Toaster } from "react-hot-toast";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["400", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Platamigos",
  description: "Peer lending, simplified",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Toaster
          position="top-right"
          toastOptions={{
            style: { fontSize: 11 },
            success: {
              duration: 3000,

              iconTheme: {
                primary: "green",
                secondary: "white",
              },
            },
            error: {
              duration: 3000,
              iconTheme: {
                primary: "red",
                secondary: "white",
              },
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
