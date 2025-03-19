// Importamos la librería axios para realizar solicitudes HTTP
const axios = require("axios");

// Definimos la URL de la API donde se enviará la solicitud GET para obtener las publicaciones populares
const url =
  "https://ejercicio-apirest-nodejs.onrender.com/api/publication/trends/popular";

// Realizamos una petición GET con axios para obtener las publicaciones más populares
axios
  .get(url) // Enviamos la solicitud GET a la API
  .then((response) => {
    // Si la solicitud es exitosa, mostramos la respuesta de la API en formato JSON
    console.log("Datos recibidos: ", JSON.stringify(response.data, null, 2));
  })
  .catch((error) => {
    // Si ocurre un error, verificamos si hay una respuesta del servidor
    if (error.response) {
      console.error(error.response.data); // Mostramos el mensaje de error devuelto por la API
    } else {
      // Si no hay respuesta del servidor, mostramos un mensaje de error general
      console.error("Error al enviar la solicitud: ", error.message);
    }
  });
