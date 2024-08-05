import sequelize from 'src/db/sequelize.db';
import AbstractEntity from './abstract.entity';
import { DataTypes } from 'sequelize';
import Game from './game.entity';

class Attempts extends AbstractEntity {}

Attempts.init(
  {
    attemptedBy: {
      type: DataTypes.INTEGER,
      field: 'attempted_by',
      allowNull: false,
    },
    gameId: {
      type: DataTypes.INTEGER,
      field: 'game_id',
      allowNull: false,
    },
    attemptString: {
      type: DataTypes.STRING,
      field: 'attempt_string',
      allowNull: false,
    },
  },
  { sequelize, modelName: 'Attempts' },
);

Game.hasMany(Attempts, {
  foreignKey: 'gameId',
  as: 'attempts',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Attempts.belongsTo(Game, {
  foreignKey: 'gameId',
});

export default Attempts;
