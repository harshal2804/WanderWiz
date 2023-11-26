import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    id: Number,
    name: String,
    short_name: String,
    plural_name: String,
    icon: {
        prefix: String,
        suffix: String
    }
});

const placeSchema = new mongoose.Schema({
    fsq_id: String,
    email: String,
    website: String,
    categories: [categorySchema],
    description: String,
    hours: {
        display: String,
        is_local_holiday: Boolean,
        open_now: Boolean,
        regular: [
            {
                close: String,
                day: Number,
                open: String
            }
        ]
    },
    hours_popular: [
        {
            close: String,
            day: Number,
            open: String
        }
    ],
    location: {
        admin_region: String,
        country: String,
        cross_street: String,
        formatted_address: String,
        locality: String,
        post_town: String,
        postcode: String,
        region: String
    },
    name: String,
    popularity: Number,
    rating: Number,
    related_places: {
        children: [
            {
                fsq_id: String,
                categories: [categorySchema],
                name: String
            }
        ]
    },
    social_media: {
        facebook_id: String,
        instagram: String,
        twitter: String
    },
    stats: {
        total_photos: Number,
        total_ratings: Number,
        total_tips: Number
    },
    tel: String,
    timezone: String,
    photos: [
        {
            id: String,
            created_at: String,
            prefix: String,
            suffix: String,
            width: Number,
            height: Number,
        }
    ],
    tips: [
        {
            id: String,
            created_at: String,
            text: String,
            agree_count: Number,
            disagree_count: Number,
        }
    ]
});

const placeModel = mongoose.model('Place', placeSchema);

export default placeModel;
