"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttemptService = void 0;
const common_1 = require("@nestjs/common");
const attempts_entity_1 = require("../entity/attempts.entity");
const game_service_1 = require("./game.service");
let AttemptService = class AttemptService {
    constructor(gameService) {
        this.gameService = gameService;
    }
    getAttempt(id) {
        attempts_entity_1.default.findOne({ where: { id: id } });
        return `Attempt no: ${id}`;
    }
    async createAttempt(gameId, body) {
        attempts_entity_1.default.create({
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
            for (let j = 0; j < word.length; j++) {
                if (body.attemptString[i] === word[j] && !used[j]) {
                    response[i] = 1;
                    used[j] = true;
                    break;
                }
            }
        }
        return response;
    }
};
exports.AttemptService = AttemptService;
exports.AttemptService = AttemptService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [game_service_1.default])
], AttemptService);
//# sourceMappingURL=attempt.service.js.map