import cors from "cors"
import express from "express"

const app = express() //criando app express
app.use(cors()) //habilitando cors

app.get("/summary", (request, response) => {
  response.send("Hello World! Test")
})

app.listen(3333, () => {
  console.log("Server started on port 3333!")
})
