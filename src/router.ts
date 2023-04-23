import {Router} from 'express'
import { body, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from './modules/middleware';

const router = Router()
/*  put vs patch 
    put replaces the role data with what was sent, only the id remais the same 
    patch only update the properties sent */

// Product routes
router.get('/product', (req,res) => {
    res.json({message:'products list'})
})

router.get('/product/:id', () => {

})
//req.body which is an object, should have a string field called 'name'
router.put('/product/:id', body('name').isString(),handleInputErrors,(req, res) => {
    
})

router.post('/product', body('name').isString(),handleInputErrors,(req, res) => {

})

router.delete('/product/:id', () => {

})

// Update routes
router.get('/update', () => {})

router.get('/update/:id', () => {})

router.put('/update/:id', 
    body('title').optional(), 
    body('body').optional(), 
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
    body('version').optional(), 
    () => {}
)

router.post('/update', 
    body('title').exists().isString(),
    body('body').exists().isString(),
    () => {}
)

router.delete('/update/:id', () => {})

// Update Point routes
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