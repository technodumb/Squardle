"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_db_1 = require("../db/sequelize.db");
class AbstractEntity extends sequelize_1.Model {
}
AbstractEntity.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        field: 'created_at',
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        field: 'updated_at',
    },
}, {
    sequelize: sequelize_db_1.default,
    modelName: 'AbstractEntity',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscored: true,
});
exports.default = AbstractEntity;
//# sourceMappingURL=abstract.entity.js.map