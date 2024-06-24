import { Request, Response } from 'express'
import { HttpError } from '../models/httpError.js'
import { getAllTransactions } from '../models/transaction.js'

export const getTransactions = async (_req: Request, res: Response) => {
    try {
        const transactions = await getAllTransactions()
        return res.send(transactions)
    } catch (error) {
        throw new HttpError('failed to get transactions', 500)
    }
}
