import HomeIcon from "@/components/ui/icons/home-icon";
import ShoppingBagIcon from "@/components/ui/icons/shopping-bag-icon";
import UsersIcon from "@/components/ui/icons/users-icon";
import TrophyIcon from "@/components/ui/icons/trophy-icon";
import BuildingIcon from "@/components/ui/icons/building-icon";

export interface INavLink {
  label: string;
  icon: React.ElementType;
  href: string;
}

export const mobileMenuItemsStack1: INavLink[] = [
  {
    label: "Лента",
    icon: HomeIcon,
    href: "/",
  },
  {
    label: "Маркетплейс",
    icon: ShoppingBagIcon,
    href: "/marketplace",
  },
];

export const mobileMenuItemsStack2: INavLink[] = [
  {
    label: "Рейтинги",
    icon: UsersIcon,
    href: "/ratings",
  },
  {
    label: "Cоревнования",
    icon: TrophyIcon,
    href: "/competitions",
  },
  {
    label: "Организации",
    icon: BuildingIcon,
    href: "/organisations",
  },
];

export const desktopMenuItems: INavLink[] = [
  {
    label: "Лента",
    icon: HomeIcon,
    href: "/",
  },
  {
    label: "Маркетплейс",
    icon: ShoppingBagIcon,
    href: "/marketplace",
  },
  {
    label: "Рейтинги",
    icon: UsersIcon,
    href: "/ratings",
  },
  {
    label: "Cоревнования",
    icon: TrophyIcon,
    href: "/competitions",
  },
  {
    label: "Организации",
    icon: BuildingIcon,
    href: "/organisations",
  },
];
