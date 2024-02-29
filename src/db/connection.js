import mongoose from "mongoose";

const URI = "mongodb+srv://admin:uMKBYXbkQo9SiV8O@mundogeekdbcluster.nxjhecy.mongodb.net/?retryWrites=true&w=majority&appName=MundoGeekDBCluster";
mongoose.connect(URI)
    .then(() => {
        console.log("Connection been successful");
    })
    .catch(e => console.log(e));