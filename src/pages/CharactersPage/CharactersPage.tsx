import { useCharactersCtx } from "@/entites/character/store/CharactersProvider";
import { CharactersCatalogFeature } from "@/features/charactersCatalogFeature/CharactersCatalogFeature";
import {
  charactersCatalogInjector,
  type CharactersCatalogDeps,
} from "@/features/charactersCatalogFeature/di";

export function CharactersPage() {
  const {
    characters,
    searchQuery,
    setSearchQuery,
    isCharactersError,
    isCharactersLoading,
    toggleFavorite,
  } = useCharactersCtx();

  const deps: CharactersCatalogDeps = {
    characters,
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
