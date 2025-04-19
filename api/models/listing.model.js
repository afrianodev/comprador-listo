import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        adress: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        percentage: {
            type: Number,
            required: true
        },
        imageURLS: {
            type: Array,
        },
        userRef: {
            type: String,
            required: true
        }
    }, {timestamps: true}
)

const Listing = mongoose.model('Listing', listingSchema)

export default Listing;