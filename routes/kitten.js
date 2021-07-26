import { Router } from 'express'
const router = Router()
import * as kittenCtrl from '../controllers/kitten.js'

router.get('/kitten', kittenCtrl.index)
router.get('/kitten/:id', kittenCtrl.show)
router.post('/kitten', kittenCtrl.create)
router.put('/kitten/:id', kittenCtrl.update)
router.delete('/kitten/:id', kittenCtrl.delete)


export {
  router
}
