import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AttemptDto } from 'src/dto/attempt.dto';
import { FindOneParams } from 'src/dto/findOneParams.dto';
import { AttemptService } from 'src/service/attempt.service';

@Controller('attempt')
export class AttemptController {
  constructor(private readonly attemptService: AttemptService) {}

  @Get(':id')
  getAttempt(@Param() params: { id: number }): string {
    // get the attempt by id
    console.log(params.id);
    // return 'Attempt no: ' + params.id;
    return this.attemptService.getAttempt(params.id);
  }

  @Post(':gameId')
  createAttempt(
    @Param() params: FindOneParams,
    @Body() attemptDto: AttemptDto,
  ) {
    try {
      console.log(params.gameId);
      const response = this.attemptService.createAttempt(
        params.gameId,
        attemptDto,
      );

      return {
        cellStatus: response,
      };
    } catch (e) {
      console.log(e.errors);
    }
    // create an attempt
  }
}
