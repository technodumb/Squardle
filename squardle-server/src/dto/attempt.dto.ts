import { IsNumberString, IsString } from 'class-validator';

export class AttemptDto {
  @IsString()
  attemptString: string;

  @IsNumberString()
  attemptedBy: string;
}
