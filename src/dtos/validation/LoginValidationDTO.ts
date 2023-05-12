import { JoiSchemaOptions, JoiSchema } from "nestjs-joi";
import { AuthenticationSchema } from "src/schemas/AuthenticationSchema";


@JoiSchemaOptions({allowUnknown:false})
export class LoginValidationDTO{
    @JoiSchema(AuthenticationSchema.userName.required())
    username: string
    @JoiSchema(AuthenticationSchema.password.required())
    password: string
}