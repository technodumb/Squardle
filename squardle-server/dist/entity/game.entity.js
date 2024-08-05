"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_db_1 = require("../db/sequelize.db");
const abstract_entity_1 = require("./abstract.entity");
const sequelize_1 = require("sequelize");
class Game extends abstract_entity_1.default {
}
Game.init({
    createdBy: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'created_by',
    },
    gameWord: {
        type: sequelize_1.DataTypes.STRING,
        field: 'game_word',
    },
}, {
    sequelize: sequelize_db_1.default,
    modelName: 'Game',
});
exports.default = Game;
//# sourceMappingURL=game.entity.js.map