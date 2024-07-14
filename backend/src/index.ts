import express, { Request, Response } from 'express'
import { sampleProducts } from './data'

const app = express()
app.get('/api/products', (req: Request, res: Response) => {
    res.json(sampleProducts)
})
const POST = 4000
app.listen(POST, () => {
    console.log(`server starts at http://localhost:${POST}`);
    
})