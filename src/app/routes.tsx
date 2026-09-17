import { createBrowserRouter } from "react-router";
import Welcome from "./components/Welcome";
import SplashScreen from "./components/SplashScreen";
import Home from "./components/Home";
import Security from "./components/Security";
import Donations from "./components/Donations";
import DesignSystemDemo from "./components/DesignSystemDemo";
import AboutProject from "./components/AboutProject";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Welcome,
  },
  {
    path: "/splash",
    Component: SplashScreen,
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/about",
    Component: AboutProject,
  },
  {
    path: "/security",
    Component: Security,
  },
  {
    path: "/donations",
    Component: Donations,
  },
  {
    path: "/design-system",
    Component: DesignSystemDemo,
  },
]);
