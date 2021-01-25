import {NextApiRequest, NextApiResponse} from 'next'

export default function getById(req: NextApiRequest, res: NextApiResponse) {
  // res.statusCode = 200
  // res.setHeader('Content-Type', 'application/json')
  // res.end(req.query.id)

  res.json({
    method: JSON.stringify(req.method),
    req: JSON.stringify(req.body),
    yourId: req.query.id
  })
}
