<h1 align="center">🧠 Validador de CPF</h1>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=7AFFB6&center=true&vCenter=true&width=435&lines=Valide+CPFs+de+forma+f%C3%A1cil!;R%C3%A1pido+%26+eficiente+com+JavaScript!;Open+Source+e+100%25+Gratuito." alt="Typing SVG" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square">
  <img src="https://img.shields.io/badge/feito%20por-Apoloundifinied-blueviolet?style=flat-square">
  <img src="https://img.shields.io/badge/status-em%20desenvolvimento-important?style=flat-square">
</p>

---

## 📌 Sobre

Este é um simples e funcional validador de CPF feito com JavaScript. Ele pode ser facilmente integrado em formulários, APIs ou qualquer sistema web que necessite verificar a validade de um CPF.

---

## 🚀 Como Usar

### Importando no seu projeto:
```js
// Copie a função para seu projeto
function validaCPF(cpf) {
  var Soma = 0
  var Resto

  var strCPF = String(cpf).replace(/[^\d]/g, '')

  if (strCPF.length !== 11) return false

  if (
    [
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
    ].includes(strCPF)
  ) return false

  for (let i = 1; i <= 9; i++) {
    Soma += parseInt(strCPF.substring(i - 1, i)) * (11 - i)
  }

  Resto = (Soma * 10) % 11

  if (Resto === 10 || Resto === 11) Resto = 0
  if (Resto !== parseInt(strCPF.substring(9, 10))) return false

  Soma = 0
  for (let i = 1; i <= 10; i++) {
    Soma += parseInt(strCPF.substring(i - 1, i)) * (12 - i)
  }

  Resto = (Soma * 10) % 11

  if (Resto === 10 || Resto === 11) Resto = 0
  return Resto === parseInt(strCPF.substring(10, 11))
}
