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
    url: "",
    page: <Home />,
  },
  {
    title: "Dashboard",
    url: "users",
    page: <Users />,
  },
  {
    title: "User Profile",
    url: "users/user-detail/:id",
    page: <UserDetail />,
  },

  {
    title: "Meditation",
    url: "meditation",
    page: <Meditation />,
  },

  {
    title: "Meditation Upload",
    url: "meditation/meditation-upload",
    page: <MeditationUpload />,
  },

  {
    title: "Meditation",
    url: "meditation/meditation-details/:id",
    page: <MeditationDetails />,
  },

  {
    title: "Meditation",
    url: "meditation/meditation-edit/:id",
    page: <MeditationEdit />,
  },

  {
    title: "Bedtime Stories",
    url: "bedtime-stories",
    page: <BedtimeStories />,
  },

  {
    title: "Bedtime Stories",
    url: "bedtime-stories/bedtime-stories-details/:id",
    page: <BedtimeStoriesDetail />,
  },

  {
    title: "Bedtime Stories",
    url: "bedtime-stories/upload-bedtime-stories",
    page: <BedtimeStoriesUpload />,
  },

  {
    title: "Bedtime Stories",
    url: "bedtime-stories/bedtime-stories-edit/:id",
    page: <BedtimeStoriesEdit />,
  },

  {
    title: "Subscription",
    url: "subscription",
    page: <Subscription />,
  },

  {
    title: "Upcoming",
    url: "upcoming",
    page: <UpcomingStories />,
  },

  {
    title: "Subjects",
    url: "subjects",
    page: <Subject />,
  },

  {
    title: "Promo Codes",
    url: "promo-codes",
    page: <PromoCodes />,
  },

  {
    title: "promo-code-details",
    url: "promo-codes/promo-code-details",
    page: <PromoCodeDetails />,
  },

  {
    title: "Feedback",
    url: "feedback",
    page: <Feedback />,
  },

  {
    title: "Notifications",
    url: "notifications",
    page: <Notifications />,
  },
];
