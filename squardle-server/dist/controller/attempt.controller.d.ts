import { AttemptDto } from 'src/dto/attempt.dto';
import { FindOneParams } from 'src/dto/findOneParams.dto';
import { AttemptService } from 'src/service/attempt.service';
export declare class AttemptController {
    private readonly attemptService;
    constructor(attemptService: AttemptService);
    getAttempt(params: {
        id: number;
    }): string;
    createAttempt(params: FindOneParams, attemptDto: AttemptDto): {
        cellStatus: Promise<number[]>;
    };
}
