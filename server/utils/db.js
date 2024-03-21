const mongoose=require("mongoose");
const URI=`enter your mongodb url`;

const connectDb = async () => {
    try {
        await mongoose.connect(URI, {
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