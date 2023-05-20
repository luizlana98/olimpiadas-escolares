import { Module } from '@nestjs/common'
import { AppController } from 'src/controllers/app.controller'
import { AppService } from 'src/services/app.service'
import { SessionController } from '../controllers/Session/SessionController'
import { DatabaseModule } from './DatabaseModule'

@Module({
  imports: [DatabaseModule],
  controllers: [AppController, SessionController],
  providers: [AppService],
})
export class AppModule {}
