"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { CiSearch, CiHome } from "react-icons/ci";
import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Lab from "./Lab";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      { icon:CiHome,
        label: "Home",
       active: pathname !== "/search",
        href: "/" },
      { icon:CiSearch,
        label: "Search",
       active: pathname === "/search",
        href: "/search" },
    ],
    [pathname]
  );

  return (
    <div className="flex h-full justify-end">
       <main className="flex flex-col w-full h-full overflow-x-hidden justify-center align-middle">{children}</main>
       <div className="hidden md:flex flex-col gap-y-2 h-full w-[20rem] p-2">
        <Box>
          <div className="flex flex-col gapy4 px-5 py-4">
            {routes.map((route) => (
              <SidebarItem key={route.label} {...route} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Lab />
        </Box>
      </div>
    </div>
  );
};
export default Sidebar;

