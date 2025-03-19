// Importamos la librería axios para realizar solicitudes HTTP
const axios = require("axios");

// Definimos la URL de la API donde se enviará la solicitud POST
const url = "https://ejercicio-apirest-nodejs.onrender.com/api/publication";

// Definimos los datos que se enviarán en la solicitud POST
const data = {
  comentarios: [], // Lista de comentarios (inicialmente vacía)
  author: "Ismael Espericueta", // Nombre del autor de la publicación
  title: "Uso de la IA en el sistema educativo", // Título de la publicación
  content: "IA asistida en las aulas", // Contenido de la publicación
  datePub: "2025-03-20T03:58:46.273Z", // Fecha de publicación en formato ISO 8601
  popularidad: 0, // Nivel de popularidad de la publicación (inicialmente en 0)
};

// Realizamos una petición POST con axios para enviar la publicación
axios
  .post(url, data) // Enviamos los datos a la API
  .then((response) => {
    // Si la solicitud es exitosa, mostramos la respuesta de la API
    console.log("Datos recibidos: ", JSON.stringify(response.data, null, 2));
  })
  .catch((error) => {
    // Si ocurre un error, verificamos si hay una respuesta del servidor
    if (error.response) {
      console.error(error.response.data); // Mostramos el mensaje de error devuelto por la API
    } else {
      // Si no hay respuesta del servidor, mostramos el mensaje de error general
      console.error("Error al enviar la solicitud: ", error.message);
    }
  });
