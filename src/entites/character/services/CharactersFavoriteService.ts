// CharactersFavoritesService.ts
import { type PersistStorage } from "@/shared/storages/types";
import { type Character } from "../types";
import { createFavoritesStorage } from "../provider/createFavoriteStorage";

const FAVORITES_KEY = "favorite-characters";

export class CharactersFavoritesService {
  private storage: ReturnType<typeof createFavoritesStorage<number>>;

  constructor(persistStorage: PersistStorage) {
    this.storage = createFavoritesStorage<number>(persistStorage, FAVORITES_KEY);
  }

  getFavoriteIds(): number[] {
    return this.storage.get();
  }

  toggleFavorite(id: number): void {
    const ids = this.storage.get();
    if (ids.includes(id)) {
      this.storage.remove(id);
    } else {
      this.storage.add(id);
    }
  }

  clearFavorites(): void {
    this.storage.clear();
  }

  syncWithCharacters(characters: Character[]): Character[] {
    const ids = this.getFavoriteIds();
    return characters.map((char) => ({
      ...char,
      isFavorite: ids.includes(char.id),
    }));
  }
}
