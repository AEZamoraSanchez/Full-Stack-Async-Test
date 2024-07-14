import { Router } from 'express'
import { productRoutes } from './controllers/product/product.controller'
import { userRoutes } from './controllers/user/user.controller'
import { authRoutes } from './controllers/auth/auth.controller'

const router = Router()

router.use('/product', productRoutes )
router.use('/user', userRoutes )
router.use('/auth', authRoutes)

export { router };