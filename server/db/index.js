const mongoose = require('mongoose');

const DB_USER =  "" || process.env.DB_USER  ;
const DB_HOST = "localhost:27017" || process.env.DB_HOST;
const DB_PASSWORD =  "" || process.env.DB_PASSWORD ;
const DB_NAME =  "Payapp" || process.env.DB_NAME;

mongoose.Promise = global.Promise;

let DB_URL = "";
 if (DB_USER === "") { 
    DB_URL = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
}else{
    DB_URL = `mongodb://${DB_HOST}/${DB_NAME}`;
}

mongoose.connect(DB_URL, {useNewUrlParser: true, useCreateIndex: true})
.then(() => {
    console.log('connected to database');
}).catch((err) => {
    console.log(`an error occurred: ${err}`);
});

module.exports = mongoose;