import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('squardle_db', 'root', 'mysqlPassword', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

export default sequelize;
