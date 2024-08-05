import { IsNumber, IsNumberString } from 'class-validator';

export class FindOneParams {
  @IsNumberString()
  gameId: number;
}
