import mongoose, { Document, Model, Schema } from 'mongoose';


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
