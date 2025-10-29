
function validarEmail(email) {
  if (!email || email.trim() === '') {
    return false; // Maneja entrada vacía
  }
  return email.includes('@');
}

module.exports = validarEmail;

