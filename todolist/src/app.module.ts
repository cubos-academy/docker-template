import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
     TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST_ENV,
      port: parseInt(process.env.PORT_ENV),
      username: process.env.USERNAME_ENV, 
      password: process.env.PASSWORD_ENV,
      database: process.env.DATABASE_ENV,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

