import { Injectable } from '@nestjs/common';
import Game from 'src/entity/game.entity';

@Injectable()
class GameService {
  async getWord(gameId: number): Promise<string> {
    // throw new Error('Method not implemented.');
    const game: Game = await Game.findOne({ where: { id: gameId } });
    return game.dataValues.gameWord;
  }
  constructor() {}

  getHello(): string {
    return 'Hello World!';
  }
}

export default GameService;
