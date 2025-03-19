// Importamos la librería axios para realizar solicitudes HTTP
const axios = require("axios");

// Definimos la URL de la API donde se enviará la solicitud DELETE
const url =
  "https://ejercicio-apirest-nodejs.onrender.com/api/publication/new8ZFgmevkCTa10i9XR/comment/1";

// Realizamos una petición DELETE con axios para eliminar un comentario
axios
  .delete(url) // Enviamos la solicitud DELETE a la API
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
