import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.BACKEND_PORT);
  await app.listen(process.env.BACKEND_PORT);
}
bootstrap();
