import { Schema, model } from 'mongoose';

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: "Product"
    }],
});

const Category = model('Category', CategorySchema);

export {
    Category
};
