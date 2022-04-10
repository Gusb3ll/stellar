import { Router } from 'express'

import stellar from '../../objects/stellar'

const testRouter = Router()

testRouter.get('/', (req, res) => {
  try {
    res.status(200).json({ Status: 'STELLAR TEST ENDPOINT OK', created: Date.now().toString(), version: '1.0.0' })
  }
  catch {
    res.status(500).json({ Status: 'STELLAR TEST ENDPOINT FAILURE', created: Date.now().toString(), version: '1.0.0' })
  }
})

testRouter.get('/test', async(req, res) => {
  return res.json(await stellar.test())
})

export default testRouter
