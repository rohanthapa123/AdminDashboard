import mongoose, { Document, Model, Schema } from 'mongoose';

interface UserDocument extends Document {
    username: string;
    email: string;
    password: string;
    img?: string;
    isAdmin: string;
    isActive: string;
    phones?: string;
    address?: string;
}

const userSchema = new Schema<UserDocument>({
    username:{
        type: String,
        required: true,
        unique:true,
        min: 3,
        max: 20,
    },
    email:{
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type: String,
        required: true,
    },
    img:{
        type: String,
    },
    isAdmin:{
        type: String,
        default: "false",
    },
    isActive:{
        type: String,
        default: "true"
    },
    phones:{
        type: String,
    },
    address:{
        type: String,
    },

},{
    timestamps: true,
});

let UserModel: Model<UserDocument>;

export const initUserModel = () => {
    if(UserModel){
        return UserModel;
    }
    if (!mongoose.connection.readyState) {
        throw new Error('Database not connected');
    }


    UserModel = mongoose.model<UserDocument>('User', userSchema);
    return UserModel;
};

export const getUserModel = () => {
    if (!UserModel) {
        throw new Error('UserModel not initialized');
    }
    return UserModel;
};
interface ProductDocument extends Document {
    title: string;
    description: string;
    price: number;
    stock: number;
    img?: string;
    color?: string;
    size?: string;
}

const productSchema = new Schema<ProductDocument>({
    title:{
        type: String,
        required: true,
        unique:true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
        min: 0,
    },
    stock:{
        type: Number,
        required: true,
        min: 0,
    },
    img:{
        type: String,
    },

    color:{
        type: String,
    },
    size:{
        type: String,
    },

},{
    timestamps: true,
});

let ProductModel: Model<ProductDocument>;

export const initProductModel = () => {
    if(ProductModel){
        return ProductModel;
    }
    if (!mongoose.connection.readyState) {
        throw new Error('Database not connected');
    }

    ProductModel = mongoose.model<ProductDocument>('Product', productSchema);
};

export const getProductModel = () => {
    if (!ProductModel) {
        throw new Error('ProductModel not initialized');
    }
    return ProductModel;
};
