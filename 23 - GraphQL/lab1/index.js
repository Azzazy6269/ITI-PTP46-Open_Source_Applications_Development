import "dotenv/config";
import express from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import connectDB from "./database/connection.js";
import schema from "./schema/schema.js";
import companyLoader from "./loader/loader.js";

const app =express();
app.use(cors());
app.use(express.json());

connectDB();


app.use('/graphql' , graphqlHTTP((req,res) =>{
    return {
        schema,
        graphiql:true,
        context:{
            companyLoader:companyLoader
        }
    }
}))

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

