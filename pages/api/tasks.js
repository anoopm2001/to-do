import dbConnect from '../../lib/dbConnect'
import Task from '../../models/Task'

export default async function handler(req, res) {
  const { method } = req
  console.log(req.body)
  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const users = await Task.find({})
        res.status(200).json({ taskName: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const user = await Task.create(req.body)
        res.status(201).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}
