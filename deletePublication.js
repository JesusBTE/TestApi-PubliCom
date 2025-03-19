const axios = require("axios");

// URL de la API para eliminar la publicación específica
const url =
  "https://ejercicio-apirest-nodejs.onrender.com/api/publication/w0he2Lgxr0glJkM5d06N";

// Realizar petición DELETE para eliminar la publicación
axios
  .delete(url)
  .then((response) => {
    // Si la eliminación es exitosa, mostramos la respuesta del servidor
    console.log(
      "Publicación eliminada:",
      JSON.stringify(response.data, null, 2)
    );
  })
  .catch((error) => {
    // Manejo de errores
    if (error.response) {
      // Si hay un error con respuesta del servidor, mostramos detalles
      console.error("Error en la respuesta:", error.response.data);
      console.error("Código de estado HTTP:", error.response.status);
    } else {
      // Si el error ocurre antes de recibir respuesta, mostramos el mensaje de error
      console.error("Error al enviar la solicitud:", error.message);
    }
  });
