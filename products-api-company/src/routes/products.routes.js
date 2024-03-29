import { Router } from "express";
const router = Router()

import * as productsCtrl from '../controllers/products.controller'
import {authjwt} from '../middlewares/'


router.post('/', [authjwt.verifyToken, authjwt.isModerator], productsCtrl.createProduct);

router.get('/', productsCtrl.getProducts)

router.get('/:productId', productsCtrl.getProductById)

router.put('/:productId', [authjwt.verifyToken, authjwt.isAdmin], productsCtrl.updateProductById)

router.delete('/', [authjwt.verifyToken, authjwt.isAdmin], productsCtrl.deleteProductById)

export default router;
