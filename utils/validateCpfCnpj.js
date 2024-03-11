export default validateCPF_CNPJ = (str) => {
    // Remove todos os caracteres que não sejam dígitos
    str = str.replace(/\D/g, '');
  
    // Verifica se a string tem 11 ou 14 dígitos
    if (str.length === 11) {
      // Valida CPF
      const cpfRegex = /^(\d{3})(\d{3})(\d{3})(\d{2})$/;
      if (!cpfRegex.test(str)) return false;
  
      // Verifica se todos os dígitos são iguais
      if (/^(\d)\1{10}$/.test(str)) return false;
  
      // Validação do dígito verificador
      let sum = 0;
      let remainder;
      for (let i = 1; i <= 9; i++) sum += parseInt(str.substring(i - 1, i)) * (11 - i);
      remainder = (sum * 10) % 11;
      if ((remainder === 10) || (remainder === 11)) remainder = 0;
      if (remainder !== parseInt(str.substring(9, 10))) return false;
      sum = 0;
      for (let i = 1; i <= 10; i++) sum += parseInt(str.substring(i - 1, i)) * (12 - i);
      remainder = (sum * 10) % 11;
      if ((remainder === 10) || (remainder === 11)) remainder = 0;
      if (remainder !== parseInt(str.substring(10, 11))) return false;
      return true;
    } else if (str.length === 14) {
      // Valida CNPJ
      const cnpjRegex = /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/;
      if (!cnpjRegex.test(str)) return false;
  
      // Validação do dígito verificador
      let size = str.length - 2;
      let numbers = str.substring(0, size);
      let digits = str.substring(size);
      let sum = 0;
      let pos = size - 7;
      for (let i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2) pos = 9;
      }
      let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result !== parseInt(digits.charAt(0))) return false;
  
      size = size + 1;
      numbers = str.substring(0, size);
      sum = 0;
      pos = size - 7;
      for (let i = size; i >= 1; i--) {
        sum += numbers.charAt(size - i) * pos--;
        if (pos < 2) pos = 9;
      }
      result = sum % 11 < 2 ? 0 : 11 - sum % 11;
      if (result !== parseInt(digits.charAt(1))) return false;
  
      return true;
    } else {
      // Retorna falso se não tiver 11 ou 14 dígitos
      return false;
    }
  };
