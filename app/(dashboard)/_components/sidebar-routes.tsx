"use client";

import SidebarItem from "./sidebar-item";

const guestRoutes = [
  {
    icon: 'LayoutIcon',
    label: "Dashboard",
    href: "/",
  },
  {
    icon: 'CompasIcon',
    label: "Browse",
    href: "/search",
  },
];
const SidebaRroutes = () => {
    const routes = guestRoutes;
  return <div className="flex flex-col w-full">
    {routes.map(route=>(
        <SidebarItem
            key={route.href}
            icon={route.icon}
            label={route.label}
            href={route.href}
        />
    ))}
  </div>;
};

export default SidebaRroutes;
