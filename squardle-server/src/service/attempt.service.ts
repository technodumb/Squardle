import { Injectable } from '@nestjs/common';
import Attempts from 'src/entity/attempts.entity';
import GameService from './game.service';

@Injectable()
export class AttemptService {
  constructor(private readonly gameService: GameService) {}
  getAttempt(id: number): string {
    // get the attempt by id
    Attempts.findOne({ where: { id: id } });
    return `Attempt no: ${id}`;
  }

  async createAttempt(gameId: number, body: any): Promise<number[]> {
    // create an attempt
    Attempts.create({
      gameId: gameId,
      attemptString: body.attemptString,
      attemptedBy: body.attemptedBy,
    });
    const word = await this.gameService.getWord(gameId);
    const response = word.split('').map(() => 0);
    const used = word.split('').map(() => false);
    for (let i = 0; i < word.length; i++) {
      if (word[i] === body.attemptString[i]) {
        response[i] = 2;
        used[i] = true;
      }
    }
    for (let i = 0; i < word.length; i++) {
      if (response[i] === 2) {
        continue;
      }
      //   abacd
      //   aabcd
      for (let j = 0; j < word.length; j++) {
        if (body.attemptString[i] === word[j] && !used[j]) {
          response[i] = 1;
          used[j] = true;
          break;
        }
      }
    }
    // .map((char, i) =>
    //   char === word[i] ? 2 : 0,
    // );

    return response;
  }
}
