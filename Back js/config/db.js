//connection to the database using mongoose orm 
const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        const connection = await mongoose.connect(
            "mongodb+srv://root:TrQQp@cluster0.ovanuhp.mongodb.net/?retryWrites=true&w=majority",{
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB connected in: ${url}`);

    }catch(error){
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;