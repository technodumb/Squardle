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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttemptController = void 0;
const common_1 = require("@nestjs/common");
const attempt_dto_1 = require("../dto/attempt.dto");
const findOneParams_dto_1 = require("../dto/findOneParams.dto");
const attempt_service_1 = require("../service/attempt.service");
let AttemptController = class AttemptController {
    constructor(attemptService) {
        this.attemptService = attemptService;
    }
    getAttempt(params) {
        console.log(params.id);
        return this.attemptService.getAttempt(params.id);
    }
    createAttempt(params, attemptDto) {
        try {
            console.log(params.gameId);
            const response = this.attemptService.createAttempt(params.gameId, attemptDto);
            return {
                cellStatus: response,
            };
        }
        catch (e) {
            console.log(e.errors);
        }
    }
};
exports.AttemptController = AttemptController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], AttemptController.prototype, "getAttempt", null);
__decorate([
    (0, common_1.Post)(':gameId'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [findOneParams_dto_1.FindOneParams,
        attempt_dto_1.AttemptDto]),
    __metadata("design:returntype", void 0)
], AttemptController.prototype, "createAttempt", null);
exports.AttemptController = AttemptController = __decorate([
    (0, common_1.Controller)('attempt'),
    __metadata("design:paramtypes", [attempt_service_1.AttemptService])
], AttemptController);
//# sourceMappingURL=attempt.controller.js.map