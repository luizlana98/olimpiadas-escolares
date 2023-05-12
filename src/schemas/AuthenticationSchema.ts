import * as Joi from 'joi'


export class AuthenticationSchema{
    static userName = Joi.string()
    static password = Joi.string()
}