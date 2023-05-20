import * as Joi from 'joi'

export class EnvironmentSchema {
  static DATABASE_USER = Joi.string().required()
  static DATABASE_HOST = Joi.string().required()
  static DATABASE_PORT = Joi.string().required()
  static DATABASE_PASSWORD = Joi.string().required()
}
