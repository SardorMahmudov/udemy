'use server'
import { connectToDatabase } from '@/lib/mongoose'
import { ICreateUser } from './types'

export const createUser = async (data: ICreateUser) => {
	try {
		await connectToDatabase()
		const isExist = await User
	} catch (error) {
		throw new Error('Error creating user. Please try again')
	}
}
