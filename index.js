import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();
const PORT = 3000;

//MIDDLEWARES
app.use(cors()); //permite conexiones desde cualquier origen
app.use(express.json()); //permite recibir datos en formato JSON
app.use(morgan("dev")); //muestra en consola las peticiones realizadas al servidor

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
