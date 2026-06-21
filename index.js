import express from "express";
import cors from "cors";
import morgan from "morgan";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

//MIDDLEWARES
app.use(cors()); //permite conexiones desde cualquier origen
app.use(express.json()); //permite recibir datos en formato JSON
app.use(morgan("dev")); //muestra en consola las peticiones realizadas al servidor
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(__dirname + "/public"); //muestra la ruta del directorio actual
app.use(express.static(__dirname + "/public")); //sirve archivos estáticos desde el directorio "public"

//ENDPOINTS
app.get("/api/saludo", (req, res) => {
  const comida = ["🍟", "🍕", "🍔", "🌭", "🥪"];
  res.json({ 
    message: "Hola desde el back 👋🏼",
    comida: comida 
});
});

app.get("/api/adios", (req, res) => {
  res.json({ message: "Adiós desde el back 👋🏼" });
});

console.log("El back ya escucha 🤩");

app.listen(PORT, () => {
  console.info(`Servidor corriendo en el puerto ${PORT}`);
});
