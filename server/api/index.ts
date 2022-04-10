import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'

import testRouter from './routes/v1/test'

const app = express()

app.use(express.json())
app.use(compression())
app.use(cookieParser())

app.use('/v1/test', testRouter)

app.use((req, res) => {
  try {
    res.status(200).json({ Status: 'STELLAR API OK', created: Date.now().toString(), version: '1.0.0' })
  }
  catch {
    res.status(500).json({ Status: 'STELLAR API FAILURE', created: Date.now().toString(), version: '1.0.0' })
  }
})

export default app
