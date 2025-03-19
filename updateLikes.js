const axios = require("axios");

// URL de la API
const url =
  "https://ejercicio-apirest-nodejs.onrender.com/api/publication/Tged8Am4UXORuwoA3Jxk/comment/2/like";

// Datos a enviar en la solicitud PATCH
const data = {
  increment: true, // Incrementa el número de "likes"
};

// Realizar la solicitud PATCH
axios
  .patch(url, data)
  .then((patchResponse) => {
    console.log("PATCH realizado con éxito:", patchResponse.data);

    // Ahora hacemos una solicitud GET para verificar los cambios
    return axios.get(
      "https://ejercicio-apirest-nodejs.onrender.com/api/publication/Tged8Am4UXORuwoA3Jxk"
    );
  })
  .catch((error) => {
    if (error.response) {
      console.error("Error en la respuesta:", error.response.data);
    } else {
      console.error("Error en la solicitud:", error.message);
    }
  });
