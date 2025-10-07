import type { ReactNode } from "react";
import { type Character } from "../model/types";
import { createStrictContext } from "@/shared/lib/helpers/createStrictContext";
import { useStrictContext } from "@/shared/lib/hooks/useStrictContext";
import { CharactersService } from "../services/CharactersService";
import { usePropsGroup } from "@/shared/lib/hooks/usePropsGroup";
import { useCharacters } from "./useCharacters";
import type { CharactersFavoritesService } from "../services/CharactersFavoriteService";
import type { CharacterModel } from "../model/CharacterModel";

type CharactersContextValue = {
  characters: Character[] | undefined;
  favoriteCharacters: Character[] | undefined;
  clearFavorites: () => void;
  toggleFavorite: (id: number) => void;
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  isCharactersLoading: boolean;
  isCharactersError: boolean;
};

const CharactersCtx = createStrictContext<CharactersContextValue>();
export const useCharactersCtx = () => useStrictContext(CharactersCtx);

type CharactersProviderDeps = {
  charactersService: CharactersService;
  charactersFavoritesService: CharactersFavoritesService;
  characterModel: CharacterModel;
};

export const createCharactersProvider = ({
  charactersService,
  charactersFavoritesService,
  characterModel,
}: CharactersProviderDeps) => {
  const CharactersProvider = ({ children }: { children: ReactNode }) => {
    const charactersValue = useCharacters(
      charactersService,
      charactersFavoritesService,
      characterModel,
    );

    const value = usePropsGroup<CharactersContextValue>(charactersValue);

    return (
      <CharactersCtx.Provider value={value}>{children}</CharactersCtx.Provider>
    );
  };

  return CharactersProvider;
};
