import { Schema, model } from 'mongoose';

const ProdutSchema = new Schema({
    url: {
        type: String,
        required: false,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
});

ProdutSchema.index({ category: 1, name: 1 }, { unique: true });

const Product = model('Product', ProdutSchema);

export {
    Product
};
