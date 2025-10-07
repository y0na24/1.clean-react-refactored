import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "../BaseLayout";
import { charactersRoutes } from "./charactersStore.routes";

export const setupApp = () => {
  const router = createBrowserRouter([
    {
      element: <BaseLayout />,
      children: [charactersRoutes],
    },
  ]);

  return router;
};
