import { Module } from '@nestjs/common';
import { AttemptController } from 'src/controller/attempt.controller';
import { GameController } from 'src/controller/game.controller';
import { AttemptService } from 'src/service/attempt.service';
import GameService from 'src/service/game.service';

@Module({
  imports: [],
  controllers: [AttemptController, GameController],
  providers: [AttemptService, GameService],
})
export class GameModule {}
