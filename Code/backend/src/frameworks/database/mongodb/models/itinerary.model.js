import mongoose from "mongoose";

const itinerarySchema = new mongoose.Schema({
    name: String,
    country: String,
    startDate: Date,
    endDate: Date,
    activities: [{
        fsq_id: String,
        name: String,
        hours_popular: [{
            close: Number,
            open: Number,
            day: Number
        }],
        photo: {
            id: String,
            prefix: String,
            suffix: String,
            createdAt: Number,
            width: Number,
            height: Number
        },
        categories: [{
            id: String,
            name: String,
            pluralName: String,
            shortName: String,
            icon: {
                prefix: String,
                suffix: String
            },
        }]
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const itineraryModel = mongoose.model('Itinerary', itinerarySchema);

export default itineraryModel;