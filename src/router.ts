import {Router} from 'express'
import { body, oneOf, validationResult } from "express-validator"
import { createProduct, deleteProduct, getOneProduct, getProducts } from './handlers/product'
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update'
import { handleInputErrors } from './modules/middleware'

const router = Router()
/*  put vs patch 
    put replaces the role data with what was sent, only the id remais the same 
    patch only update the properties sent */

/**
 * Product routes
 * */ 
router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name').isString(), handleInputErrors, (req, res) => {
  
})
router.post('/product', body('name').isString(), handleInputErrors, createProduct)
router.delete('/product/:id', deleteProduct)

/**
 * Update routes
 * */ 
router.get('/update', getUpdates)
router.get('/update/:id', getOneUpdate)
router.put('/update/:id', 
    body('title').optional(), 
    body('body').optional(), 
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
    body('version').optional(), 
    updateUpdate
)
router.post('/update', 
    body('title').exists().isString(),
    body('body').exists().isString(),
    createUpdate
)
router.delete('/update/:id', deleteUpdate)

/* * 
 * Update Point routes
 * */
router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})

router.put('/updatepoint/:id', 
  body('name').optional().isString(), 
  body('description').optional().isString(),
  () => {}
)

router.post('/updatepoint', 
  body('name').isString(), 
  body('description').isString(),
  body('updateId').exists().isString(),
  () => {}
)

router.delete('/updatepoint/:id', () => {})

export default router