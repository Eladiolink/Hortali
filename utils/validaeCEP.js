export default (cep) => {
  // Remover caracteres especiais
  cep = cep.replace(/\D/g, "");

  // Verificar se o CEP tem o formato correto (8 dígitos)
  if (cep.length !== 8) {
    return false;
  }

  // Validar os dígitos do CEP
  const regex = /^[0-9]{8}$/;
  if (!regex.test(cep)) {
    return false;
  }

  // CEP válido
  return true;
}