import { Router } from 'express'
import { productRoutes } from './product/product.controller'
import { userRoutes } from './user/user.controller'

const router = Router()

router.use('/product', productRoutes )
router.use('/user', userRoutes )

export { router };