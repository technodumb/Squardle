"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_db_1 = require("../db/sequelize.db");
const abstract_entity_1 = require("./abstract.entity");
const sequelize_1 = require("sequelize");
const game_entity_1 = require("./game.entity");
class Attempts extends abstract_entity_1.default {
}
Attempts.init({
    attemptedBy: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'attempted_by',
        allowNull: false,
    },
    gameId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'game_id',
        allowNull: false,
    },
    attemptString: {
        type: sequelize_1.DataTypes.STRING,
        field: 'attempt_string',
        allowNull: false,
    },
}, { sequelize: sequelize_db_1.default, modelName: 'Attempts' });
game_entity_1.default.hasMany(Attempts, {
    foreignKey: 'gameId',
    as: 'attempts',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
Attempts.belongsTo(game_entity_1.default, {
    foreignKey: 'gameId',
});
exports.default = Attempts;
//# sourceMappingURL=attempts.entity.js.map