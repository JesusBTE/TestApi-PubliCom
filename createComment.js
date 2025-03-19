// Importamos la librería axios para realizar solicitudes HTTP
const axios = require("axios");

// Definimos la URL de la API a la que enviaremos la solicitud POST
const url =
  "https://ejercicio-apirest-nodejs.onrender.com/api/publication/new8ZFgmevkCTa10i9XR/comment";

// Definimos los datos que se enviarán en la solicitud POST
const data = {
  user: "Alberto", // Nombre del usuario que comenta
  content: "Me gusto mucho tu publicación", // Contenido del comentario
};

// Realizamos una petición POST con axios
axios
  .post(url, data) // Enviamos la solicitud con los datos
  .then((response) => {
    // Si la solicitud es exitosa, mostramos la respuesta de la API
    console.log("Datos recibidos: ", JSON.stringify(response.data, null, 2));
  })
  .catch((error) => {
    // Si hay un error en la solicitud, verificamos si hay una respuesta del servidor
    if (error.response) {
      console.error(error.response.data); // Mostramos el error devuelto por la API
    } else {
      // Si no hay respuesta del servidor, mostramos el mensaje de error
      console.error("Error al enviar la solicitud: ", error.message);
    }
  });
