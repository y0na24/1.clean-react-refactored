import { createCharactersProvider } from "@/entites/character/store/CharactersProvider";
import { CharactersService } from "@/entites/character/services/CharactersService";
import { CharacterApi } from "@/entites/character/repository/CharacterApi";
import { LocalStoragePersister } from "@/shared/storages/LocalStoragePersister";
import { CharactersFavoritesService } from "@/entites/character/services/CharactersFavoriteService";
import { CharacterModel } from "@/entites/character/model/CharacterModel";
import { ROUTES } from "@/shared/routes";
import { Outlet, type RouteObject } from "react-router-dom";
import { CharactersPage } from "@/pages/CharactersPage";
import { FavoritesPage } from "@/pages/FavoritesPage";

const CharactersProvider = createCharactersProvider({
  charactersService: new CharactersService(new CharacterApi()),
  charactersFavoritesService: new CharactersFavoritesService(
    new LocalStoragePersister(),
  ),
  characterModel: new CharacterModel(),
});

export const charactersRoutes: RouteObject = {
  path: ROUTES.HOME,
  element: (
    <CharactersProvider>
      <Outlet />
    </CharactersProvider>
  ),
  children: [
    { index: true, element: <CharactersPage /> },
    { path: ROUTES.FAVORITES, element: <FavoritesPage /> },
  ],
};
