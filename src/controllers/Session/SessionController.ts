import { Body, Controller, HttpStatus, Post } from '@nestjs/common'
import { AppService } from 'src/services/app.service'
import { JoiPipe } from 'nestjs-joi'
import { LoginValidationDTO } from 'src/dtos/validation/LoginValidationDTO'
import { ResponseDTO } from 'src/dtos/ResponseDTO'

@Controller()
export class SessionController {
  constructor(private readonly appService: AppService) {}

  @Post('/login')
  async login(@Body(JoiPipe) loginDTO: LoginValidationDTO): Promise<ResponseDTO> {
    return new ResponseDTO(HttpStatus.OK, 'Login successfuly', {})
  }
}
