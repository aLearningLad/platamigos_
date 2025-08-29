import React from "react";
import SideBar from "../components/dash_comps/sidebar/sidebar";

export default function SignedInLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className=" w-full min-h-screen flex flex-col lg:flex-row">
          <SideBar />
          {children}
        </div>
      </body>
    </html>
  );
}
