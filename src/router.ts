import {Router} from 'express'

const router = Router()
/*  put vs patch 
    put replaces the role data with what was sent, only the id remais the same 
    patch only update the properties sent */

// Product routes
router.get('/product', (req,res) => {
    res.json({message:'products list'})
})
router.get('/product/:id', () => {})
router.put('/product/:id', () => {})
router.post('/product', () => {})
router.delete('/product/:id', () => {})

// Update routes
router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id', () => {})
router.post('/update', () => {})
router.delete('/update/:id', () => {})

// Update Point routes
router.get('/updatepoint', () => {})
router.get('/updatepoint/:id', () => {})
router.put('/updatepoint/:id', () => {})
router.post('/updatepoint', () => {})
router.delete('/updatepoint/:id', () => {})

export default router