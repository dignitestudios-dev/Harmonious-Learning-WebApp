import { RxDashboard } from "react-icons/rx";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { HiOutlineShieldExclamation } from "react-icons/hi2";
import { FaUser } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { GiMeditation } from "react-icons/gi";
import { FaCreditCard } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import {
  bell,
  book,
  bookSide,
  calendar,
  draft,
  hexagon,
  message,
  plant,
  plantSide,
  sticker,
  user,
  userSide,
  window,
} from "../assets/export";

export const sidebarArr = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: hexagon,
  },

  {
    title: "Users",
    url: "/users",
    icon: userSide,
  },

  {
    title: "Meditation",
    url: "/meditation",
    icon: plantSide,
  },

  {
    title: "Bedtime Stories",
    url: "/bedtime-stories",
    icon: bookSide,
  },

  {
    title: "Upcoming Track/Stories",
    url: "/upcoming",
    icon: calendar,
  },

  {
    title: "Subscription",
    url: "/subscription",
    icon: draft,
  },
  {
    title: "Subjects",
    url: "/subjects",
    icon: window,
  },

  {
    title: "Promo Codes",
    url: "/promo-codes",
    icon: sticker,
  },

  {
    title: "Feedback",
    url: "/feedback",
    icon: message,
  },

  {
    title: "Push Notifications",
    url: "/notifications",
    icon: bell,
  },
];
