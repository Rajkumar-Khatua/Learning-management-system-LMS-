"use client";

import { usePathname } from "next/navigation";
import SidebarItem from "./sidebar-item";
import { BarChart, Compass, Layout, List } from "lucide-react";

// guest routes
const guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Compass,
    label: "Browse",
    href: "/search",
  },
];
//  teacher routes
const teacherRoutes = [
  {
    icon: BarChart,
    label: "Analytics",
    href: "/teacher/analytics",
  },
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },
];
const SidebaRroutes = () => {
  // find out if we are on a teacher page
  const pathname = usePathname();
  //  include the teacher routes if we are on a teacher page
  const isTeacherPage = pathname?.includes("/teacher");
  //  if we are on a teacher page, use the teacher routes, otherwise use the guest routes
  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};

export default SidebaRroutes;
