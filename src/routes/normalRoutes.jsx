import GlobalLayout from "../layouts/GlobalLayout";
import Home from "../pages/dashboard/Home";
import Users from "../pages/users/Users";

import MeditationDetails from "../pages/meditation/MeditationDetails";
import SubscriptionTable from "../components/subscription/SubscriptionTable";

import Notifications from "../pages/notifications/Notifications";

import MeditationUpload from "../pages/meditation/MeditationUpload";
import PromocodeDetails from "../pages/promocodes/PromocodeDetails";
import UserDetail from "../pages/users/UserDetail";
import Meditation from "../pages/meditation/Meditation";
import BedtimeStories from "../pages/bedtimeStories/bedtimeStories";
import UpcomingStories from "../pages/upcommingStories/UpcomingStories";
import Subscription from "../pages/subscription/Subscription";
import Subject from "../pages/subject/Subject";

import PromoCodes from "../pages/promocodes/PromoCodes";
import Feedback from "../pages/feedback/Feedback";

export const normalRoutes = [
  {
    title: "Dashboard",
    url: "/dashboard",
    page: <GlobalLayout page={<Home />} />,
  },
  {
    title: "Dashboard",
    url: "/users",
    page: <GlobalLayout page={<Users />} />,
  },
  {
    title: "User Profile",
    url: "/user-detail/:id",
    page: <GlobalLayout page={<UserDetail />} />,
  },

  {
    title: "Meditation",
    url: "/meditation",
    page: <GlobalLayout page={<Meditation />} />,
  },
  {
    title: "Meditation",
    url: "/meditation-details/:id",
    page: <GlobalLayout page={<MeditationDetails />} />,
  },

  {
    title: "Meditation Upload",
    url: "/meditation-upload",
    page: <GlobalLayout page={<MeditationUpload />} />,
  },

  {
    title: "Bedtime Stories",
    url: "/bedtime-stories",
    page: <GlobalLayout page={<BedtimeStories />} />,
  },

  {
    title: "Upcoming",
    url: "/upcoming",
    page: <GlobalLayout page={<UpcomingStories />} />,
  },

  {
    title: "Subscription",
    url: "/subscription",
    page: <GlobalLayout page={<Subscription />} />,
  },

  {
    title: "Notifications",
    url: "/notifications",
    page: <GlobalLayout page={<Notifications />} />,
  },

  {
    title: "Feedback",
    url: "/feedback",
    page: <GlobalLayout page={<Feedback />} />,
  },

  {
    title: "Subjects",
    url: "/subjects",
    page: <GlobalLayout page={<Subject />} />,
  },

  {
    title: "Promo Codes",
    url: "/promo-codes",
    page: <GlobalLayout page={<PromoCodes />} />,
  },

  {
    title: "promocode-details",
    url: "/promocode-details",
    page: <GlobalLayout page={<PromocodeDetails />} />,
  },
];
