"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const sequelize_db_1 = require("./db/sequelize.db");
const attempts_entity_1 = require("./entity/attempts.entity");
const game_entity_1 = require("./entity/game.entity");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors();
    try {
        await sequelize_db_1.default.authenticate();
        console.log('Connection has been established successfully.');
        await game_entity_1.default.sync();
        await attempts_entity_1.default.sync();
        console.log('All models were synchronized');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map