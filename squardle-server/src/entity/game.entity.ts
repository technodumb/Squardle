import sequelize from 'src/db/sequelize.db';
import AbstractEntity from './abstract.entity';
import { DataTypes } from 'sequelize';

class Game extends AbstractEntity {}
Game.init(
  {
    createdBy: {
      type: DataTypes.INTEGER,
      field: 'created_by',
    },
    gameWord: {
      type: DataTypes.STRING,
      field: 'game_word',
    },
  },
  {
    sequelize,
    modelName: 'Game',
  },
);

export default Game;
