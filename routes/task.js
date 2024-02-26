import Router from 'express'
import { check } from 'express-validator'
import { taskPut, tasksDelete, tasksGet, tasksPost } from '../controllers/task.js'
import { isTaskRepeated } from '../database/db-validators.js'
import { validarCampos } from '../middlewares/validar-campos.js'

export const router = Router()

router.get('/', tasksGet)

router.post('/', [
  check('task').custom(isTaskRepeated),
  validarCampos
], tasksPost)

router.put('/', taskPut)

router.delete('/', tasksDelete)
