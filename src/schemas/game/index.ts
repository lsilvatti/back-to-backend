import joi from 'joi';
import { GamePlatforms, GameCurrentState } from 'src/types/index.js';

const currentYear = new Date(Date.now()).getFullYear();

const gameSchema = joi.object({
    title: joi.string().min(3).required().messages({
        'string.base': 'O título deve ser uma string',
        'string.empty': 'O título não pode ser vazio',
        'string.min': 'O título deve conter pelo menos 3 caracteres',
        'any.required': 'O título é obrigatório',
    }),
    year: joi.number().min(1958).max(currentYear).required().messages({
        'number.empty': 'O ano não pode ser vazio',
        'number.base': 'O ano deve ser um número',
        'number.valid': 'O ano deve ser um número valido',
        'number.min': 'O ano deve ser posterior a 1958',
        'number.max': 'O ano não pode ser no futuro',
        'any.required': 'O ano é obrigatório',
    }),
    platform: joi.string().valid(...Object.values(GamePlatforms)).required().messages({
        'string.base': 'A plataforma deve ser uma string',
        'string.empty': 'A plataforma não pode ser vazia',
        'any.required': 'A plataforma é obrigatória',
        'any.only': `A plataforma deve ser uma das seguintes: ${Object.values(GamePlatforms).join(', ')}`,
    }),
    status: joi.string().valid(...Object.values(GameCurrentState)).default(GameCurrentState.Backlog).optional().messages({
        'string.base': 'O status deve ser uma string',
        'any.only': `O status deve ser um dos seguintes: ${Object.values(GameCurrentState).join(', ')}`,
    }),
})

export default gameSchema;