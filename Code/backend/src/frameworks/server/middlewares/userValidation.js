export default function userValidation(userSchema){
    userSchema.pre('save', async function(next){
        if(!this.name || !this.email || !this.password || !this.currentCity){
            throw new Error('Please fill the required fields');
        }
        next();
    });
}