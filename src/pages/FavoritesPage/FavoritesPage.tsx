import { CharacterList } from "@/entites/character/ui/CharacterList";
import { useCharactersCtx } from "@/entites/character/store/CharactersProvider";
import { CharacterCard } from "@/entites/character/ui/CharacterCard";
import { Button } from "@/shared/ui/button";

export function FavoritesPage() {
  const { favoriteCharacters, toggleFavorite, clearFavorites } =
    useCharactersCtx();

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold">Favorites</h2>
      {favoriteCharacters && favoriteCharacters.length > 0 && (
        <>
          <Button onClick={clearFavorites} title="Clear all favorites">
            Clear all
          </Button>
          <CharacterList
            characters={favoriteCharacters}
            renderCharacter={(character) => (
              <CharacterCard
                character={character}
                isFavorite={character.isFavorite}
                onToggleFavorite={toggleFavorite}
              />
            )}
          />
        </>
      )}
    </div>
  );
}
