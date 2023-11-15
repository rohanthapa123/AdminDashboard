import prisma from "@/prisma";
import { connectToDB } from "@/utils";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export const DELETE = async (req:Request, {params}:{params:{id: string}}) => {
    try {
        await connectToDB();
        const user = await prisma.user.delete({where:{id:params.id}});
        return NextResponse.json({deletedUser: user},{status: 200})
    } catch (error:any) {
        return NextResponse.json({message:error},{status: 400})
    }finally{
        await prisma.$disconnect()
    }
}