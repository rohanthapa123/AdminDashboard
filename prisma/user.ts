import { PrismaClient } from '@prisma/client/edge'
import { ObjectId } from 'mongodb';
const prisma = new PrismaClient()

export const createUser = async (username:string, email:string, password:string) =>{
    const user = await prisma.user.create({
        data:{
            username,
            email,
            password
        }
    });
    return user;
}
export const getUsers = async () =>{
    const users = await prisma.user.findMany();
    return users;
}
export const deleteUser = async (id: string) =>{
    const users = await prisma.user.delete({
        where:{
            id: id,
        }
    });
    return users;
}

