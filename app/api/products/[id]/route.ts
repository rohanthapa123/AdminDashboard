import { connectToDB } from "@/utils"
import prisma  from "@/prisma";
import { NextResponse } from "next/server";

export const GET =async (req:Request, {params}:{params:{id: string}}) => {
    try {
        await connectToDB();
        const products = await prisma.product.findFirst({where:{id : params.id}});    
        return NextResponse.json({products},{status:200 })

    } catch (error:any) {
        console.log(error)
        return NextResponse.json({error: error.message},{status:500})
    } finally{
        await prisma.$disconnect();
    }
}

export const PUT =async (req:Request, {params}:{params:{id: string}}) => {
    try {
        const {title, description, price ,img, stock, color, size} = await req.json();

        await connectToDB();

        const updatedProduct = await prisma.product.update({data:{title, description, price, img, stock, color, size}, where:{id: params.id}});
        return NextResponse.json({updatedProduct},{status:200 })

    } catch (error:any) {
        console.log(error)
        return NextResponse.json({error: error.message},{status:500})
    } finally{
        await prisma.$disconnect();
    }
}

export const DELETE =async (req:Request, {params}:{params:{id: string}}) => {
    try {

        await connectToDB();

        const deletedProduct = await prisma.product.delete({ where:{id: params.id}});
        return NextResponse.json({deletedProduct},{status:200 })

    } catch (error:any) {
        console.log(error)
        return NextResponse.json({error: error.message},{status:500})
    } finally{
        await prisma.$disconnect();
    }
}

