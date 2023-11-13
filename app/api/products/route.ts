import { connectToDB } from "@/utils"
import prisma  from "@/prisma";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

export const GET =async (req:NextApiRequest) => {
    try {
        let products;
        await connectToDB();
        // console.log(req)
        const query = req.url?.split('?')[1]?.split('=')[1]
        // console.log(query)

        if (query) {
              // Use Prisma's filter to perform a case-insensitive search on the product title
              products = await prisma.product.findMany({
                where: {
                  title: {
                    contains: query,
                    mode: 'insensitive', // Case-insensitive search
                  },
                },
              });
            } else {
              products = await prisma.product.findMany();
            }        
        return NextResponse.json({products},{status:200 })

    } catch (error:any) {
        console.log(error)
        return NextResponse.json({error: error.message},{status:500})
    } finally{
        await prisma.$disconnect();
    }
}
export const POST =async (req:Request) => {
    try {
        const {title, description, price ,img, stock, color, size} = await req.json();
        if(!title && !description && !price && !stock){
            return NextResponse.json({error: "Invalid Data"},{status: 422})
        }
        await connectToDB();
        const product = await prisma.product.create({data: {title, description, price, img, stock, color,size}});
        return NextResponse.json({product},{status:200 })

    } catch (error:any) {
        console.log(error)
        return NextResponse.json({error: error.message},{status:500})
    } finally{
        await prisma.$disconnect();
    }
}
