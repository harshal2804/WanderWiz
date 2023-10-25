export default function mongoConnection(mongoose, MONGODB_URI){
    function connectToMongo(){
        mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Mongodb connection successfull"))
        .catch(err => console.log("Mongodb connection error: " , err));
    }
    return {
        connectToMongo
    }
}