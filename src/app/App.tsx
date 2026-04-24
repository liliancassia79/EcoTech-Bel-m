import { RouterProvider } from "react-router";
import { router } from "./routes";
import { EcoModeProvider } from "./contexts/EcoModeContext";

export default function App() {
  return (
    <EcoModeProvider>
      <RouterProvider router={router} />
    </EcoModeProvider>
  );
}