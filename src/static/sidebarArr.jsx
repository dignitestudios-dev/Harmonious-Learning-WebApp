import {
  bell,
  bookSide,
  calendar,
  draft,
  hexagon,
  message,
  plantSide,
  sticker,
  userSide,
  window,
} from "../assets/export";

export const sidebarArr = [
  {
    title: "Dashboard",
    url: "/",
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

  // {
  //   title: "Promo Codes",
  //   url: "/promo-codes",
  //   icon: sticker,
  // },

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
