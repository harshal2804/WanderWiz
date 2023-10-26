export default function userValidation(userSchema){
    userSchema.pre('save', async function(next){
        if(!this.name || !this.email || !this.password){
            throw new Error('Name, email and password are required');
        }
        next();
    });
}