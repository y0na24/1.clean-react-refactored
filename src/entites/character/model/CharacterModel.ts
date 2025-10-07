import type { CharactersDTO } from "@/shared/dto/characterDto";
import type { Character } from "./types";

export class CharacterModel {
  constructor() {}

  syncCharacters(
    favoriteIds: Character["id"][],
    characters: Character[] | undefined,
  ) {
    if (!characters) return [];

    return characters.map((char) => ({
      ...char,
      isFavorite: favoriteIds.includes(char.id),
    }));
  }

  toggleCharacter(characters: Character[], id: Character["id"]) {
    return characters.map((character) =>
      character.id === id
        ? { ...character, isFavorite: !character.isFavorite }
        : character,
    );
  }

  clearCharacters(characters: Character[]) {
    return characters.map((character) => ({ ...character, isFavorite: false }));
  }

  getFavoriteCharacters(characters: Character[]) {
    return characters.filter((character) => character.isFavorite);
  }

  public static mapDtoToCharacter = (
    charactersDto: CharactersDTO,
  ): Character[] => {
    return charactersDto.results.map((result) => ({
      id: result.id,
      name: result.name,
      image: result.image,
      status: result.status,
      species: result.species,
      isFavorite: false,
    }));
  };
}
