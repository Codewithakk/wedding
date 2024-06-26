const mongoose=require("mongoose");
const URL=process.env.URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connection successful to DB");
    } catch (error) {
        console.error("Database connection failed:", error);
        process.exit(1); // Exit with error code 1
    }
};


module.exports=connectDb;