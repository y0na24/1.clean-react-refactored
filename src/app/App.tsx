import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { createCharactersProvider } from "@/entites/character/provider/CharactersProvider";
import { CharactersService } from "@/entites/character/services/CharactersService";
import { CharacterApi } from "@/entites/character/repository/CharacterApi";
import { LocalStoragePersister } from "@/shared/storages/LocalStoragePersister";
import { CharactersFavoritesService } from "@/entites/character/services/CharactersFavoriteService";

const CharactersProvider = createCharactersProvider({
  charactersService: new CharactersService(new CharacterApi()),
  charactersFavoritesService: new CharactersFavoritesService(new LocalStoragePersister()),
});

export function App() {
  return (
    <CharactersProvider>
      <RouterProvider router={router} />
    </CharactersProvider>
  );
}
