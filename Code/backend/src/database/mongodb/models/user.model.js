import mongoose from 'mongoose';
import userValidation from 'middlewares/userValidation';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    currentCity: String,
    itineraries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Itinerary'
    }]
});

userValidation(userSchema);

const userModel = mongoose.model('User', userSchema);

export default userModel;