import express from "express"

const app = express();
const PORT = 3000;

console.log("El back ya escucha 🤩")

app.listen(PORT, ()=>{console.info(`Servidor corriendo en el puerto ${PORT}`)})