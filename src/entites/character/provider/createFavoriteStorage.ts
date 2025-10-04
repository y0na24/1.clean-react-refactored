import { type PersistStorage } from "@/shared/storages/types";

export const createFavoritesStorage = <T extends number | string>(
  storage: PersistStorage,
  key: string,
) => {
  let favorites: T[] = storage.getItem(key) ?? [];

  const save = (next: T[]) => {
    favorites = next;
    storage.setItem(key, favorites);
  };

  return {
    get: (): T[] => favorites,
    add: (id: T) => {
      if (favorites.includes(id)) return favorites;
      const updated = [...favorites, id];
      save(updated);
      return updated;
    },
    remove: (id: T) => {
      const updated = favorites.filter((fId) => fId !== id);
      save(updated);
      return updated;
    },
    clear: () => {
      favorites = [];
      storage.removeItem(key);
    },
  };
};
