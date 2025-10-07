import { RouterProvider } from "react-router-dom";
import { setupApp } from "./compositionRoot/setupApp";

const router = setupApp();

export function App() {
  return <RouterProvider router={router} />;
}
