const axios = require("axios"); // Importamos Axios para hacer solicitudes HTTP

// URL de la API donde se actualizará un comentario específico
const url =
  "https://ejercicio-apirest-nodejs.onrender.com/api/publication/66ezbHa2C9WK3AvU7sAA/comment/3";

// Datos que se enviarán en la solicitud para actualizar el comentario
const data = {
  content: "hola", // Nuevo contenido del comentario
};

// Configuración de la solicitud con los encabezados adecuados
const config = {
  headers: {
    "Content-Type": "application/json", // Especificamos que los datos se envían en formato JSON
    Accept: "application/json", // Indicamos que esperamos recibir JSON como respuesta
  },
};

// Realizar petición PUT para actualizar el comentario
axios
  .put(url, data) // Enviamos la solicitud con la URL y datos
  .then((response) => {
    // Si la solicitud es exitosa, mostramos la respuesta del servidor
    console.log(
      "Publicación actualizada:",
      JSON.stringify(response.data, null, 2)
    );
  })
  .catch((error) => {
    // Si ocurre un error, lo manejamos adecuadamente
    if (error.response) {
      // Si el error tiene una respuesta del servidor, mostramos los detalles
      console.error("Error en la respuesta:", error.response.data);
    } else {
      // Si no hay respuesta del servidor, mostramos el mensaje de error
      console.error("Error en la solicitud:", error.message);
    }
  });
