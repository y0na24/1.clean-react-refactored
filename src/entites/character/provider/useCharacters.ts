import { useState } from "react";
import type { CharactersService } from "../services/CharactersService";
import { useDebounceValue } from "@/shared/lib/hooks/useDebounceValue";
import { useAsync } from "@/shared/lib/hooks/useAsync";
import { useFavorites } from "./useFavorites";
import type { Character } from "../types";
import type { CharactersFavoritesService } from "../services/CharactersFavoriteService";

export const useCharacters = (
  charactersService: CharactersService,
  charactersFavoritesService: CharactersFavoritesService,
) => {
  const [query, setQuery] = useState("");
  const debouncedValue = useDebounceValue(query, 300);

  const {
    data: characters,
    isLoading: isCharactersLoading,
    isError: isCharactersError,
    setData,
  } = useAsync(
    () => charactersService.getCharacters(debouncedValue),
    [debouncedValue],
  );

  const setCharacters = (chars: Character[] | undefined) => {
    setData(chars);
  };

  const setSearchQuery = (value: string) => {
    setQuery(value);
  };

  const { toggleFavorite, clearFavorites, favoriteCharacters } = useFavorites(
    characters,
    setCharacters,
    charactersFavoritesService,
  );

  return {
    characters,
    setCharacters,
    favoriteCharacters,
    isCharactersLoading,
    isCharactersError,
    searchQuery: query,
    setSearchQuery,
    toggleFavorite,
    clearFavorites,
  };
};
