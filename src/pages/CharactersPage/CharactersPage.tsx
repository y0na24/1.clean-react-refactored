import { useCharactersCtx } from "@/entites/character/provider/CharactersProvider";
import { CharactersCatalogFeature } from "@/features/charactersCatalogFeature/CharactersCatalogFeature";
import {
  charactersCatalogInjector,
  type CharactersCatalogDeps,
} from "@/features/charactersCatalogFeature/di";

export function CharactersPage() {
  const {
    characters,
    setCharacters,
    searchQuery,
    setSearchQuery,
    isCharactersError,
    isCharactersLoading,
    toggleFavorite,
  } = useCharactersCtx();

  const deps: CharactersCatalogDeps = {
    characters,
    setCharacters,
    isCharactersError,
    isCharactersLoading,
    toggleFavorite,
    searchQuery,
    setSearchQuery,
  };

  return (
    <charactersCatalogInjector.Provider value={deps}>
      <CharactersCatalogFeature />
    </charactersCatalogInjector.Provider>
  );
}
