import { Router } from "express";
const router = Router()

import * as productsCtrl from '../controllers/products.controller'
import {verifyToken} from '../middlewares/'



router.post('/', productsCtrl.createProduct)

router.get('/', productsCtrl.getProducts)

router.get('/:productId', productsCtrl.getProductById)

router.put('/:productId', productsCtrl.updateProductById)

router.delete('/', productsCtrl.deleteProductById)

export default router;
