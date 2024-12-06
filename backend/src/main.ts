import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 全リクエストに対してバリデーションを適用
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: '*', //Next.jsからGraphQLサーバーにアクセスできるようにする
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
