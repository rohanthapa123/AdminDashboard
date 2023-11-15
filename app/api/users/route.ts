import { connectToDB } from "@/utils"
import prisma  from "@/prisma";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

export const GET =async (req:NextApiRequest) => {
    try {
        await connectToDB();
        const users = await prisma.user.findMany();
        return NextResponse.json({users},{status:200 })

    } catch (error:any) {
        console.log(error)
        return NextResponse.json({error: error.message},{status:500})
    } finally{
        await prisma.$disconnect();
    }
}


