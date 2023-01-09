import {Request, Response} from 'express'

function echoTest(req: Request, res: Response) {
  return res.status(200).send(req.body)
}

export { echoTest }
