import * as dotenv from 'dotenv' 
import express from 'express'
import { mainRoute } from './routes/main.route'

dotenv.config()

const app = express()
app.use(express.json())

app.use('/', mainRoute)

app.listen(process.env.PORT, () => {
  console.log(`[INFO] API gateway started on port -> ${process.env.PORT}`)
})
