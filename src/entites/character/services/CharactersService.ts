import type { CharactersRepository } from "../repository/types";
import { mapDtoToCharacter } from "../types";

export class CharactersService {
  constructor(private readonly repository: CharactersRepository) {}

  async getCharacters(name?: string) {
    const { data } = await this.repository.getCharacters({
      options: { params: { name } },
    });

    return mapDtoToCharacter(data);
  }
}
