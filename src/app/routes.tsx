import { createBrowserRouter } from "react-router-dom";
import { CharactersPage } from "@/pages/CharactersPage";
import { FavoritesPage } from "@/pages/FavoritesPage";
import { ROUTES } from "@/shared/routes";
import { BaseLayout } from "./BaseLaoyut";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { index: true, element: <CharactersPage /> },
      { path: ROUTES.FAVORITES, element: <FavoritesPage /> },
    ],
  },
]);
