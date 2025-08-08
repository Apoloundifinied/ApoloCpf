// cpfx.js

// Remove caracteres não numéricos
const sanitize = (cpf) => cpf.replace(/\D/g, '');

// Verifica se todos os dígitos são iguais
const isAllDigitsEqual = (cpf) => /^(\d)\1{10}$/.test(cpf);

// Calcula o dígito verificador
const calcVerifier = (cpf, factor) => {
  let total = 0;
  for (let i = 0; i < factor - 1; i++) {
    total += parseInt(cpf[i]) * (factor - i);
  }
  const remainder = (total * 10) % 11;
  return remainder === 10 ? 0 : remainder;
};

// Validação principal
export const validar = (cpfInput) => {
  const cpf = sanitize(cpfInput);
  if (cpf.length !== 11 || isAllDigitsEqual(cpf)) return false;

  const digit1 = calcVerifier(cpf, 10);
  const digit2 = calcVerifier(cpf, 11);

  return digit1 === parseInt(cpf[9]) && digit2 === parseInt(cpf[10]);
};

export const nome = 'CPFX - Validador de CPF';
export const versao = '1.0.0';
