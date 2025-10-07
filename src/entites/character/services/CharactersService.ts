import type { CharactersRepository } from "../repository/types";
import { CharacterModel } from "@/entites/character/model/CharacterModel";

export class CharactersService {
  constructor(private readonly repository: CharactersRepository) {}

  async getCharacters(name?: string) {
    const { data } = await this.repository.getCharacters({
      options: { params: { name } },
    });

    return CharacterModel.mapDtoToCharacter(data);
  }
}
