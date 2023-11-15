import prisma from "@/prisma";
import { connectToDB } from "@/utils"
import { NextResponse } from "next/server";

export const GET = async (req:Request) =>{
    try {
        await connectToDB();
        const transaction = await prisma.transaction.findMany();
        return NextResponse.json({transaction: transaction},{status: 200})
    } catch (error:any) {
        console.log(error)
        return NextResponse.json({error: error},{status: 400})
    }finally{
        await prisma.$disconnect()
    }
}

export const POST =async (req:Request) => {
    try {
        const {name , status, date, amount} = await req.json();

        await connectToDB();
        const resp = await prisma.transaction.create({data: {name,status, date, amount}});
    } catch (error:any) {
        console.log(error);
        return NextResponse.json({error: error},{status:400})
    }finally{
        await prisma.$disconnect();
    }
}