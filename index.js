import express from "express"
import cors from "cors"

const app = express();
const PORT = 3000;

//MIDDLEWARES
app.use(cors()) //permite conexiones desde cualquier origen
app.use(express.json()) //permite recibir datos en formato JSON

//ENDPOINTS

console.log("El back ya escucha 🤩")

app.listen(PORT, ()=>{console.info(`Servidor corriendo en el puerto ${PORT}`)})