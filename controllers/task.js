import Task from '../models/task.js'

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const tasksGet = async (req, res) => {
  const query = { deleted: false }
  const [total, tasks] = await Promise.all([
    Task.countDocuments(query),
    Task.find(query),
  ])
  
  res.json({
    total,
    tasks
  })
}

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const tasksPost = async (req, res) => {
  const { task } = req.body
  const newTask = new Task({task})
  await newTask.save()
  res.json({
    newTask,
  })
}

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const taskPut = async (req, res) => {
  const { task, deleted, createdAt, ...resto } = req.body
  const { _id } = await Task.findOne({task})
  const taskUpdated = await Task.findByIdAndUpdate(_id, resto)
  res.json({
    taskUpdated
  })
}

/**
 *
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 */
export const tasksDelete = async (req, res) => {
  const { task } = req.body

  const { _id } = await Task.findOne({task})
  const deletedTask = await Task.findByIdAndDelete(_id)
  res.json({
    deletedTask,
  })
}
