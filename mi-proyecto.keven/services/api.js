function handleError(error) {
  console.log("Ocurrió un error:", error.message);
}

function fetchData(url) {
  try {
    if (!url) {
      throw new Error("URL inválida");
    }
    return { data: "Datos recibidos correctamente" };
  } catch (error) {
    handleError(error);
  }
}

module.exports = fetchData;
