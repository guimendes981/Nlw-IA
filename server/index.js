import cors from "cors"
import express from "express"

import { download } from "./download.js"

const app = express() //criando app express
app.use(cors()) //habilitando cors

app.get("/summary/:id", (request, response) => {
  download(request.params.id)
  response.send("Id do vídeo" + request.params.id)
})

app.listen(3333, () => {
  console.log("Server started on port 3333!")
})
