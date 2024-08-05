"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameModule = void 0;
const common_1 = require("@nestjs/common");
const attempt_controller_1 = require("../controller/attempt.controller");
const game_controller_1 = require("../controller/game.controller");
const attempt_service_1 = require("../service/attempt.service");
const game_service_1 = require("../service/game.service");
let GameModule = class GameModule {
};
exports.GameModule = GameModule;
exports.GameModule = GameModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [attempt_controller_1.AttemptController, game_controller_1.GameController],
        providers: [attempt_service_1.AttemptService, game_service_1.default],
    })
], GameModule);
//# sourceMappingURL=game.module.js.map