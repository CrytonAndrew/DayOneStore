import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import connectDB from "./config/db.js"
import {notFound, errorHandler} from "./middleware/errorMiddleware.js"
import productRoutes from "./routes/productRoutes.js"

import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"


dotenv.config()

connectDB() // Call the connect 

const app = express()

// A form of body parsing -> That allows us to access JSON body data
app.use(express.json())

app.get("/", (req, res) => {
    res.send("API up and running")
})

// Paypal client id
app.get("/api/config/paypal", (req, res) => res.send(process.env.PAYPAL_CLIENT_ID))

// Pointing the productRoutes 
app.use("/api/products", productRoutes)

// Pointing the userRoutes
app.use("/api/users", userRoutes)

// Pointing to the orderRoutes
app.use("/api/orders", orderRoutes)

// Error Middleware
app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.underline.bold)) 