import GlobalLayout from "../layouts/GlobalLayout";
import Home from "../pages/dashboard/Home";
import Users from "../pages/users/Users";

import MeditationDetails from "../pages/meditation/MeditationDetails";

import Notifications from "../pages/notifications/Notifications";

import MeditationUpload from "../pages/meditation/MeditationUpload";

import UserDetail from "../pages/users/UserDetail";
import Meditation from "../pages/meditation/Meditation";
import BedtimeStories from "../pages/bedtimeStories/bedtimeStories";
import UpcomingStories from "../pages/upcomingStories/UpcomingStories";
import Subscription from "../pages/subscription/Subscription";
import Subject from "../pages/subject/Subject";

import PromoCodes from "../pages/promocodes/PromoCodes";
import Feedback from "../pages/feedback/Feedback";
import MeditationEdit from "../pages/meditation/MeditationEdit";
import BedtimeStoriesDetail from "../pages/bedtimeStories/BedtimeStoriesDetail";
import BedtimeStoriesUpload from "../pages/bedtimeStories/BedtimeStoriesUpload";
import BedtimeStoriesEdit from "../pages/bedtimeStories/BedtimeStoriesEdit";
import PromoCodeDetails from "../pages/promocodes/PromoCodeDetails";

export const normalRoutes = [
  {
    title: "Dashboard",
    url: "/",
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
    title: "Meditation Upload",
    url: "/meditation-upload",
    page: <GlobalLayout page={<MeditationUpload />} />,
  },

  {
    title: "Meditation",
    url: "/meditation-details/:id",
    page: <GlobalLayout page={<MeditationDetails />} />,
  },

  {
    title: "Meditation",
    url: "/meditation-edit/:id",
    page: <GlobalLayout page={<MeditationEdit />} />,
  },

  {
    title: "Bedtime Stories",
    url: "/bedtime-stories",
    page: <GlobalLayout page={<BedtimeStories />} />,
  },

  {
    title: "Bedtime Stories",
    url: "/bedtime-stories-details/:id",
    page: <GlobalLayout page={<BedtimeStoriesDetail />} />,
  },

  {
    title: "Bedtime Stories",
    url: "/upload-bedtime-stories",
    page: <GlobalLayout page={<BedtimeStoriesUpload />} />,
  },

  {
    title: "Bedtime Stories",
    url: "/bedtime-stories-edit/:id",
    page: <GlobalLayout page={<BedtimeStoriesEdit />} />,
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
    title: "promo-code-details",
    url: "/promo-code-details",
    page: <GlobalLayout page={<PromoCodeDetails />} />,
  },
];
