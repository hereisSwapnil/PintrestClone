import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8080, () => {
            console.log("Server listening on port " + process.env.PORT || 8080);
        })
    })
    .catch((err) => {
        console.log("MONGODB Connection failed !! ", err);
    })