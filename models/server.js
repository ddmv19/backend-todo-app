import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { router as taskRouter } from '../routes/task.js'
import { dbConnection } from '../database/config.js'

export default class Server {
  constructor() {
    this.app = express()
    this.port = process.env.PORT
    this.tasksPath = '/api/tasks'

    this.conectarDB()
    this.middlewares()
    this.routes()
  }
  
  async conectarDB() {
    await dbConnection()
  }

  routes() {
    this.app.use(this.tasksPath, taskRouter)
  }

  middlewares() {
    // Read & Parse JSON
    this.app.use(express.json())
    // Cors
    this.app.use(cors({
      origin: 'http://localhost:5173'
    }))
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server running at http://localhost:${this.port}`)
    })
  }
}