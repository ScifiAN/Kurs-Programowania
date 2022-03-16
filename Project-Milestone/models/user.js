// email, password, isadmin, name, address

const bcrypt = require('bcryptjs');

const db = require('../data/database');

class User {
    constructor(email, password, username, address, postal, city) {
        this.email = email;
        this.password = password;
        this.username = username;
        this.address = {
            address: address,
            postal: postal,
            city: city
        };
    }

    getUserWithSameEmail(){
        return db.getDb().collection('users').findOne({email: this.email});
    }

    async existAlready(){
        const existingUser = await this.getUserWithSameEmail();
        if(existingUser){
            return true;
        } else {
            return false;
        }
    }

    async signup(){
        const hashedPassword = await bcrypt.hash(this.password, 12);
        await db.getDb().collection('users').insertOne({
            email: this.email,
            password: hashedPassword,
            username: this.username,
            address: this.address
        });
    }

    comparePassword(hashedPassword){
        return bcrypt.compare(this.password, hashedPassword)
    }
}

module.exports = User;