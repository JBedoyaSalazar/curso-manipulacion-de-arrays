# Curso de Manipulación de Arrays en JavaScript 🚀

Este repositorio contiene ejercicios prácticos y ejemplos detallados sobre los métodos de manipulación de arrays en JavaScript, desarrollados durante el curso de **Platzi**.

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Platzi](https://img.shields.io/badge/Platzi-Green?style=for-the-badge)

## 📋 Tabla de Contenidos
- [Descripción](#descripción)
- [Archivos y Métodos](#archivos-y-métodos)
- [Cómo ejecutar](#cómo-ejecutar)

---

## 📖 Descripción
El objetivo de este proyecto es profundizar en el uso de métodos modernos de arrays introducidos en ES6+, entendiendo su funcionamiento, mutabilidad y casos de uso en aplicaciones reales.

---

## 📂 Archivos y Métodos

A continuación se detallan los archivos incluidos en la carpeta `server/` y qué método de array demuestran:

### 1. `01-for-each.js`
- **Método:** `.forEach()`
- **Uso:** Recorrido básico de arrays para ejecutar una función por cada elemento. Es un reemplazo moderno del ciclo `for`.

### 2. `02-map.js`
- **Método:** `.map()`
- **Uso:** Crea un nuevo array transformando cada elemento del array original. Es **inmutable**.

### 3. `03-map-reloaded.js`
- **Concepto:** `.map()` Avanzado.
- **Uso:** Demuestra cómo transformar objetos dentro de un array, agregar propiedades (como impuestos/taxes) y la importancia de usar el **spread operator** (`...`) para evitar mutar el array original.

### 4. `04-filter.js`
- **Método:** `.filter()`
- **Uso:** Filtra elementos basados en una condición lógica. Ejemplo: filtrar órdenes por estado 'pending' o realizar búsquedas por nombre.

### 5. `05-reduce.js`
- **Método:** `.reduce()`
- **Uso:** Reduce un array a un único valor (ej. una suma total).

### 6. `06-reduce-reloaded.js`
- **Concepto:** `.reduce()` para histogramas.
- **Uso:** Crea objetos de frecuencia (conteo de elementos) y agrupaciones complejas de datos.

### 7. `07-some.js`
- **Método:** `.some()`
- **Uso:** Retorna `true` si al menos un elemento cumple con la condición. Útil para validaciones rápidas o cruce de fechas/horarios.

### 8. `08-every.js`
- **Método:** `.every()`
- **Uso:** Retorna `true` únicamente si **todos** los elementos cumplen con la condición especificada.

### 9. `09-find.js`
- **Método:** `.find()` y `.findIndex()`
- **Uso:** Busca un elemento específico o su índice dentro de un array.

### 10. `10-includes.js`
- **Método:** `.includes()`
- **Uso:** Verifica si un elemento existe dentro de un array (retorna booleano).

### 11. `11-join-split.js`
- **Métodos:** `.join()` y `.split()`
- **Uso:** Unión de elementos de un array en un string y división de strings en arrays. Ejemplo: generación de Slugs para URLs.

### 12. `12-concat.js`
- **Método:** `.concat()` y Spread Operator.
- **Uso:** Fusión de múltiples arrays en uno nuevo sin mutar los originales.

### 13. `13-flat-flatMap.js`
- **Métodos:** `.flat()` y `.flatMap()`
- **Uso:** Aplanamiento de matrices (arrays de arrays) y transformación seguida de aplanamiento en un solo paso.

### 14. `14-mutable.js`
- **Concepto:** Mutabilidad vs Inmutabilidad.
- **Uso:** Ejemplos de cómo eliminar o actualizar elementos usando `.splice()` y cómo realizar actualizaciones de forma segura.

### 15. `15-sort.js`
- **Método:** `.sort()`
- **Uso:** Ordenamiento de elementos. Se muestra cómo ordenar números y objetos por propiedades específicas (como el precio).

---

## 🚀 Cómo ejecutar
Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, ejecuta cualquier archivo desde la terminal:

```bash
node server/nombre-del-archivo.js
```

Ejemplo:
```bash
node server/03-map-reloaded.js
```

---
Hecho con ❤️ en el curso de Manipulación de Arrays de Platzi.