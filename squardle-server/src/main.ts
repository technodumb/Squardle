import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import sequelize from './db/sequelize.db';
import Attempts from './entity/attempts.entity';
import Game from './entity/game.entity';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  // authenticate db connection
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await Game.sync();
    await Attempts.sync();
    // await Game.sync({ force: true });
    // await Attempts.sync({ force: true });
    console.log('All models were synchronized');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  await app.listen(3000);
}
bootstrap();
