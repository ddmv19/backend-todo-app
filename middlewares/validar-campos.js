import { validationResult } from 'express-validator'

/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 * @param {Function} next 
 */
export const validarCampos = (req, res, next) => {
  const errors = validationResult(req)
  if(!errors.isEmpty()) return res.status(400).json(errors)

  next()
}

