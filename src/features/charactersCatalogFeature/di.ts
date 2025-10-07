import { type Character } from "@/entites/character/model/types";
import { createStrictContext } from "@/shared/lib/helpers/createStrictContext";
import { useStrictContext } from "@/shared/lib/hooks/useStrictContext";

export type CharactersCatalogDeps = {
   characters: Character[] | undefined;
   toggleFavorite: (id: number) => void;
   isCharactersLoading: boolean;
   isCharactersError: boolean;
   searchQuery: string;
   setSearchQuery: (value: string) => void;
}

export const charactersCatalogInjector = createStrictContext<CharactersCatalogDeps>();
export const useDi = () => useStrictContext(charactersCatalogInjector)
