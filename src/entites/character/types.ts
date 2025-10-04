import type { CharactersDTO } from "@/shared/dto/characterDto";

export interface Character {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  isFavorite: boolean;
}

export const mapDtoToCharacter = (
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
