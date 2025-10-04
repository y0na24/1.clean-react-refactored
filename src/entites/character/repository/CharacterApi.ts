import {
  httpClient,
  type ApiResponse,
  type RequestConfig,
} from "@/shared/api/HttpClient";
import { type CharactersDTO } from "@/shared/dto/characterDto";
import type { CharactersRepository } from "./types";

export class CharacterApi implements CharactersRepository {
  ENDPOINT = "character";

   getCharacters(config?: RequestConfig): ApiResponse<CharactersDTO> {
    return httpClient.get<CharactersDTO>(this.ENDPOINT, config?.options);
  }
}
