import { Schema, model } from 'mongoose';

const ProdutoSchema = new Schema({
    url: {
        type: String,
        required: false,
    },
    category: {
        type: String,
        required: true,
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
    }
});

ProdutoSchema.index({ category: 1, name: 1 }, { unique: true });

const Product = model('Product', ProdutoSchema);

export {
    Product
};
