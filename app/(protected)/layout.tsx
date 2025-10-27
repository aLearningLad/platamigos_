import SideBar from "../components/dash_comps/sidebar/sidebar";

export default function SignedInLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className=" w-full min-h-screen flex flex-col lg:flex-row relative  ">
      <SideBar />
      <div className="snap-y snap-mandatory w-full">{children}</div>
    </div>
  );
}
