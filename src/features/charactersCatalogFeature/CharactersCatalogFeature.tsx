import { CharacterCard } from "@/entites/character/ui/CharacterCard";
import { CharacterList } from "@/entites/character/ui/CharacterList";
import { Input } from "@/shared/ui/input";
import { Spinner } from "@/shared/ui/spinner";
import { useDi } from "./di";

export function CharactersCatalogFeature() {
  const {searchQuery, setSearchQuery, isCharactersError, isCharactersLoading, characters, toggleFavorite} = useDi()
  
  return (
    <div className="p-4 mb-4">
      <Input
        placeholder="Find character by name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {isCharactersLoading && (
        <Spinner className="flex justify-center mx-auto mt-5" />
      )}

      {!isCharactersError && characters ? (
        <CharacterList
          characters={characters}
          renderCharacter={(character) => (
            <CharacterCard
              character={character}
              isFavorite={character.isFavorite}
              onToggleFavorite={toggleFavorite}
            />
          )}
        />
      ) : (
        <div className="text-sm text-muted-foreground mt-4">
          Таких персонажей нет
        </div>
      )}
    </div>
  );
}
