import { createBrowserRouter } from "react-router";
import SplashScreen from "./components/SplashScreen";
import Home from "./components/Home";
import Security from "./components/Security";
import Donations from "./components/Donations";
import DesignSystemDemo from "./components/DesignSystemDemo";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SplashScreen,
  },
  {
    path: "/home",
    Component: Home,
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
