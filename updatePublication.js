const axios = require("axios");

// URL de la API donde se actualizará la publicación existente
const url =
  "https://ejercicio-apirest-nodejs.onrender.com/api/publication/Q5jmRKtMtd2S7XMtYRXW";

// Datos de la publicación que se enviarán en la petición
const data = {
  comentarios: [], // Se envía un arreglo vacío de comentarios
  author: "Ismael Espericueta", // Nombre del autor de la publicación
  title: "Uso de la IA en el sistema educativo", // Título de la publicación
  content: "IA como asistente en las aulas", // Contenido de la publicación
  datePub: "2025-03-20T03:58:46.273Z", // Fecha de publicación en formato ISO
  popularidad: 0, // Se establece la popularidad en 0
};

// Realizar petición PUT para actualizar la publicación
axios
  .put(url, data)
  .then((response) => {
    // Una vez que se actualiza, se hace una solicitud GET para verificar los cambios
    return axios.get(url);
  })
  .then((getResponse) => {
    // Se muestra la respuesta con los datos actualizados
    console.log(
      "Respuesta de actualización:",
      JSON.stringify(getResponse.data, null, 2)
    );
  })
  .catch((error) => {
    // Manejo de errores
    if (error.response) {
      console.error("Error en la respuesta:", error.response.data);
    } else {
      console.error("Error en la solicitud:", error.message);
    }
  });
