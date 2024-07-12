import { Router } from 'express'
import { productRoutes } from './controllers/product/product.controller'
import { userRoutes } from './controllers/user/user.controller'

const router = Router()

router.use('/product', productRoutes )
router.use('/user', userRoutes )

export { router };