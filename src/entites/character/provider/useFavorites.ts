import { useEffect } from "react";
import { CharactersFavoritesService } from "../services/CharactersFavoriteService";
import { type Character } from "../types";

export function useFavorites(
  characters: Character[] | undefined,
  setCharacters: (chars: Character[] | undefined) => void,
  charactersFavoritesService: CharactersFavoritesService,
) {
  const toggleFavorite = (id: number) => {
    if (!characters) return;

    charactersFavoritesService.toggleFavorite(id);

    const updated = charactersFavoritesService.syncWithCharacters(characters);
    setCharacters(updated);
  };

  const clearFavorites = () => {
    if (!characters) return;

    charactersFavoritesService.clearFavorites();

    const updated = charactersFavoritesService.syncWithCharacters(characters);
    setCharacters(updated);
  };

  const syncFavorites = () => {
    if (!characters) return;
    const updated = charactersFavoritesService.syncWithCharacters(characters);
    setCharacters(updated);
  };

  const favoriteCharacters = characters?.filter((c) => c.isFavorite) ?? [];

  useEffect(() => {
    syncFavorites();
  }, [characters]);

  return {
    toggleFavorite,
    clearFavorites,
    syncFavorites,
    favoriteCharacters,
  };
}
