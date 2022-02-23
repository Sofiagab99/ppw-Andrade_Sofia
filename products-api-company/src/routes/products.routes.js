import { Router } from "express";
const router = Router()

import * as productsCtrl from '../controllers/products.controller'
import {authjwt} from '../middlewares/'


router.post('/', [authjwt.verifyToken, authjwt.isModerator], productsCtrl.createProduct);

router.get('/', productsCtrl.getProducts)

router.get('/:productId', productsCtrl.getProductById)

router.put('/:productId', authjwt.verifyToken, productsCtrl.updateProductById)

router.delete('/', [authjwt.verifyToken, authjwt.isModerator], productsCtrl.deleteProductById)

export default router;
