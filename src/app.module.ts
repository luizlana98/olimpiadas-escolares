import { Module } from '@nestjs/common'
import { AppController } from 'src/controllers/app.controller'
import { AppService } from 'src/services/app.service'
import { SessionController } from './controllers/Session/SessionController'

@Module({
  imports: [],
  controllers: [AppController, SessionController],
  providers: [AppService],
})
export class AppModule {}
