import { Body, Controller, Post } from '@nestjs/common'
import { AppService } from 'src/services/app.service'
import {JoiPipe}from 'nestjs-joi'
import { LoginValidationDTO } from 'src/dtos/validation/LoginValidationDTO'


@Controller()
export class SessionController {
  constructor(private readonly appService: AppService) {}

  @Post('/login')
  login(@Body(JoiPipe) loginDTO: LoginValidationDTO ): string {
    console.log(loginDTO)
    return 'Logado'
  }
}
