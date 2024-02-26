import { Schema, model } from 'mongoose'

const TaskSchema = Schema({
  task: {
    type: String,
    required: [true, 'Task is required'],
    uniqued: true,
  },
  state: {
    type: String,
    enum: ['Not Started', 'Completed', 'Archived', 'In Progress'],
    default: 'Not Started',
  },
  priority: {
    type: String,
    enum: ['High', 'Media', 'Low'],
    default: 'Media',
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  deleted: {
    type: Boolean,
    default: false,
  }
})

TaskSchema.methods.toJSON = function() {
  const { __v, _id, ...task } = this.toObject()
  return task
}

export default model('Task', TaskSchema)