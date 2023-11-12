import { getProductModel, initProductModel } from "./product.models";
import { getUserModel, initUserModel } from "./user.model";
import connectToDB from "./utils";

export const fetchUsers = async () =>{
    try {
        await connectToDB();
        await initUserModel();
        const User =  getUserModel()
        const users = await User.find()
        return users
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch users!");
    }
}
export const fetchProducts = async () =>{
    try {
        await connectToDB();
        await initProductModel();
        const Product =  getProductModel()
        const users = await Product.find()
        return users
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch Product!");
    }
}