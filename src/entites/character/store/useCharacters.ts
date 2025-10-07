import { useState } from "react";

import type { CharactersService } from "../services/CharactersService";
import { useDebounceValue } from "@/shared/lib/hooks/useDebounceValue";
import { useAsync } from "@/shared/lib/hooks/useAsync";
import { type Character } from "../model/types";
import { CharactersFavoritesService } from "../services/CharactersFavoriteService";
import { CharacterModel } from "../model/CharacterModel";

export const useCharacters = (
  charactersService: CharactersService,
  charactersFavoritesService: CharactersFavoritesService,
  characterModel: CharacterModel,
) => {
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounceValue(query, 300);

  const {
    data,
    isLoading: isCharactersLoading,
    isError: isCharactersError,
    setData,
  } = useAsync(
    () => charactersService.getCharacters(debouncedValue),
    [debouncedValue],
  );

  const characters = characterModel.syncCharacters(
    charactersFavoritesService.getFavoriteIds(),
    data,
  );

  const favoriteCharacters = characterModel.getFavoriteCharacters(characters);

  const setSearchQuery = (value: string) => {
    setQuery(value);
  };

  const toggleFavorite = (id: Character["id"]) => {
    charactersFavoritesService.toggleFavorite(id);

    const updated = characterModel.toggleCharacter(characters, id);

    setData(updated);
  };

  const clearFavorites = () => {
    charactersFavoritesService.clearFavorites();

    const updated = characterModel.clearCharacters(characters);

    setData(updated);
  };

  return {
    characters,
    favoriteCharacters,
    isCharactersLoading,
    isCharactersError,
    searchQuery: query,
    setSearchQuery,
    toggleFavorite,
    clearFavorites,
  };
};
