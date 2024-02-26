import Task from '../models/task.js'

export const isTaskRepeated = async (task) => {
  const taskRepeated = await Task.findOne({task})
  if(taskRepeated) throw new Error(`La task -> ${task}, esta repetida`)
}