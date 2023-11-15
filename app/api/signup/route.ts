import { connectToDB } from "@/utils"
import prisma  from "@/prisma";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export const POST =async (req:Request) => {
    try {
        const {name,username, email, password ,isActive, isAdmin,phones,  address} = await req.json();
        if(!name && !username && !email && !password){
            return NextResponse.json({error: "Invalid Data"},{status: 422})
        }
        await connectToDB();
        const existingUser = await prisma.user.findFirst({where:{email}});
        if(existingUser) return NextResponse.json({message: "user already registered, please login"},{status: 403});
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({data: {name ,username, email, password:hashedPassword, isAdmin , isActive , phones, address}});
        return NextResponse.json({user},{status:200 })

    } catch (error:any) {
        console.log(error)
        return NextResponse.json({error: error.message},{status:500})
    } finally{
        await prisma.$disconnect();
    }
}