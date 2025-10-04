import type { Character } from "@/entites/character/types";
import { createStrictContext } from "@/shared/lib/helpers/createStrictContext";
import { useStrictContext } from "@/shared/lib/hooks/useStrictContext";

export type CharactersCatalogDeps = {
   characters: Character[] | undefined;
   setCharacters: (chars: Character[] | undefined) => void;
   toggleFavorite: (id: number) => void;
   isCharactersLoading: boolean;
   isCharactersError: boolean;
   searchQuery: string;
   setSearchQuery: (value: string) => void;
}

export const charactersCatalogInjector = createStrictContext<CharactersCatalogDeps>();
export const useDi = () => useStrictContext(charactersCatalogInjector)
