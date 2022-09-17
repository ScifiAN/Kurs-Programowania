const mongodb = require('mongodb');
const bcrypt = require('bcryptjs');

const db = require('../data/database');

const ObjectId = mongodb.ObjectId;

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
        
        if (id){
            this.id = new ObjectId(id);
        }
    }

    async getUserWithSameEmail(){
        const existingUser = await db
        .getDb()
        .collection('users')
        .findOne({ email: this.Email });
        return existingUser
    }

    async existAlready (){
        const existingUser = await this.getUserWithSameEmail();
        if (existingUser){
            return true;
        } else {
            return false;
        }
    }

    async signup(){
        const hashedPassword = await bcrypt.hash(this.password,12);

        const result = await db.getDb().collection('users').insertOne({
            email:this.email,
            password:hashedPassword,
        });
        return result
    }

    async login(comparePassword){
        const passwordsAreEqual = await bcrypt.compare(
            this.password,
            comparePassword
        );
        return passwordsAreEqual;
    }

    async inserUser(user){
        const result = await db.getDb().collection('users').insertOne(user);
        return result
    }
}

module.exports = User;