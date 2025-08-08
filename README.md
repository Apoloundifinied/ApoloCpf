# CPFX - Validador de CPF 🚀

[![Version](https://img.shields.io/badge/version-1.0.0-blue)](https://github.com/Apoloundifinied/ApoloCpf/releases)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](#)
[![Made with JavaScript](https://img.shields.io/badge/made%20with-JavaScript-yellow)](#)

---

## ⚡ Sobre o CPFX

**CPFX** é um validador moderno, leve e modular para CPF em JavaScript, perfeito para usar em seus projetos front-end ou back-end com facilidade!

<p align="center">
  <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="Validation Animation" width="300"/>
</p>

---

## 🚀 Como usar

### Importando em projetos ES Modules:

```js
import { validar } from 'cpfx'; // substitua pelo caminho real, ex: './cpfx.js'

console.log(validar('123.456.789-09')); // false
console.log(validar('935.411.347-80')); // true
